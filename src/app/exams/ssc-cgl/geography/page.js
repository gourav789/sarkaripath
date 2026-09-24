import Link from "next/link";
import QuestionBank from "@/components/QuestionBank";
import LockGate from "@/components/LockGate";
import WhatsAppJoin from "@/components/WhatsAppJoin";
import { geographyMeta, geographySections } from "@/lib/geography";

export const metadata = {
  title: "SSC CGL Geography — 100 Practice Questions | SarkariPath",
  description: "SSC CGL General Awareness — Geography practice questions (Physical, Indian, World) with answer key. Bilingual.",
};

export default function GeographyPage() {
  return (
    <div className="container-page py-10">
      <div className="text-sm text-slate-500">
        <Link href="/exams" className="hover:text-brand-600">Exams</Link> /{" "}
        <Link href="/exams/ssc-cgl" className="hover:text-brand-600">SSC CGL</Link> /{" "}
        <span className="text-slate-700">Geography</span>
      </div>
      <div className="mt-6">
        <LockGate>
          <QuestionBank meta={geographyMeta} sections={geographySections} />
          <WhatsAppJoin />
        </LockGate>
      </div>
      <div className="mt-10 text-center">
        <Link href="/exams/ssc-cgl" className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">← Back to SSC CGL</Link>
      </div>
    </div>
  );
}
