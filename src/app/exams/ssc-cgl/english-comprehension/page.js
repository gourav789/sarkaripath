import Link from "next/link";
import QuestionBank from "@/components/QuestionBank";
import LockGate from "@/components/LockGate";
import { englishMeta, englishSections } from "@/lib/english";

export const metadata = {
  title: "SSC CGL English Comprehension — 200 Practice Questions | SarkariPath",
  description:
    "SSC CGL Tier 1 level English Comprehension ke 200 practice questions with answer key — spot the error, sentence improvement, synonyms, antonyms, idioms, one-word substitution, cloze test, para-jumbles, reading comprehension aur zyada.",
};

export default function EnglishComprehensionPage() {
  return (
    <div className="container-page py-10">
      <div className="text-sm text-slate-500">
        <Link href="/exams" className="hover:text-brand-600">Exams</Link>{" "}
        /{" "}
        <Link href="/exams/ssc-cgl" className="hover:text-brand-600">SSC CGL</Link>{" "}
        / <span className="text-slate-700">English Comprehension</span>
      </div>

      <div className="mt-6">
        <LockGate>
          <QuestionBank meta={englishMeta} sections={englishSections} />
        </LockGate>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/exams/ssc-cgl"
          className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          ← Back to SSC CGL
        </Link>
      </div>
    </div>
  );
}
