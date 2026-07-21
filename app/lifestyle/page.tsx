"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type LifestyleOption = {
  emoji: string;
  label: string;
};

type LifestyleQuestion = {
  category: string;
  id: string;
  title: string;
  options: LifestyleOption[];
};

const questions: LifestyleQuestion[] = [
  {
    category: "Travel",
    id: "travel",
    title: "How do you usually travel?",
    options: [
      { emoji: "🚗", label: "Drive" },
      { emoji: "🚆", label: "Public Transport" },
      { emoji: "🚶", label: "Walk" },
      { emoji: "🚲", label: "Bike" },
    ],
  },
  {
    category: "Work",
    id: "work",
    title: "Where do you usually work?",
    options: [
      { emoji: "🏠", label: "Work from home" },
      { emoji: "🏢", label: "CBD" },
      { emoji: "📍", label: "Hybrid" },
    ],
  },
  {
    category: "Morning",
    id: "morning",
    title: "How do you like to start your day?",
    options: [
      { emoji: "☕", label: "Coffee" },
      { emoji: "🏃", label: "Exercise" },
      { emoji: "😴", label: "Quiet morning" },
    ],
  },
  {
    category: "Priorities",
    id: "priorities",
    title: "What matters most?",
    options: [
      { emoji: "🌳", label: "Peaceful" },
      { emoji: "🚉", label: "Convenience" },
      { emoji: "☀️", label: "Natural light" },
      { emoji: "🐶", label: "Pet friendly" },
    ],
  },
  {
    category: "Shopping",
    id: "shopping",
    title: "Daily shopping",
    options: [
      { emoji: "🛒", label: "Walkable" },
      { emoji: "🚗", label: "Don't mind driving" },
    ],
  },
  {
    category: "Evening",
    id: "evening",
    title: "Evening",
    options: [
      { emoji: "🌅", label: "Relax at home" },
      { emoji: "🍜", label: "Eat outside" },
      { emoji: "🚶", label: "Evening walk" },
    ],
  },
];

