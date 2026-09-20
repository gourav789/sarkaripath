import Link from "next/link";
import { site } from "@/lib/site";
import { exams, categories, getExamsByCategory } from "@/lib/exams";
import ExamCard from "@/components/ExamCard";

export default function HomePage() {
  const popular = exams.filter((e) => e.popularity === 5).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-slate-50">
        <div className="container-page py-20 text-center">
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700">
            SSC • Railway • Banking • Defence & more
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
            Har Sarkari Exam ki Taiyari, <span className="text-brand-600">Ek Jagah</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Latest syllabus, expert notes, aur full mock tests — SSC CGL se lekar Railways aur
            Banking tak. Free se shuru karo, premium se aage badho.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/exams"
              className="rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700"
            >
              Explore All Exams
            </Link>
            <Link
              href="/premium"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              View Premium
            </Link>
          </div>
        </div>
      </section>

      {/* Popular exams */}
      <section className="container-page py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Popular Exams</h2>
            <p className="mt-1 text-slate-500">Sabse zyada demand wale exams.</p>
          </div>
          <Link href="/exams" className="text-sm font-semibold text-brand-600 hover:underline">
            See all →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((exam) => (
            <ExamCard key={exam.slug} exam={exam} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="border-y border-slate-200 bg-white">
        <div className="container-page py-16">
          <h2 className="text-2xl font-bold text-slate-900">Exam Categories</h2>
          <p className="mt-1 text-slate-500">Apne interest ke hisaab se category chuno.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const count = getExamsByCategory(cat.id).length;
              return (
                <Link
                  key={cat.id}
                  href={`/exams?category=${cat.id}`}
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-5 transition hover:border-brand-300 hover:bg-brand-50"
                >
                  <div>
                    <h3 className="font-semibold text-slate-900">{cat.name}</h3>
                    <p className="text-sm text-slate-500">{cat.full}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                    {count > 0 ? `${count} exams` : "Coming soon"}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container-page py-16">
        <h2 className="text-center text-2xl font-bold text-slate-900">
          Kyun {site.name}?
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: "📚",
              title: "Updated Syllabus",
              desc: "Har exam ka latest, detailed syllabus — exam-standard depth ke saath.",
            },
            {
              icon: "🧪",
              title: "Full Mock Tests",
              desc: "Real exam pattern par based mocks with answer key aur analysis.",
            },
            {
              icon: "⚡",
              title: "Free + Premium",
              desc: "Free content se shuru karo, premium se poori taiyari unlock karo.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-3 font-bold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <div className="rounded-3xl bg-brand-600 px-8 py-12 text-center text-white">
          <h2 className="text-2xl font-bold md:text-3xl">Aaj hi taiyari shuru karo</h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-100">
            Google se sign in karo aur apni progress track karo. Premium unlock karke poora
            material paao.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/exams"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              Browse Exams
            </Link>
            <Link
              href="/premium"
              className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Go Premium
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
