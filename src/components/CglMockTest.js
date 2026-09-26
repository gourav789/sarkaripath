"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { mockTest1Meta, mockTest1Questions } from "@/lib/mockTest1Data";
import { useAuth } from "@/components/AuthProvider";

export default function CglMockTest() {
  // Logged-in user — har user ka apna alag saved state ho (mix na ho)
  const { user } = useAuth();
  // Per-user localStorage key. Agar kisi wajah se user na ho to "guest".
  const storageKey = `cgl_mock_test_1_state_${user?.uid || "guest"}`;
  // Test stages: "intro" | "in_progress" | "completed"
  const [stage, setStage] = useState("intro");
  
  // Timer: 7200 seconds (2 hours)
  const [timeLeft, setTimeLeft] = useState(mockTest1Meta.durationSeconds);
  const [startTime, setStartTime] = useState(null);
  
  // Current question index: 0 to 99
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // User selections: { [questionId]: optionIndex (0..3) }
  const [answers, setAnswers] = useState({});
  
  // Marked for review: Set of questionIds
  const [markedForReview, setMarkedForReview] = useState(new Set());
  
  // Visited questions: Set of questionIds
  const [visitedQuestions, setVisitedQuestions] = useState(new Set([1]));

  // Language preference: "both" | "en" | "hi"
  const [langMode, setLangMode] = useState("both");

  // Filter in completed review: "all" | "correct" | "wrong" | "unattempted" | "reasoning" | "ga" | "quant" | "english"
  const [reviewFilter, setReviewFilter] = useState("all");

  // Submit confirmation modal
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Active section in test palette / view
  const [activeSectionId, setActiveSectionId] = useState("all");

  // Timer reference
  const timerRef = useRef(null);

  // Restore test from localStorage if available (per-user)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.stage === "in_progress") {
          const elapsed = Math.floor((Date.now() - parsed.startTime) / 1000);
          const remaining = mockTest1Meta.durationSeconds - elapsed;
          if (remaining > 0) {
            setStage("in_progress");
            setTimeLeft(remaining);
            setStartTime(parsed.startTime);
            setAnswers(parsed.answers || {});
            setMarkedForReview(new Set(parsed.marked || []));
            setVisitedQuestions(new Set(parsed.visited || [1]));
            setCurrentIndex(parsed.currentIndex || 0);
          } else {
            // Auto submit because time exceeded while away
            setStage("completed");
            setTimeLeft(0);
            setAnswers(parsed.answers || {});
            setMarkedForReview(new Set(parsed.marked || []));
            setVisitedQuestions(new Set(parsed.visited || [1]));
          }
        } else if (parsed.stage === "completed") {
          setStage("completed");
          setTimeLeft(0);
          setAnswers(parsed.answers || {});
          setMarkedForReview(new Set(parsed.marked || []));
        }
      }
    } catch (e) {
      console.error("Failed to restore mock test state", e);
    }
  }, [storageKey]);

  // Timer countdown loop
  useEffect(() => {
    if (stage === "in_progress") {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleSubmitTest(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [stage]);

  // Persist state to localStorage on changes
  useEffect(() => {
    if (stage === "in_progress" && startTime) {
      try {
        localStorage.setItem(
          storageKey,
          JSON.stringify({
            stage: "in_progress",
            startTime,
            answers,
            marked: Array.from(markedForReview),
            visited: Array.from(visitedQuestions),
            currentIndex,
          })
        );
      } catch (e) {
        // ignore
      }
    } else if (stage === "completed") {
      try {
        localStorage.setItem(
          storageKey,
          JSON.stringify({
            stage: "completed",
            answers,
            marked: Array.from(markedForReview),
          })
        );
      } catch (e) {
        // ignore
      }
    }
  }, [stage, startTime, answers, markedForReview, visitedQuestions, currentIndex, storageKey]);

  // Start test handler
  const handleStartTest = () => {
    const now = Date.now();
    setStartTime(now);
    setTimeLeft(mockTest1Meta.durationSeconds);
    setStage("in_progress");
    setCurrentIndex(0);
    setVisitedQuestions(new Set([1]));
  };

  // Submit test handler
  const handleSubmitTest = (isAuto = false) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setStage("completed");
    setShowSubmitModal(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Retake test
  const handleRetakeTest = () => {
    try {
      localStorage.removeItem(storageKey);
    } catch (e) {}
    setStage("intro");
    setTimeLeft(mockTest1Meta.durationSeconds);
    setAnswers({});
    setMarkedForReview(new Set());
    setVisitedQuestions(new Set([1]));
    setCurrentIndex(0);
    setReviewFilter("all");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Format time (HH:MM:SS)
  const formatTimer = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Current Question
  const currentQ = mockTest1Questions[currentIndex];

  // Navigation handlers
  const goToQuestion = (index) => {
    if (index >= 0 && index < mockTest1Questions.length) {
      setCurrentIndex(index);
      setVisitedQuestions((prev) => {
        const next = new Set(prev);
        next.add(mockTest1Questions[index].id);
        return next;
      });
    }
  };

  const handleSelectOption = (optionIndex) => {
    if (stage !== "in_progress") return; // locked if completed
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIndex,
    }));
  };

  const handleClearResponse = () => {
    if (stage !== "in_progress") return;
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
  };

  const handleToggleReview = () => {
    setMarkedForReview((prev) => {
      const next = new Set(prev);
      if (next.has(currentQ.id)) {
        next.delete(currentQ.id);
      } else {
        next.add(currentQ.id);
      }
      return next;
    });
  };

  // Calculate scores and statistics
  const results = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    const sectionStats = {
      reasoning: { name: "Part-A: Reasoning", total: 25, correct: 0, wrong: 0, unattempted: 0 },
      ga: { name: "Part-B: General Awareness", total: 25, correct: 0, wrong: 0, unattempted: 0 },
      quant: { name: "Part-C: Quantitative Aptitude", total: 25, correct: 0, wrong: 0, unattempted: 0 },
      english: { name: "Part-D: English Comprehension", total: 25, correct: 0, wrong: 0, unattempted: 0 },
    };

    mockTest1Questions.forEach((q) => {
      const userAns = answers[q.id];
      const sec = sectionStats[q.section];

      if (userAns === undefined) {
        unattempted++;
        if (sec) sec.unattempted++;
      } else if (userAns === q.answer) {
        correct++;
        if (sec) sec.correct++;
      } else {
        wrong++;
        if (sec) sec.wrong++;
      }
    });

    const positiveMarks = correct * mockTest1Meta.correctMark;
    const negativeMarks = wrong * mockTest1Meta.wrongPenalty;
    const totalScore = Math.max(0, positiveMarks - negativeMarks);
    const attemptedCount = correct + wrong;
    const accuracy = attemptedCount > 0 ? ((correct / attemptedCount) * 100).toFixed(1) : 0;
    const percentage = ((totalScore / mockTest1Meta.totalMarks) * 100).toFixed(1);

    return {
      correct,
      wrong,
      unattempted,
      positiveMarks,
      negativeMarks,
      totalScore,
      accuracy,
      percentage,
      sectionStats,
    };
  }, [answers]);

  // Filtered review questions in completed stage
  const filteredReviewQuestions = useMemo(() => {
    return mockTest1Questions.filter((q) => {
      const userAns = answers[q.id];
      const isCorrect = userAns !== undefined && userAns === q.answer;
      const isWrong = userAns !== undefined && userAns !== q.answer;
      const isUnattempted = userAns === undefined;

      if (reviewFilter === "all") return true;
      if (reviewFilter === "correct") return isCorrect;
      if (reviewFilter === "wrong") return isWrong;
      if (reviewFilter === "unattempted") return isUnattempted;
      if (["reasoning", "ga", "quant", "english"].includes(reviewFilter)) {
        return q.section === reviewFilter;
      }
      return true;
    });
  }, [answers, reviewFilter]);

  // Section filtered questions for the active test palette
  const paletteQuestions = useMemo(() => {
    if (activeSectionId === "all") return mockTest1Questions;
    return mockTest1Questions.filter((q) => q.section === activeSectionId);
  }, [activeSectionId]);

  /* ========================================================================== */
  /* STAGE 1: INTRO / INSTRUCTIONS SCREEN                                      */
  /* ========================================================================== */
  if (stage === "intro") {
    return (
      <div className="container-page py-10">
        {/* Breadcrumb */}
        <div className="text-sm text-slate-500">
          <Link href="/exams" className="hover:text-brand-600">
            Exams
          </Link>{" "}
          /{" "}
          <Link href="/exams/ssc-cgl" className="hover:text-brand-600">
            SSC CGL
          </Link>{" "}
          / <span className="text-slate-700">Mock Test 1</span>
        </div>

        {/* Hero Header */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-brand-900 to-slate-950 p-8 text-white shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/20 px-3.5 py-1 text-xs font-semibold text-brand-300 backdrop-blur border border-brand-400/30">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Live CBT Exam Simulation
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl text-white">
                SSC CGL Mock Test 1
              </h1>
              <p className="mt-2 text-slate-300 text-sm md:text-base leading-relaxed">
                Full-length 100 questions exam-pattern practice test. Exact Tier 1 questions in Hindi &amp; English with real-time 2-hour countdown timer, negative marking (+2, -0.5), and comprehensive step-by-step English explanations unlocked upon completion.
              </p>
            </div>

            <div className="flex flex-col items-center sm:items-end gap-3">
              <button
                onClick={handleStartTest}
                className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-accent-500 to-amber-500 px-8 py-4 text-base font-extrabold text-slate-950 shadow-xl shadow-amber-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:from-accent-400 hover:to-amber-400 active:scale-95"
              >
                <span>Start Mock Test</span>
                <span className="text-xl transition-transform group-hover:translate-x-1">🚀</span>
              </button>
              <span className="text-xs text-slate-400 font-medium">Free • Instant Analysis • Solutions</span>
            </div>
          </div>
        </div>

        {/* Exam Quick Specs Grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-center">
            <span className="text-2xl">⏱️</span>
            <div className="mt-2 text-2xl font-black text-slate-900">120 Mins</div>
            <div className="text-xs font-medium text-slate-500">2 Hours Duration</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-center">
            <span className="text-2xl">❓</span>
            <div className="mt-2 text-2xl font-black text-slate-900">100</div>
            <div className="text-xs font-medium text-slate-500">Total Questions</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-center">
            <span className="text-2xl">🎯</span>
            <div className="mt-2 text-2xl font-black text-slate-900">200</div>
            <div className="text-xs font-medium text-slate-500">Maximum Marks</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm text-center">
            <span className="text-2xl">⚖️</span>
            <div className="mt-2 text-2xl font-black text-emerald-600">+2 / -0.5</div>
            <div className="text-xs font-medium text-slate-500">Marking Scheme</div>
          </div>
        </div>

        {/* Sectional Breakdown & Test Rules */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Section table */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="h-4 w-1.5 rounded-full bg-brand-600" />
              Sectional Breakdown
            </h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 font-semibold text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Section</th>
                    <th className="px-4 py-3 text-center">Questions</th>
                    <th className="px-4 py-3 text-center">Marks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="px-4 py-3 font-medium">Part-A: General Intelligence &amp; Reasoning</td>
                    <td className="px-4 py-3 text-center font-bold text-slate-900">25 (Q1–Q25)</td>
                    <td className="px-4 py-3 text-center font-bold text-brand-600">50</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Part-B: General Awareness</td>
                    <td className="px-4 py-3 text-center font-bold text-slate-900">25 (Q26–Q50)</td>
                    <td className="px-4 py-3 text-center font-bold text-brand-600">50</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Part-C: Quantitative Aptitude</td>
                    <td className="px-4 py-3 text-center font-bold text-slate-900">25 (Q51–Q75)</td>
                    <td className="px-4 py-3 text-center font-bold text-brand-600">50</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Part-D: English Comprehension</td>
                    <td className="px-4 py-3 text-center font-bold text-slate-900">25 (Q76–Q100)</td>
                    <td className="px-4 py-3 text-center font-bold text-brand-600">50</td>
                  </tr>
                </tbody>
                <tfoot className="bg-slate-50 font-extrabold text-slate-900">
                  <tr>
                    <td className="px-4 py-3">Total</td>
                    <td className="px-4 py-3 text-center text-brand-700">100 Questions</td>
                    <td className="px-4 py-3 text-center text-brand-700">200 Marks</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Test Instructions & Rules */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="h-4 w-1.5 rounded-full bg-accent-500" />
                Exam Rules &amp; Guidelines
              </h2>
              <ul className="mt-4 space-y-3 text-xs leading-relaxed text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>Correct Answer:</strong> +2.0 marks will be awarded for each correct response.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✗</span>
                  <span><strong>Negative Marking:</strong> 0.50 marks will be deducted for every incorrect response.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">⏳</span>
                  <span><strong>2-Hour Strict Timer:</strong> The test timer starts as soon as you press "Start Mock Test". At 2 hours (00:00:00), the test will automatically close and lock.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 font-bold">💡</span>
                  <span><strong>Solutions &amp; Explanations:</strong> Correct answers and detailed step-by-step explanations in English will be revealed immediately after the test is completed or times out.</span>
                </li>
              </ul>
            </div>

            <button
              onClick={handleStartTest}
              className="mt-6 w-full rounded-xl bg-brand-600 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-brand-700 active:scale-95"
            >
              I Understand, Begin Test Now →
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ========================================================================== */
  /* STAGE 2: IN PROGRESS (LIVE 2-HOUR CBT TEST)                                */
  /* ========================================================================== */
  if (stage === "in_progress") {
    const isUrgent = timeLeft < 600; // less than 10 mins
    const answeredCount = Object.keys(answers).length;

    return (
      <div className="min-h-screen bg-slate-100 pb-16">
        {/* Sticky Top CBT Header */}
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur shadow-sm">
          <div className="container-page py-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* Title & Section Selector */}
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-brand-600 px-2.5 py-1 text-xs font-black text-white">
                  CGL MOCK 1
                </span>
                <span className="hidden text-sm font-bold text-slate-800 md:inline">
                  {currentQ.sectionName}
                </span>
              </div>

              {/* Live 2-Hour Timer Display */}
              <div className="flex items-center gap-4">
                <div
                  className={
                    "flex items-center gap-2 rounded-xl px-4 py-2 font-mono text-sm font-black shadow-inner " +
                    (isUrgent
                      ? "bg-rose-100 text-rose-700 animate-pulse border border-rose-300"
                      : "bg-slate-900 text-amber-400 border border-slate-800")
                  }
                >
                  <span className="text-base">⏱️</span>
                  <span>Time Left: {formatTimer(timeLeft)}</span>
                </div>

                {/* Answered Counter */}
                <div className="hidden sm:flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{answeredCount}/100 Answered</span>
                </div>

                {/* Submit Test Button */}
                <button
                  onClick={() => setShowSubmitModal(true)}
                  className="rounded-xl bg-accent-500 px-4 py-2 text-xs font-extrabold text-white shadow-sm transition hover:bg-accent-600 active:scale-95"
                >
                  Submit Test
                </button>
              </div>
            </div>

            {/* Section Quick Tabs */}
            <div className="mt-2.5 flex overflow-x-auto pb-1 gap-2 text-xs">
              {mockTest1Meta.sections.map((sec) => {
                const isActiveSec = currentQ.section === sec.id;
                // Count answered in this section
                const secAnswered = mockTest1Questions
                  .slice(sec.startQ - 1, sec.endQ)
                  .filter((q) => answers[q.id] !== undefined).length;

                return (
                  <button
                    key={sec.id}
                    onClick={() => {
                      goToQuestion(sec.startQ - 1);
                      setActiveSectionId(sec.id);
                    }}
                    className={
                      "flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-1.5 font-bold transition " +
                      (isActiveSec
                        ? "bg-brand-600 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200")
                    }
                  >
                    <span>{sec.name.split(":")[1] || sec.name}</span>
                    <span
                      className={
                        "rounded-full px-1.5 py-0.2 text-[10px] " +
                        (isActiveSec ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700")
                      }
                    >
                      {secAnswered}/25
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {/* Main Test Work Area */}
        <main className="container-page mt-6 grid gap-6 lg:grid-cols-12">
          {/* Left / Main Question Area */}
          <div className="lg:col-span-8 flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm min-h-[520px]">
            <div>
              {/* Question Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-brand-50 px-3 py-1 text-sm font-black text-brand-700">
                    Question {currentIndex + 1} of 100
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {currentQ.sectionName}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700">
                    +2.0
                  </span>
                  <span className="rounded-md bg-rose-50 px-2 py-0.5 text-xs font-bold text-rose-700">
                    -0.5
                  </span>

                  {/* Language switch */}
                  <div className="flex rounded-lg border border-slate-200 bg-slate-50 p-0.5 text-[11px] font-semibold">
                    <button
                      onClick={() => setLangMode("both")}
                      className={`rounded px-2 py-0.5 ${langMode === "both" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500"}`}
                    >
                      Bilingual
                    </button>
                    <button
                      onClick={() => setLangMode("en")}
                      className={`rounded px-2 py-0.5 ${langMode === "en" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500"}`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => setLangMode("hi")}
                      className={`rounded px-2 py-0.5 ${langMode === "hi" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500"}`}
                    >
                      हिंदी
                    </button>
                  </div>
                </div>
              </div>

              {/* Question Statement */}
              <div className="mt-5 space-y-3">
                {(langMode === "both" || langMode === "en") && (
                  <p className="text-base font-semibold leading-relaxed text-slate-900 whitespace-pre-line">
                    {currentQ.q_en}
                  </p>
                )}
                {(langMode === "both" || langMode === "hi") && currentQ.q_hi && (
                  <p className="text-sm font-medium leading-relaxed text-slate-600 whitespace-pre-line border-l-2 border-brand-300 pl-3 py-0.5">
                    {currentQ.q_hi}
                  </p>
                )}
              </div>

              {/* Options */}
              <div className="mt-6 space-y-3">
                {currentQ.options.map((optionText, optIndex) => {
                  const isSelected = answers[currentQ.id] === optIndex;
                  return (
                    <button
                      key={optIndex}
                      type="button"
                      onClick={() => handleSelectOption(optIndex)}
                      className={
                        "flex w-full items-center gap-3.5 rounded-xl border p-4 text-left text-sm transition " +
                        (isSelected
                          ? "border-brand-600 bg-brand-50/70 font-semibold text-brand-900 shadow-xs ring-1 ring-brand-500"
                          : "border-slate-200 bg-slate-50/50 text-slate-800 hover:border-slate-300 hover:bg-slate-100")
                      }
                    >
                      <span
                        className={
                          "grid h-6 w-6 shrink-0 place-items-center rounded-full border text-xs font-bold transition " +
                          (isSelected
                            ? "border-brand-600 bg-brand-600 text-white"
                            : "border-slate-300 bg-white text-slate-600")
                        }
                      >
                        {String.fromCharCode(65 + optIndex)}
                      </span>
                      <span className="leading-snug">{optionText}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleToggleReview}
                  className={
                    "rounded-xl px-3.5 py-2 text-xs font-bold transition " +
                    (markedForReview.has(currentQ.id)
                      ? "bg-purple-600 text-white"
                      : "border border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100")
                  }
                >
                  {markedForReview.has(currentQ.id) ? "★ Marked for Review" : "☆ Mark for Review"}
                </button>

                {answers[currentQ.id] !== undefined && (
                  <button
                    type="button"
                    onClick={handleClearResponse}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    Clear Response
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={currentIndex === 0}
                  onClick={() => goToQuestion(currentIndex - 1)}
                  className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition hover:bg-slate-50 disabled:opacity-40"
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (currentIndex < mockTest1Questions.length - 1) {
                      goToQuestion(currentIndex + 1);
                    } else {
                      setShowSubmitModal(true);
                    }
                  }}
                  className="rounded-xl bg-brand-600 px-5 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-brand-700 active:scale-95"
                >
                  {currentIndex < mockTest1Questions.length - 1 ? "Save & Next →" : "Review & Submit"}
                </button>
              </div>
            </div>
          </div>

          {/* Right Palette Column */}
          <div className="lg:col-span-4 space-y-4">
            {/* Question Matrix */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-sm font-bold text-slate-900">Question Palette</h3>
                <div className="flex gap-1 text-[11px] font-semibold text-slate-500">
                  <select
                    value={activeSectionId}
                    onChange={(e) => setActiveSectionId(e.target.value)}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700 outline-none"
                  >
                    <option value="all">All Questions (100)</option>
                    <option value="reasoning">Part-A: Reasoning (1-25)</option>
                    <option value="ga">Part-B: General Awareness (26-50)</option>
                    <option value="quant">Part-C: Quantitative (51-75)</option>
                    <option value="english">Part-D: English (76-100)</option>
                  </select>
                </div>
              </div>

              {/* Legend */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="h-3.5 w-3.5 rounded-md bg-emerald-500 text-white font-bold text-[9px] grid place-items-center" />
                  <span>Answered ({Object.keys(answers).length})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3.5 w-3.5 rounded-md bg-purple-600 text-white font-bold text-[9px] grid place-items-center" />
                  <span>Review ({markedForReview.size})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3.5 w-3.5 rounded-md bg-rose-500 text-white font-bold text-[9px] grid place-items-center" />
                  <span>Not Answered ({visitedQuestions.size - Object.keys(answers).length})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3.5 w-3.5 rounded-md bg-slate-200" />
                  <span>Not Visited ({100 - visitedQuestions.size})</span>
                </div>
              </div>

              {/* 100 Questions Grid */}
              <div className="mt-4 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-5 gap-2 max-h-[340px] overflow-y-auto p-1">
                {paletteQuestions.map((q) => {
                  const qIdx = q.id - 1;
                  const isCurrent = qIdx === currentIndex;
                  const isAnswered = answers[q.id] !== undefined;
                  const isMarked = markedForReview.has(q.id);
                  const isVisited = visitedQuestions.has(q.id);

                  let bgStyle = "bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200";
                  if (isMarked) {
                    bgStyle = "bg-purple-600 text-white font-bold border-purple-700";
                  } else if (isAnswered) {
                    bgStyle = "bg-emerald-500 text-white font-bold border-emerald-600";
                  } else if (isVisited) {
                    bgStyle = "bg-rose-500 text-white font-bold border-rose-600";
                  }

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => goToQuestion(qIdx)}
                      className={
                        `h-9 rounded-lg border text-xs font-bold transition flex items-center justify-center relative ${bgStyle} ` +
                        (isCurrent ? "ring-2 ring-brand-600 ring-offset-2 scale-105" : "")
                      }
                    >
                      {q.id}
                    </button>
                  );
                })}
              </div>

              {/* Submit Button in Palette */}
              <div className="mt-5 border-t border-slate-100 pt-3">
                <button
                  onClick={() => setShowSubmitModal(true)}
                  className="w-full rounded-xl bg-gradient-to-r from-accent-500 to-amber-500 py-3 text-xs font-black text-slate-950 shadow-md transition hover:from-accent-400 hover:to-amber-400"
                >
                  Final Submit Test →
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Submit Confirmation Modal */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-fade-up">
              <h3 className="text-lg font-bold text-slate-900">Confirm Test Submission</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Are you sure you want to submit your mock test? After submission, answers and step-by-step explanations will be revealed.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-slate-50 p-3 text-center text-xs">
                <div>
                  <div className="text-lg font-black text-emerald-600">{Object.keys(answers).length}</div>
                  <div className="text-slate-500 font-medium">Answered</div>
                </div>
                <div>
                  <div className="text-lg font-black text-purple-600">{markedForReview.size}</div>
                  <div className="text-slate-500 font-medium">Marked</div>
                </div>
                <div>
                  <div className="text-lg font-black text-rose-500">{100 - Object.keys(answers).length}</div>
                  <div className="text-slate-500 font-medium">Unanswered</div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="flex-1 rounded-xl border border-slate-300 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Resume Test
                </button>
                <button
                  onClick={() => handleSubmitTest(false)}
                  className="flex-1 rounded-xl bg-brand-600 py-2.5 text-xs font-bold text-white shadow-md hover:bg-brand-700"
                >
                  Yes, Submit Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  /* ========================================================================== */
  /* STAGE 3: COMPLETED (SCORECARD + UNLOCKED ANSWERS & EXPLANATIONS)           */
  /* ========================================================================== */
  return (
    <div className="container-page py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-500">
        <Link href="/exams" className="hover:text-brand-600">
          Exams
        </Link>{" "}
        /{" "}
        <Link href="/exams/ssc-cgl" className="hover:text-brand-600">
          SSC CGL
        </Link>{" "}
        / <span className="text-slate-700">Mock Test 1 Results</span>
      </div>

      {/* Main Scorecard Banner */}
      <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-brand-900 to-slate-950 p-8 text-white shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-300 border border-emerald-400/30">
              ✓ Test Submitted &amp; Answers Unlocked
            </span>
            <h1 className="mt-3 text-3xl font-extrabold md:text-4xl text-white">
              SSC CGL Mock Test 1 — Performance Summary
            </h1>
            <p className="mt-1 text-sm text-slate-300">
              Marking Scheme: +2.0 for Correct • -0.5 for Wrong • Max Marks: 200
            </p>
          </div>

          {/* Score Circle Card */}
          <div className="flex items-center gap-6 rounded-2xl bg-white/10 p-6 backdrop-blur border border-white/15">
            <div className="text-center">
              <div className="text-4xl font-black text-amber-400 md:text-5xl">
                {results.totalScore.toFixed(2)}
              </div>
              <div className="text-xs font-semibold text-slate-300">out of 200.00 Marks</div>
            </div>
            <div className="border-l border-white/20 pl-6 text-center">
              <div className="text-2xl font-black text-emerald-400">{results.percentage}%</div>
              <div className="text-xs text-slate-300">Score Percentage</div>
            </div>
          </div>
        </div>

        {/* Quick KPI stats row */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
          <div className="rounded-xl bg-white/10 p-3.5 text-center backdrop-blur">
            <div className="text-xl font-black text-white">{results.correct + results.wrong}</div>
            <div className="text-xs text-slate-300">Total Attempted</div>
          </div>
          <div className="rounded-xl bg-emerald-500/20 p-3.5 text-center backdrop-blur border border-emerald-400/20">
            <div className="text-xl font-black text-emerald-400">{results.correct} Correct</div>
            <div className="text-xs text-emerald-200">+{results.positiveMarks.toFixed(1)} Marks</div>
          </div>
          <div className="rounded-xl bg-rose-500/20 p-3.5 text-center backdrop-blur border border-rose-400/20">
            <div className="text-xl font-black text-rose-400">{results.wrong} Wrong</div>
            <div className="text-xs text-rose-200">-{results.negativeMarks.toFixed(1)} Marks</div>
          </div>
          <div className="rounded-xl bg-slate-500/20 p-3.5 text-center backdrop-blur">
            <div className="text-xl font-black text-slate-300">{results.unattempted}</div>
            <div className="text-xs text-slate-400">Unattempted</div>
          </div>
          <div className="rounded-xl bg-amber-500/20 p-3.5 text-center backdrop-blur border border-amber-400/20">
            <div className="text-xl font-black text-amber-300">{results.accuracy}%</div>
            <div className="text-xs text-amber-200">Accuracy Rate</div>
          </div>
        </div>
      </div>

      {/* Section-wise breakdown cards */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <span className="h-4 w-1.5 rounded-full bg-brand-600" />
          Section-Wise Performance
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(results.sectionStats).map(([key, sec]) => {
            const secScore = sec.correct * 2 - sec.wrong * 0.5;
            const secAttempted = sec.correct + sec.wrong;
            const secAcc = secAttempted > 0 ? ((sec.correct / secAttempted) * 100).toFixed(0) : 0;
            return (
              <div key={key} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-sm">{sec.name}</h3>
                  <span className="rounded-md bg-brand-50 px-2 py-0.5 text-xs font-black text-brand-700">
                    {secScore.toFixed(1)} / 50
                  </span>
                </div>
                <div className="mt-4 space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Correct:</span>
                    <span className="font-bold text-emerald-600">{sec.correct}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wrong:</span>
                    <span className="font-bold text-rose-600">{sec.wrong}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Unattempted:</span>
                    <span className="font-bold text-slate-500">{sec.unattempted}</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-slate-100">
                    <span>Accuracy:</span>
                    <span className="font-bold text-slate-800">{secAcc}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Answer Key & Detailed English Explanations Section */}
      <section className="mt-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Complete Answer Key &amp; Step-by-Step English Explanations
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Review all 100 questions with your response, correct options, and comprehensive logic in English.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleRetakeTest}
              className="rounded-xl border border-brand-300 bg-brand-50 px-4 py-2 text-xs font-bold text-brand-700 transition hover:bg-brand-100"
            >
              🔄 Retake Test
            </button>
          </div>
        </div>

        {/* Filter Badges */}
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
          {[
            { id: "all", label: `All (${mockTest1Questions.length})` },
            { id: "correct", label: `Correct (${results.correct})`, color: "text-emerald-700" },
            { id: "wrong", label: `Wrong (${results.wrong})`, color: "text-rose-700" },
            { id: "unattempted", label: `Unattempted (${results.unattempted})` },
            { id: "reasoning", label: "Part-A: Reasoning" },
            { id: "ga", label: "Part-B: GA" },
            { id: "quant", label: "Part-C: Quant" },
            { id: "english", label: "Part-D: English" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setReviewFilter(tab.id)}
              className={
                "rounded-full px-3.5 py-1.5 transition " +
                (reviewFilter === tab.id
                  ? "bg-slate-900 text-white shadow-sm"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50")
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Questions List */}
        <div className="mt-6 space-y-6">
          {filteredReviewQuestions.map((q) => {
            const userAns = answers[q.id];
            const isCorrect = userAns !== undefined && userAns === q.answer;
            const isWrong = userAns !== undefined && userAns !== q.answer;
            const isUnattempted = userAns === undefined;

            return (
              <div
                key={q.id}
                className={
                  "rounded-2xl border bg-white p-6 shadow-sm transition " +
                  (isCorrect
                    ? "border-emerald-200"
                    : isWrong
                    ? "border-rose-200"
                    : "border-slate-200")
                }
              >
                {/* Question Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-slate-100 text-xs font-black text-slate-800">
                      {q.id}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{q.sectionName}</span>
                  </div>

                  <div>
                    {isCorrect && (
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                        ✓ Correct (+2.0)
                      </span>
                    )}
                    {isWrong && (
                      <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-800">
                        ✗ Incorrect (-0.5)
                      </span>
                    )}
                    {isUnattempted && (
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        ⚪ Unattempted (0.0)
                      </span>
                    )}
                  </div>
                </div>

                {/* Question Text */}
                <div className="mt-4 space-y-2">
                  <p className="text-base font-medium text-slate-900 whitespace-pre-line">{q.q_en}</p>
                  {q.q_hi && (
                    <p className="text-sm text-slate-600 border-l-2 border-slate-300 pl-3 py-0.5 whitespace-pre-line">
                      {q.q_hi}
                    </p>
                  )}
                </div>

                {/* Options Review Grid */}
                <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {q.options.map((opt, i) => {
                    const isRightOption = i === q.answer;
                    const isUserChoice = i === userAns;

                    let cardStyle = "border-slate-200 bg-slate-50 text-slate-700";
                    if (isRightOption) {
                      cardStyle = "border-emerald-500 bg-emerald-50/80 font-bold text-emerald-900 ring-1 ring-emerald-500";
                    } else if (isUserChoice && !isRightOption) {
                      cardStyle = "border-rose-500 bg-rose-50/80 font-bold text-rose-900 ring-1 ring-rose-500";
                    }

                    return (
                      <div
                        key={i}
                        className={`flex items-center justify-between rounded-xl border px-3.5 py-2.5 text-sm ${cardStyle}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="font-bold text-xs">
                            {String.fromCharCode(65 + i)}.
                          </span>
                          <span>{opt}</span>
                        </div>
                        <div>
                          {isRightOption && (
                            <span className="rounded bg-emerald-600 px-2 py-0.5 text-[10px] font-extrabold text-white">
                              Correct Key ✓
                            </span>
                          )}
                          {isUserChoice && !isRightOption && (
                            <span className="rounded bg-rose-600 px-2 py-0.5 text-[10px] font-extrabold text-white">
                              Your Choice ✗
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Detailed English Explanation */}
                <div className="mt-4 rounded-xl bg-brand-50/80 p-4 text-sm text-brand-950 border border-brand-200/70">
                  <div className="flex items-center gap-2 font-bold text-brand-800">
                    <span className="text-base">💡</span>
                    <span>Detailed Explanation (English):</span>
                  </div>
                  <p className="mt-1.5 leading-relaxed whitespace-pre-line text-slate-800">
                    {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
