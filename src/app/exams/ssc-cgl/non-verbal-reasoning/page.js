import Link from "next/link";
import NonVerbalBank from "@/components/NonVerbalBank";
import LockGate from "@/components/LockGate";
import WhatsAppJoin from "@/components/WhatsAppJoin";
import { nonVerbalMeta, nonVerbalSections } from "@/lib/reasoning-nonverbal";

export const metadata = {
  title: "SSC CGL Non-Verbal Reasoning — 80 Practice Questions | SarkariPath",
  description:
    "SSC CGL Tier 1 level Non-Verbal Reasoning ke 80 practice questions with figures & answer key — mirror image, water image, cubes-dice, embedded figures, paper folding, counting figures aur zyada.",
};

export default function NonVerbalReasoningPage() {
  return (
    <div className="container-page py-10">
      <div className="text-sm text-slate-500">
        <Link href="/exams" className="hover:text-brand-600">Exams</Link>{" "}
        /{" "}
        <Link href="/exams/ssc-cgl" className="hover:text-brand-600">SSC CGL</Link>{" "}
        / <span className="text-slate-700">Non-Verbal Reasoning</span>
      </div>

      <div className="mt-6">
        <LockGate>
          <NonVerbalBank meta={nonVerbalMeta} sections={nonVerbalSections} />
          <WhatsAppJoin />
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
