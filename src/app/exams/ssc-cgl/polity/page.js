import Link from "next/link";
import QuestionBank from "@/components/QuestionBank";
import LockGate from "@/components/LockGate";
import { polityMeta, politySections } from "@/lib/polity";

export const metadata = {
  title: "SSC CGL Indian Polity — 100 Practice Questions | SarkariPath",
  description: "SSC CGL General Awareness — Polity practice questions (Constitution, Fundamental Rights, Parliament, Judiciary) with answer key. Bilingual.",
};

export default function PolityPage() {
  return (
    <div className="container-page py-10">
      <div className="text-sm text-slate-500">
        <Link href="/exams" className="hover:text-brand-600">Exams</Link> /{" "}
        <Link href="/exams/ssc-cgl" className="hover:text-brand-600">SSC CGL</Link> /{" "}
        <span className="text-slate-700">Polity</span>
      </div>
      <div className="mt-6">
        <LockGate>
          <QuestionBank meta={polityMeta} sections={politySections} />
        </LockGate>
      </div>
      <div className="mt-10 text-center">
        <Link href="/exams/ssc-cgl" className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">← Back to SSC CGL</Link>
      </div>
    </div>
  );
}
