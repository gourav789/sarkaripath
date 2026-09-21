import Link from "next/link";
import QuestionBank from "@/components/QuestionBank";
import { artCultureMeta, artCultureSections } from "@/lib/artculture";

export const metadata = {
  title: "SSC CGL Art & Culture — 100 Practice Questions | SarkariPath",
  description: "SSC CGL General Awareness — Art & Culture practice questions (dances, festivals, music, temples, painting) with answer key. Bilingual.",
};

export default function ArtCulturePage() {
  return (
    <div className="container-page py-10">
      <div className="text-sm text-slate-500">
        <Link href="/exams" className="hover:text-brand-600">Exams</Link> /{" "}
        <Link href="/exams/ssc-cgl" className="hover:text-brand-600">SSC CGL</Link> /{" "}
        <span className="text-slate-700">Art &amp; Culture</span>
      </div>
      <div className="mt-6">
        <QuestionBank meta={artCultureMeta} sections={artCultureSections} />
      </div>
      <div className="mt-10 text-center">
        <Link href="/exams/ssc-cgl" className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">← Back to SSC CGL</Link>
      </div>
    </div>
  );
}
