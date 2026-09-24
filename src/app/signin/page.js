import { Suspense } from "react";
import SignInCard from "./SignInCard";

export const metadata = {
  title: "Sign In — SarkariPath",
  description: "Google se sign in karke apni taiyari track karo.",
};

export default function SignInPage() {
  return (
    <div className="container-page flex min-h-[70vh] items-center justify-center py-12">
      <Suspense
        fallback={
          <div className="flex h-32 items-center justify-center text-sm text-slate-400">
            Loading sign in...
          </div>
        }
      >
        <SignInCard />
      </Suspense>
    </div>
  );
}
