import Link from "next/link";
import QuestionBank from "@/components/QuestionBank";
import LockGate from "@/components/LockGate";
import {
  verbalReasoningMeta,
  verbalReasoningSections,
} from "@/lib/reasoning-verbal";

export const metadata = {
  title: "SSC CGL Verbal Reasoning — 200 Practice Questions | SarkariPath",
  description:
    "SSC CGL Tier 1 level Verbal Reasoning ke 200 practice questions with answer key — analogy, classification, series, coding-decoding, syllogism, blood relations aur zyada.",
};

export default function VerbalReasoningPage() {
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
        / <span className="text-slate-700">Verbal Reasoning</span>
      </div>

      <div className="mt-6">
        <LockGate>
          <QuestionBank
            meta={verbalReasoningMeta}
            sections={verbalReasoningSections}
          />
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
