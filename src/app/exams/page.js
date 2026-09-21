import Link from "next/link";
import { exams, categories, getCategory } from "@/lib/exams";
import ExamCard from "@/components/ExamCard";

export const metadata = {
  title: "All Government Exams — SarkariPath",
  description: "SSC, Railway, Banking aur sabhi government exams ki list, syllabus aur mock tests.",
};

export default async function ExamsPage({ searchParams }) {
  const sp = await searchParams;
  const activeCategory = sp?.category || "all";
  const filtered =
    activeCategory === "all"
      ? exams
      : exams.filter((e) => e.category === activeCategory);

  const activeCat = getCategory(activeCategory);

  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-bold text-slate-900">
        {activeCat ? `${activeCat.name} Exams` : "All Government Exams"}
      </h1>
      <p className="mt-2 text-slate-500">
        Apne target exam ka syllabus, pattern aur study material dekho.
      </p>

      {/* Category filter chips */}
      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href="/exams"
          className={
            "rounded-full px-4 py-2 text-sm font-medium transition " +
            (activeCategory === "all"
              ? "bg-brand-600 text-white"
              : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50")
          }
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/exams?category=${cat.id}`}
            className={
              "rounded-full px-4 py-2 text-sm font-medium transition " +
              (activeCategory === cat.id
                ? "bg-brand-600 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50")
            }
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((exam) => (
            <ExamCard key={exam.slug} exam={exam} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl border border-dashed border-slate-300 p-12 text-center">
          <p className="text-lg font-semibold text-slate-700">Coming soon 🚧</p>
          <p className="mt-1 text-slate-500">
            Is category ke exams jaldi add kiye jayenge.
          </p>
        </div>
      )}
    </div>
  );
}
