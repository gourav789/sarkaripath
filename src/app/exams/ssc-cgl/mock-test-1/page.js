import CglMockTest from "@/components/CglMockTest";
import LockGate from "@/components/LockGate";

export const metadata = {
  title: "SSC CGL Mock Test 1 — Full 100 Questions Practice Set | SarkariPath",
  description:
    "Take the full-length SSC CGL Mock Test 1 with 100 questions in Hindi and English. Features a 2-hour timeout countdown, official Tier 1 marking scheme (+2, -0.5), auto-locking, and complete step-by-step English explanations.",
};

export default function MockTest1Page() {
  return (
    <div className="container-page py-10">
      <LockGate>
        <CglMockTest />
      </LockGate>
    </div>
  );
}
