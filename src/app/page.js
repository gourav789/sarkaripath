import Link from "next/link";
import { site } from "@/lib/site";
import { exams, categories, getExamsByCategory } from "@/lib/exams";
import ExamCard from "@/components/ExamCard";

const categoryIcons = {
  ssc: "📊",
  railway: "🚆",
  banking: "🏦",
  defence: "🛡️",
  teaching: "🎓",
  state: "🏛️",
};

export default function HomePage() {
  const popular = exams.filter((e) => e.popularity === 5).slice(0, 6);
  const trending = exams.slice(0, 8);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-slate-50">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-20 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-60" />

        <div className="container-page relative py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              SSC CGL 2026 material live hai
            </span>

            <h1 className="animate-fade-up animate-delay-1 mx-auto mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-6xl">
              Har Sarkari Exam ki
              <span className="relative mx-2 inline-block">
                <span className="relative z-10 text-brand-600">Taiyari</span>
                <span className="absolute bottom-1 left-0 z-0 h-3 w-full -rotate-1 bg-accent-500/30" />
              </span>
              Ek Jagah
            </h1>

            <p className="animate-fade-up animate-delay-2 mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              SSC, Railway, Banking aur sabhi government exams ka updated syllabus, expert
              notes aur full mock tests. Free se shuru karo, premium se topper bano.
            </p>

            <div className="animate-fade-up animate-delay-3 mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/exams"
                className="group rounded-xl bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:-translate-y-0.5 hover:bg-brand-700"
              >
                Explore All Exams
                <span className="ml-1 inline-block transition group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/premium"
                className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                View Premium Plans
              </Link>
            </div>

            {/* trust line */}
            <p className="mt-6 text-sm text-slate-400">
              Free content • Koi login zaroori nahi • Instant access
            </p>
          </div>
        </div>

        {/* trending marquee strip */}
        <div className="relative border-t border-slate-200/70 bg-white/70 py-4 backdrop-blur">
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex shrink-0 items-center gap-3 pr-3">
              {[...trending, ...trending].map((exam, i) => (
                <Link
                  key={exam.slug + i}
                  href={`/exams/${exam.slug}`}
                  className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 transition hover:border-brand-300 hover:text-brand-600"
                >
                  <span>{exam.icon}</span>
                  {exam.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAND ===== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {[
            { value: `${exams.length}+`, label: "Exams covered" },
            { value: "500+", label: "Practice questions" },
            { value: "4", label: "Subjects per exam" },
            { value: "100%", label: "Latest syllabus" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-brand-600 md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== POPULAR EXAMS ===== */}
      <section className="container-page py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              Most in demand
            </span>
            <h2 className="mt-1 text-3xl font-bold text-slate-900">Popular Exams</h2>
            <p className="mt-1 text-slate-500">
              Lakhs of aspirants inki taiyari kar rahe hain.
            </p>
          </div>
          <Link
            href="/exams"
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-brand-600 transition hover:bg-brand-50"
          >
            See all exams →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((exam) => (
            <ExamCard key={exam.slug} exam={exam} />
          ))}
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section id="categories" className="border-y border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="container-page py-16 md:py-20">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              Browse by field
            </span>
            <h2 className="mt-1 text-3xl font-bold text-slate-900">Exam Categories</h2>
            <p className="mt-1 text-slate-500">Apne interest ke hisaab se category chuno.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const count = getExamsByCategory(cat.id).length;
              const available = count > 0;
              return (
                <Link
                  key={cat.id}
                  href={`/exams?category=${cat.id}`}
                  className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-600/5"
                >
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-50 text-2xl transition group-hover:scale-110">
                    {categoryIcons[cat.id] || "📘"}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 group-hover:text-brand-600">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-slate-500">{cat.full}</p>
                  </div>
                  <span
                    className={
                      "rounded-full px-3 py-1 text-xs font-semibold " +
                      (available
                        ? "bg-green-50 text-green-600"
                        : "bg-slate-100 text-slate-400")
                    }
                  >
                    {available ? `${count} exams` : "Soon"}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="container-page py-16 md:py-20">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Why choose us
          </span>
          <h2 className="mt-1 text-3xl font-bold text-slate-900">Kyun {site.name}?</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: "📚",
              title: "Updated Syllabus",
              desc: "Har exam ka latest, detailed syllabus — exam-standard depth ke saath, official pattern par based.",
            },
            {
              icon: "🧪",
              title: "Full Mock Tests",
              desc: "Real exam pattern par based mocks with answer key. Apni tayyari ko test karo.",
            },
            {
              icon: "⚡",
              title: "Free + Premium",
              desc: "Free content se shuru karo, premium se poora syllabus aur notes unlock karo.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-600/5"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-2xl shadow-lg shadow-brand-600/20">
                {f.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="border-y border-slate-200 bg-white">
        <div className="container-page py-16 md:py-20">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              Simple steps
            </span>
            <h2 className="mt-1 text-3xl font-bold text-slate-900">Kaise shuru karein?</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { n: "1", t: "Exam chuno", d: "Apna target exam select karo aur syllabus dekho." },
              { n: "2", t: "Free se padho", d: "Free topics aur pattern bina login ke access karo." },
              { n: "3", t: "Premium unlock karo", d: "Poore notes aur mock tests ke liye premium lo." },
            ].map((step, i) => (
              <div key={step.n} className="relative text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-xl font-bold text-white shadow-lg shadow-brand-600/25">
                  {step.n}
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{step.t}</h3>
                <p className="mt-1 text-sm text-slate-600">{step.d}</p>
                {i < 2 && (
                  <div className="absolute right-0 top-7 hidden h-px w-1/2 translate-x-1/2 bg-gradient-to-r from-brand-300 to-transparent md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="container-page py-16 md:py-20">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Aspirants ki baat
          </span>
          <h2 className="mt-1 text-3xl font-bold text-slate-900">Students kya kehte hain</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Rohit K.",
              exam: "SSC CGL aspirant",
              text: "Syllabus itna clear tha ki confusion hi khatam ho gayi. Har topic ki strategy helpful hai.",
            },
            {
              name: "Priya S.",
              exam: "IBPS PO aspirant",
              text: "Ek hi jagah saare exams ka material mil jaata hai. Mock tests bilkul real pattern jaise hain.",
            },
            {
              name: "Amit R.",
              exam: "RRB NTPC aspirant",
              text: "Free content se try kiya, phir premium liya. Paisa vasool — notes ekdum crisp hain.",
            },
          ].map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-0.5 text-accent-500">★★★★★</div>
              <blockquote className="mt-3 text-sm leading-relaxed text-slate-600">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-100 font-bold text-brand-700">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.exam}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="container-page pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-14 text-center text-white shadow-xl shadow-brand-600/20">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent-500/20 blur-2xl" />
          <h2 className="relative text-3xl font-bold md:text-4xl">
            Aaj hi taiyari shuru karo
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-brand-100">
            Google se sign in karo, apni progress track karo, aur premium unlock karke poora
            study material paao.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/exams"
              className="rounded-xl bg-white px-7 py-3.5 font-semibold text-brand-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-50"
            >
              Browse Exams
            </Link>
            <Link
              href="/premium"
              className="rounded-xl border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Go Premium
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
