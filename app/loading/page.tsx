"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const analysisSteps = [
  { emoji: "🏠", label: "Reading property information" },
  { emoji: "❤️", label: "Understanding your lifestyle" },
  { emoji: "🌳", label: "Exploring the surrounding neighbourhood" },
  { emoji: "✨", label: "Matching everything together" },
];

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function LoadingPage() {
  const router = useRouter();
  const [completedCount, setCompletedCount] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const stepTimers = analysisSteps.map((_, index) => window.setTimeout(() => {
      setCompletedCount(index + 1);
      setActiveStep(Math.min(index + 1, analysisSteps.length - 1));
    }, (index + 1) * 800));

    const redirectTimer = window.setTimeout(() => {
      router.push("/places");
    }, analysisSteps.length * 800 + 800);

    return () => {
      stepTimers.forEach((timer) => window.clearTimeout(timer));
      window.clearTimeout(redirectTimer);
    };
  }, [router]);

  const visibleSteps = analysisSteps.slice(0, Math.min(activeStep + 1, analysisSteps.length));
  const progress = (completedCount / analysisSteps.length) * 100;

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#fbf7f0] px-6 text-[#354536] selection:bg-[#dce8d6] selection:text-[#354536] sm:px-8">
      <style>{`\n        @keyframes analysis-glow {\n          0%, 100% { opacity: .55; transform: scale(.92); }\n          50% { opacity: .9; transform: scale(1.08); }\n        }\n        @keyframes analysis-home {\n          0%, 100% { transform: translateY(0); }\n          50% { transform: translateY(-3px); }\n        }\n        @keyframes analysis-step-in {\n          from { opacity: 0; transform: translateY(7px); }\n          to { opacity: 1; transform: translateY(0); }\n        }\n        .analysis-glow { animation: analysis-glow 3.2s ease-in-out infinite; }\n        .analysis-home { animation: analysis-home 3.2s ease-in-out infinite; }\n        .analysis-step-in { animation: analysis-step-in 300ms ease-out both; }\n        @media (prefers-reduced-motion: reduce) {\n          .analysis-glow, .analysis-home, .analysis-step-in { animation: none; }\n        }\n      `}</style>

      <div className="pointer-events-none absolute -left-48 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#f1ddc7]/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-52 -right-40 h-[34rem] w-[34rem] rounded-full bg-[#dce8d4]/70 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center py-16 text-center">
        <div className="mb-14 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-[1.1rem] bg-[#354536] text-xl text-white shadow-[0_12px_28px_-14px_rgba(53,69,54,0.8)]">⌂</span>
          <span className="text-lg font-semibold tracking-[-0.035em]">SweetHome</span>
        </div>

        <div className="relative flex h-32 w-32 items-center justify-center">
          <span className="analysis-glow absolute inset-0 rounded-full bg-[#c7ddc1]/60 blur-2xl" />
          <span className="absolute inset-4 rounded-full border border-[#dce8d6] bg-[#edf4e9]/80 shadow-[0_20px_40px_-24px_rgba(53,69,54,0.45)]" />
          <span className="analysis-home relative flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-[#354536] text-4xl text-white shadow-[0_18px_30px_-15px_rgba(53,69,54,0.7)]">⌂</span>
        </div>

        <p className="mt-12 text-sm font-medium tracking-[0.16em] text-[#a26d45]">Find where life feels right.</p>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-[#354536] sm:text-6xl">Finding homes that fit your life...</h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-7 text-[#82786c] sm:text-lg sm:leading-8">We&apos;re analysing the property together with your lifestyle preferences.<br className="hidden sm:block" /> This only takes a few seconds.</p>

        <ol className="mt-12 w-full max-w-sm space-y-3 text-left" aria-label="SweetHome analysis progress" aria-live="polite">
          {visibleSteps.map((step, index) => {
            const isComplete = index < completedCount;
            const isActive = index === activeStep && !isComplete;

            return (
              <li key={step.label} className="analysis-step-in flex items-center gap-4 rounded-2xl px-4 py-3" style={{ animationDelay: `${index * 35}ms` }}>
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg transition-all duration-300 ${isComplete ? "border border-[#91a98d] bg-[#e6eee3] text-[#5e805d]" : "border border-[#eadfd2] bg-white/70"}`}>
                  {isComplete ? <CheckIcon /> : step.emoji}
                </span>
                <span className={`text-sm font-medium tracking-[-0.01em] transition-colors duration-300 ${isComplete ? "text-[#4c634e]" : isActive ? "text-[#596157]" : "text-[#a29a90]"}`}>{step.label}</span>
              </li>
            );
          })}
        </ol>

        <div className="mt-auto w-full max-w-sm pt-16" aria-label={`${Math.round(progress)} percent complete`}>
          <div className="h-1.5 overflow-hidden rounded-full bg-[#e7e0d5]">
            <div className="h-full rounded-full bg-[#6c876b] transition-[width] duration-300 ease-out" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </main>
  );
}