export default function LifestylePage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isComplete) return;

    const completionTimer = window.setTimeout(() => {
      router.push("/loading");
    }, 1500);

    return () => window.clearTimeout(completionTimer);
  }, [isComplete, router]);

  const question = questions[currentQuestion];
  const selectedAnswer = answers[question.id];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  function selectAnswer(label: string) {
    setAnswers((current) => ({ ...current, [question.id]: label }));
  }

  function goBack() {
    setCurrentQuestion((current) => Math.max(0, current - 1));
  }

  function goForward() {
    if (!selectedAnswer) return;

    if (isLastQuestion) {
      setIsComplete(true);
      return;
    }

    setCurrentQuestion((current) => current + 1);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fbf7f0] px-6 text-[#354536] selection:bg-[#dce8d6] selection:text-[#354536] sm:px-8">
      <style>{`\n        @keyframes lifestyle-question-in {\n          from { opacity: 0; transform: translateY(8px); }\n          to { opacity: 1; transform: translateY(0); }\n        }\n        .lifestyle-question-in {\n          animation: lifestyle-question-in 300ms ease-out both;\n        }\n        @media (prefers-reduced-motion: reduce) {\n          .lifestyle-question-in { animation: none; }\n        }\n      `}</style>
      <div className="pointer-events-none absolute -left-44 -top-40 h-[30rem] w-[30rem] rounded-full bg-[#f1ddc7]/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 h-[32rem] w-[32rem] rounded-full bg-[#dce8d4]/75 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col pb-8 pt-8 sm:pt-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-[0.9rem] bg-[#354536] text-xl text-white shadow-[0_10px_25px_-14px_rgba(53,69,54,0.8)]">⌂</span>
            <span className="text-base font-semibold tracking-[-0.035em]">SweetHome</span>
          </div>
          <p className="text-xs font-medium tracking-[0.12em] text-[#a26d45] sm:text-sm">Your everyday, your way</p>
        </header>

        <section className="mx-auto w-full max-w-3xl pb-10 pt-20 text-center sm:pt-24 lg:pb-12 lg:pt-28">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#a26d45]">A little about your everyday</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-[#354536] sm:text-6xl">What matters most in your everyday life?</h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#82786c] sm:text-lg sm:leading-8">Help SweetHome understand what you&apos;re looking for before analysing this home.</p>
        </section>

        <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col" aria-label="Lifestyle profile questions">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#e7e0d5]" aria-hidden="true">
              <div className="h-full rounded-full bg-[#6c876b] transition-[width] duration-300 ease-out" style={{ width: `${progress}%` }} />
            </div>
            <p className="shrink-0 text-sm font-semibold text-[#6e7469]">Question {currentQuestion + 1} of {questions.length}</p>
          </div>

          <div className="min-h-[25rem] rounded-[2rem] border border-[#eadfd2] bg-white/55 p-5 shadow-[0_24px_60px_-42px_rgba(92,65,42,0.5)] backdrop-blur-sm sm:p-8">
            {isComplete ? (
              <div className="flex min-h-[23rem] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e4eee0] text-3xl">🌿</span>
                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-[#354536]">That&apos;s a great start.</h2>
                <p className="mt-3 max-w-sm text-base leading-7 text-[#82786c]">Your everyday preferences are ready to help shape your SweetHome analysis.</p>
              </div>
            ) : (
              <div key={question.id} className="lifestyle-question-in">
                <div className="mb-7 flex items-end justify-between gap-4">
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#a26d45]">{question.category}</p>
                    <h2 className="text-2xl font-semibold tracking-[-0.045em] text-[#354536] sm:text-3xl">{question.title}</h2>
                  </div>
                  <span className="hidden rounded-full bg-[#f5eadf] px-3 py-1.5 text-xs font-semibold text-[#a26d45] sm:inline">Choose one</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {question.options.map((option) => {
                    const isSelected = selectedAnswer === option.label;

                    return (
                      <button
                        key={option.label}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => selectAnswer(option.label)}
                        className={`group flex min-h-36 items-center gap-5 rounded-2xl border px-5 py-7 text-left transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-[#dce8d6] sm:min-h-40 sm:px-7 ${isSelected ? "-translate-y-1 border-[#6c876b] bg-[#edf4e9] shadow-[0_18px_30px_-20px_rgba(53,69,54,0.6)]" : "border-[#e7e3dc] bg-white hover:-translate-y-1 hover:border-[#d7c7b7] hover:shadow-[0_18px_30px_-22px_rgba(92,65,42,0.45)]"}`}
                      >
                        <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-4xl transition-transform duration-300 ${isSelected ? "bg-white shadow-sm group-hover:scale-105" : "bg-[#f7f0e7] group-hover:rotate-[-4deg] group-hover:scale-105"}`}>
                          {option.emoji}
                        </span>
                        <span className="flex-1 text-lg font-semibold text-[#4f5d50] sm:text-xl">{option.label}</span>
                        <span className={`flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-300 ${isSelected ? "border-[#6c876b] bg-[#6c876b] text-white" : "border-[#d7d5cd] text-transparent"}`}>
                          <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6" /></svg>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {!isComplete && (
            <nav className="flex items-center justify-between gap-4 pt-8" aria-label="Question navigation">
              <button
                type="button"
                onClick={goBack}
                disabled={currentQuestion === 0}
                className="inline-flex h-14 items-center rounded-2xl px-5 text-sm font-semibold text-[#82786c] transition duration-300 hover:bg-white/60 hover:text-[#354536] focus:outline-none focus:ring-4 focus:ring-[#dce8d6] disabled:cursor-not-allowed disabled:opacity-35"
              >
                <span className="mr-2 text-lg">←</span> Previous
              </button>
              <button
                type="button"
                onClick={goForward}
                disabled={!selectedAnswer}
                className="inline-flex h-14 min-w-36 items-center justify-center rounded-2xl bg-[#354536] px-7 text-sm font-semibold text-white shadow-[0_16px_30px_-16px_rgba(53,69,54,0.8)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#4b624b] focus:outline-none focus:ring-4 focus:ring-[#dce8d6] disabled:cursor-not-allowed disabled:bg-[#d7d9d0] disabled:text-[#9a9d94] disabled:shadow-none"
              >
                {isLastQuestion ? "Finish" : "Next"}<span className="ml-3 text-lg">→</span>
              </button>
            </nav>
          )}
        </section>
      </div>
    </main>
  );
}
