import Link from "next/link";
import QuestionBank from "@/components/QuestionBank";
import LockGate from "@/components/LockGate";
import { quantMeta, quantSections } from "@/lib/quant";

export const metadata = {
  title: "SSC CGL Quantitative Aptitude — 200 Practice Questions | SarkariPath",
  description:
    "SSC CGL Tier 1 level Quantitative Aptitude ke 200 practice questions with answer key — percentage, ratio, profit-loss, SI-CI, time-work, speed, geometry, mensuration, trigonometry, DI aur zyada.",
};

export default function QuantitativeAptitudePage() {
  return (
    <div className="container-page py-10">
      <div className="text-sm text-slate-500">
        <Link href="/exams" className="hover:text-brand-600">Exams</Link>{" "}
        /{" "}
        <Link href="/exams/ssc-cgl" className="hover:text-brand-600">SSC CGL</Link>{" "}
        / <span className="text-slate-700">Quantitative Aptitude</span>
      </div>

      <div className="mt-6">
        <LockGate>
          <QuestionBank meta={quantMeta} sections={quantSections} />
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
