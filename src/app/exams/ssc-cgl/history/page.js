import Link from "next/link";
import QuestionBank from "@/components/QuestionBank";
import LockGate from "@/components/LockGate";
import { historyMeta, historySections } from "@/lib/history";

export const metadata = {
  title: "SSC CGL History — 200+ Practice Questions | SarkariPath",
  description:
    "SSC CGL General Awareness — History practice questions with answer key: Ancient, Medieval, Modern India, freedom struggle aur World history. Bilingual English + Hindi.",
};

export default function HistoryPage() {
  return (
    <div className="container-page py-10">
      <div className="text-sm text-slate-500">
        <Link href="/exams" className="hover:text-brand-600">Exams</Link>{" "}
        /{" "}
        <Link href="/exams/ssc-cgl" className="hover:text-brand-600">SSC CGL</Link>{" "}
        / <span className="text-slate-700">History</span>
      </div>

      <div className="mt-6">
        <LockGate>
          <QuestionBank meta={historyMeta} sections={historySections} />
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
