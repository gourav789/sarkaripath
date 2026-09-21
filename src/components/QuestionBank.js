"use client";

import { useMemo, useState } from "react";

export default function QuestionBank({ meta, sections }) {
  const [activeSection, setActiveSection] = useState("all");
  const [showAnswers, setShowAnswers] = useState(false);

  // Flat numbered list across sections (question numbers 1..200 continuous)
  const numbered = useMemo(() => {
    let n = 0;
    return sections.map((sec) => ({
      ...sec,
      items: sec.questions.map((q) => ({ ...q, no: ++n })),
    }));
  }, [sections]);

  const visibleSections =
    activeSection === "all"
      ? numbered
      : numbered.filter((s) => s.id === activeSection);

  return (
    <div>
      {/* Header card */}
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white shadow-lg shadow-brand-600/20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-brand-100">{meta.exam}</p>
            <h1 className="mt-1 text-2xl font-extrabold md:text-3xl">{meta.title}</h1>
            <p className="mt-2 max-w-xl text-sm text-brand-100">{meta.note}</p>
          </div>
          <div className="rounded-2xl bg-white/15 px-5 py-4 text-center backdrop-blur">
            <div className="text-3xl font-extrabold">{meta.total}</div>
            <div className="text-xs text-brand-100">Questions</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="sticky top-16 z-20 mt-6 rounded-xl border border-slate-200 bg-white/90 p-3 backdrop-blur">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveSection("all")}
            className={
              "rounded-full px-3 py-1.5 text-xs font-semibold transition " +
              (activeSection === "all"
                ? "bg-brand-600 text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50")
            }
          >
            All ({meta.total})
          </button>
          {numbered.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={
                "rounded-full px-3 py-1.5 text-xs font-semibold transition " +
                (activeSection === s.id
                  ? "bg-brand-600 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50")
              }
            >
              {s.name.split(" (")[0]} ({s.questions.length})
            </button>
          ))}
          <div className="ml-auto">
            <button
              onClick={() => {
                setShowAnswers((v) => !v);
                if (!showAnswers) {
                  setTimeout(() => {
                    document.getElementById("answer-key")?.scrollIntoView({ behavior: "smooth" });
                  }, 50);
                }
              }}
              className="rounded-lg bg-accent-500 px-4 py-2 text-xs font-bold text-white transition hover:bg-accent-600"
            >
              {showAnswers ? "Hide Answers" : "Show Answer Key"}
            </button>
          </div>
        </div>
      </div>

      {/* Questions */}
      <div className="mt-8 space-y-10">
        {visibleSections.map((sec) => (
          <section key={sec.id}>
            <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <span className="h-5 w-1.5 rounded-full bg-brand-600" />
              {sec.name}
            </h2>
            <div className="mt-4 space-y-4">
              {sec.items.map((item) => (
                <div
                  key={item.no}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="font-medium text-slate-900">
                    <span className="mr-2 inline-grid h-6 w-6 place-items-center rounded-md bg-brand-50 text-xs font-bold text-brand-700">
                      {item.no}
                    </span>
                    {item.q}
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {item.options.map((opt, i) => {
                      const isCorrect = showAnswers && i === item.answer;
                      return (
                        <div
                          key={i}
                          className={
                            "rounded-lg border px-3 py-2 text-sm transition " +
                            (isCorrect
                              ? "border-green-500 bg-green-50 font-semibold text-green-700"
                              : "border-slate-200 bg-slate-50 text-slate-700")
                          }
                        >
                          <span className="mr-2 font-bold text-slate-400">
                            {String.fromCharCode(65 + i)}.
                          </span>
                          {opt}
                          {isCorrect && <span className="ml-2">✓</span>}
                        </div>
                      );
                    })}
                  </div>
                  {showAnswers && (
                    <p className="mt-3 rounded-lg bg-brand-50 px-3 py-2 text-sm text-brand-800">
                      <span className="font-semibold">Explanation: </span>
                      {item.explain}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Answer key (bottom) */}
      <section id="answer-key" className="mt-14 scroll-mt-24">
        <div className="rounded-2xl border-2 border-dashed border-accent-500/50 bg-accent-500/5 p-6">
          <h2 className="text-xl font-extrabold text-slate-900">Answer Key</h2>
          <p className="mt-1 text-sm text-slate-500">
            Sabhi 200 questions ke sahi jawaab. (Detailed explanation dekhne ke liye upar "Show
            Answer Key" dabao.)
          </p>
          <div className="mt-5 space-y-5">
            {numbered.map((sec) => (
              <div key={sec.id}>
                <h3 className="text-sm font-bold text-slate-700">{sec.name}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {sec.items.map((item) => (
                    <span
                      key={item.no}
                      className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-600"
                    >
                      <span className="font-bold text-slate-400">{item.no}.</span>{" "}
                      <span className="font-semibold text-green-700">
                        {String.fromCharCode(65 + item.answer)}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
