import Link from "next/link";
import QuestionBank from "@/components/QuestionBank";
import { scienceMeta, scienceSections } from "@/lib/science";

export const metadata = {
  title: "SSC CGL General Science — 100 Practice Questions | SarkariPath",
  description: "SSC CGL General Awareness — General Science practice questions (Physics, Chemistry, Biology) with answer key. Bilingual.",
};

export default function GeneralSciencePage() {
  return (
    <div className="container-page py-10">
      <div className="text-sm text-slate-500">
        <Link href="/exams" className="hover:text-brand-600">Exams</Link> /{" "}
        <Link href="/exams/ssc-cgl" className="hover:text-brand-600">SSC CGL</Link> /{" "}
        <span className="text-slate-700">General Science</span>
      </div>
      <div className="mt-6">
        <QuestionBank meta={scienceMeta} sections={scienceSections} />
      </div>
      <div className="mt-10 text-center">
        <Link href="/exams/ssc-cgl" className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">← Back to SSC CGL</Link>
      </div>
    </div>
  );
}
