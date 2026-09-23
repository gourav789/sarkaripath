import Link from "next/link";
import { notFound } from "next/navigation";
import { exams, getExam, getCategory } from "@/lib/exams";
import { getSyllabus } from "@/lib/syllabus";

// Static params for all exams (fast, SEO-friendly)
export function generateStaticParams() {
  return exams.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const exam = getExam(slug);
  if (!exam) return { title: "Exam not found" };
  return {
    title: `${exam.name} Syllabus & Pattern — SarkariPath`,
    description: exam.summary,
  };
}

export default async function ExamDetailPage({ params }) {
  const { slug } = await params;
  const exam = getExam(slug);
  if (!exam) notFound();

  const category = getCategory(exam.category);
  const syllabus = getSyllabus(exam.slug);

  return (
    <div className="container-page py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-500">
        <Link href="/exams" className="hover:text-brand-600">
          Exams
        </Link>{" "}
        / <span className="text-slate-700">{exam.name}</span>
      </div>

      {/* Header */}
      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{exam.icon}</span>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{exam.name}</h1>
              <p className="text-slate-500">{exam.fullName}</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-md bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
              {category?.name}
            </span>
            <span className="rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-600">
              {exam.level}
            </span>
            <span className="rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-600">
              {exam.applicants} applicants
            </span>
          </div>
        </div>
        <Link
          href="/pricing"
          className="rounded-lg bg-accent-500 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-accent-600"
        >
          View Plans &amp; Pricing →
        </Link>
      </div>

      <p className="mt-6 max-w-3xl text-slate-600">{exam.summary}</p>

      {/* Highlights */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {exam.highlights.map((h) => (
          <div key={h} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
            {h}
          </div>
        ))}
      </div>

      {/* Pattern table */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">Exam Pattern</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-5 py-3 font-semibold">Section</th>
                <th className="px-5 py-3 font-semibold">Questions</th>
                <th className="px-5 py-3 font-semibold">Marks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {exam.pattern.map((row) => (
                <tr key={row.section} className="bg-white">
                  <td className="px-5 py-3 text-slate-800">{row.section}</td>
                  <td className="px-5 py-3 text-slate-600">{row.q}</td>
                  <td className="px-5 py-3 text-slate-600">{row.marks}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-slate-50 font-semibold text-slate-800">
              <tr>
                <td className="px-5 py-3">Total</td>
                <td className="px-5 py-3">
                  {exam.pattern.reduce((s, r) => s + r.q, 0)}
                </td>
                <td className="px-5 py-3">
                  {exam.pattern.reduce((s, r) => s + r.marks, 0)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Practice section (abhi sirf SSC CGL ke liye available) */}
      {exam.slug === "ssc-cgl" && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">Practice Questions</h2>
          <p className="mt-1 text-slate-500">
            Exam-level practice sets. Free me try karo, apni tayyari parkho.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/exams/ssc-cgl/verbal-reasoning"
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-600/5"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-2xl">
                  🧠
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-brand-600">
                    Verbal Reasoning
                  </h3>
                  <p className="text-sm text-slate-500">200 questions + answer key</p>
                </div>
              </div>
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                Free
              </span>
            </Link>

            <Link
              href="/exams/ssc-cgl/non-verbal-reasoning"
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-600/5"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-2xl">
                  🧩
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-brand-600">
                    Non-Verbal Reasoning
                  </h3>
                  <p className="text-sm text-slate-500">80 questions + figures + answer key</p>
                </div>
              </div>
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                Free
              </span>
            </Link>

            <Link
              href="/exams/ssc-cgl/quantitative-aptitude"
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-600/5"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-2xl">
                  🔢
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-brand-600">
                    Quantitative Aptitude
                  </h3>
                  <p className="text-sm text-slate-500">200 questions + answer key</p>
                </div>
              </div>
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                Free
              </span>
            </Link>

            <Link
              href="/exams/ssc-cgl/english-comprehension"
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-600/5"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-2xl">
                  📖
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-brand-600">
                    English Comprehension
                  </h3>
                  <p className="text-sm text-slate-500">200 questions + answer key</p>
                </div>
              </div>
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                Free
              </span>
            </Link>

            <Link
              href="/exams/ssc-cgl/history"
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-600/5"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-2xl">
                  🏛️
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-brand-600">
                    History (GK)
                  </h3>
                  <p className="text-sm text-slate-500">350 questions + answer key</p>
                </div>
              </div>
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                Free
              </span>
            </Link>

            {[
              { href: "/exams/ssc-cgl/polity", icon: "⚖️", title: "Polity (GK)", count: "100 questions + answer key" },
              { href: "/exams/ssc-cgl/geography", icon: "🌍", title: "Geography (GK)", count: "100 questions + answer key" },
              { href: "/exams/ssc-cgl/general-science", icon: "🔬", title: "General Science (GK)", count: "100 questions + answer key" },
              { href: "/exams/ssc-cgl/economics", icon: "📈", title: "Economics (GK)", count: "100 questions + answer key" },
              { href: "/exams/ssc-cgl/art-culture", icon: "🎭", title: "Art & Culture (GK)", count: "100 questions + answer key" },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-600/5"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-2xl">
                    {c.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-brand-600">{c.title}</h3>
                    <p className="text-sm text-slate-500">{c.count}</p>
                  </div>
                </div>
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                  Free
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Detailed syllabus (free + premium) */}
      {syllabus ? (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">Detailed Syllabus</h2>
          <p className="mt-1 text-slate-500">
            Poora topic-wise syllabus — sabhi topics free me available.
          </p>

          <div className="mt-6 space-y-6">
            {Object.entries(syllabus).map(([key, subject]) => (
              <div key={key} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-slate-900">{subject.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{subject.note}</p>

                {/* Free topics */}
                <div className="mt-4 space-y-3">
                  {subject.freeTopics.map((t) => (
                    <div key={t.name} className="rounded-xl bg-slate-50 p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-800">{t.name}</span>
                        <span className="rounded-md bg-brand-50 px-2 py-1 text-xs font-medium text-brand-700">
                          {t.weight}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-slate-600">{t.detail}</p>
                    </div>
                  ))}
                </div>

                {/* More topics (unlocked) */}
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📚</span>
                    <span className="font-semibold text-slate-800">
                      More topics ({subject.premiumTopics.length})
                    </span>
                  </div>
                  <ul className="mt-2 grid gap-1 text-sm text-slate-600 sm:grid-cols-2">
                    {subject.premiumTopics.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="text-brand-500">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="mt-12 rounded-2xl border border-dashed border-slate-300 p-8 text-center">
          <p className="font-semibold text-slate-700">
            Detailed syllabus is exam ke liye jaldi aa raha hai 🚧
          </p>
          <p className="mt-1 text-slate-500">
            Filhaal upar pattern dekho. Premium members ko sabse pehle milega.
          </p>
        </section>
      )}
    </div>
  );
}
