import Link from "next/link";

export default function ExamCard({ exam }) {
  const isAvailable = exam.slug === "ssc-cgl";

  if (isAvailable) {
    return (
      <Link
        href={`/exams/${exam.slug}`}
        className="group flex flex-col rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-md"
      >
        <div className="flex items-start justify-between">
          <span className="text-3xl">{exam.icon}</span>
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">
            Available
          </span>
        </div>
        <h3 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-emerald-700">
          {exam.name}
        </h3>
        <p className="text-sm text-slate-500">{exam.fullName}</p>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600">{exam.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">
            {exam.level}
          </span>
          <span className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">
            {exam.applicants}
          </span>
        </div>
        <span className="mt-4 text-sm font-semibold text-emerald-700">
          Practice questions &amp; syllabus →
        </span>
      </Link>
    );
  }

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm opacity-80 cursor-default">
      <div className="flex items-start justify-between">
        <span className="text-3xl grayscale">{exam.icon}</span>
        <span className="rounded-full bg-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600">
          Coming Soon
        </span>
      </div>
      <h3 className="mt-3 text-lg font-bold text-slate-700">
        {exam.name}
      </h3>
      <p className="text-sm text-slate-400">{exam.fullName}</p>
      <p className="mt-2 line-clamp-2 text-sm text-slate-500">{exam.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-md bg-slate-200/60 px-2 py-1 text-xs text-slate-500">
          {exam.level}
        </span>
        <span className="rounded-md bg-slate-200/60 px-2 py-1 text-xs text-slate-500">
          {exam.applicants}
        </span>
      </div>
      <span className="mt-4 text-xs font-semibold text-slate-400">
        Questions launching soon 🚧
      </span>
    </div>
  );
}
