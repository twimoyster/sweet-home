"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const propertyLocations: Record<string, string> = {
  "modern-apartment": "Chatswood",
  "family-townhouse": "Rhodes",
  "sunny-unit": "Burwood",
};

type JourneyMoment = {
  time: string;
  title: string;
  icon: "coffee" | "tree" | "bag" | "bowl" | "book" | "sun" | "walk";
  color: string;
  description: string;
};

const moments: JourneyMoment[] = [
  { time: "8:00 AM", title: "Coffee before the streets get busy.", icon: "coffee", color: "bg-[#f3e4d0] text-[#a86f43]", description: "Start slowly, with your favourite order and a little room to breathe." },
  { time: "9:30 AM", title: "Walk through a nearby park.", icon: "tree", color: "bg-[#e1eddf] text-[#63835e]", description: "Take the long way home beneath the trees, while the morning is still cool." },
  { time: "11:00 AM", title: "Pick up fresh groceries.", icon: "bag", color: "bg-[#e8eee0] text-[#6e8961]", description: "Everything you need for the weekend is close enough to carry home." },
  { time: "1:00 PM", title: "Lunch with friends.", icon: "bowl", color: "bg-[#f4e0d6] text-[#b56e58]", description: "Meet in the middle for a table, a long lunch, and nowhere else to be." },
  { time: "3:00 PM", title: "Browse a local bookstore.", icon: "book", color: "bg-[#e5e4ee] text-[#716d91]", description: "Lose an hour among shelves that make an ordinary afternoon feel special." },
  { time: "6:30 PM", title: "Walk home as the sun sets.", icon: "sun", color: "bg-[#f1dfc9] text-[#ad7043]", description: "The day winds down around you, and home is a pleasant walk away." },
];

function JourneyIcon({ name }: { name: JourneyMoment["icon"] }) {
  return (
    <svg aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 24 24">
      {name === "coffee" && <><path d="M5 8h11v5.5A4.5 4.5 0 0 1 11.5 18h-2A4.5 4.5 0 0 1 5 13.5V8Z" /><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16M4 21h14" /></>}
      {name === "tree" && <><path d="M12 21V10" /><path d="m12 3-4 5h2l-3 4h3l-4 5h12l-4-5h3l-3-4h2l-4-5Z" /></>}
      {name === "bag" && <><path d="M5 8h14l-1 12H6L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>}
      {name === "bowl" && <><path d="M4 11h16a8 8 0 0 1-16 0Z" /><path d="M6 18h12M8 7c0-1 1-1 1-2M12 7c0-1 1-1 1-2M16 7c0-1 1-1 1-2" /></>}
      {name === "book" && <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" /><path d="M4 5.5v16M8 7h8M8 11h7" /></>}
      {name === "sun" && <><circle cx="12" cy="12" r="3.5" /><path d="M12 2.5v2M12 19.5v2M4.58 4.58l1.42 1.42M18 18l1.42 1.42M2.5 12h2M19.5 12h2M4.58 19.42 6 18M18 6l1.42-1.42" /></>}
      {name === "walk" && <><circle cx="13" cy="4.5" r="1.5" /><path d="m11.5 8 2 3 3.5 1M11.5 8 9 13l-1 4M13.5 11l-1 4 3 3M9 13l-3 3M8 21l2-4M15.5 18 18 21" /></>}
    </svg>
  );
}

function JourneyMoment({ moment }: { moment: JourneyMoment }) {
  return (
    <li className="relative flex gap-5 pb-9 last:pb-0 sm:gap-7">
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_8px_20px_-12px_rgba(74,64,51,0.5)] sm:h-14 sm:w-14">
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl sm:h-11 sm:w-11 ${moment.color}`}>
          <JourneyIcon name={moment.icon} />
        </span>
      </div>
      <div className="pt-1">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a26d45]">{moment.time}</p>
        <h2 className="mt-2 text-lg font-semibold leading-7 tracking-[-0.025em] text-[#354536] sm:text-xl">{moment.title}</h2>
        <p className="mt-2 max-w-lg text-sm leading-6 text-[#82786c]">{moment.description}</p>
      </div>
    </li>
  );
}

export default function JourneyPage() {
  const [selectedPropertyId, setSelectedPropertyId] = useState("modern-apartment");

  useEffect(() => {
    const propertyId = new URLSearchParams(window.location.search).get("property");

    if (propertyId) {
      const selectionTimer = window.setTimeout(() => setSelectedPropertyId(propertyId), 0);

      return () => window.clearTimeout(selectionTimer);
    }
  }, []);

  const selectedLocation = propertyLocations[selectedPropertyId] ?? propertyLocations["modern-apartment"];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fbf7f0] px-6 text-[#354536] selection:bg-[#dce8d6] selection:text-[#354536] sm:px-8">
      <div className="pointer-events-none absolute -left-48 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#f1ddc7]/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-40 h-[34rem] w-[34rem] rounded-full bg-[#dce8d4]/70 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl pb-16 pt-8 sm:pt-10 lg:pb-24 lg:pt-12">
        <header className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="SweetHome home">
            <span className="flex h-10 w-10 items-center justify-center rounded-[0.9rem] bg-[#354536] text-xl text-white shadow-[0_10px_25px_-14px_rgba(53,69,54,0.8)]">⌂</span>
            <span className="text-base font-semibold tracking-[-0.035em]">SweetHome</span>
          </Link>
          <p className="text-xs font-medium tracking-[0.12em] text-[#a26d45] sm:text-sm">Your Saturday, imagined</p>
        </header>

        <section className="mx-auto max-w-3xl pb-14 pt-20 text-center sm:pt-28 lg:pb-20">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#a26d45]">A day in the neighbourhood</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.065em] text-[#354536] sm:text-7xl">A Saturday in {selectedLocation}</h1>
          <p className="mt-6 text-base leading-7 text-[#82786c] sm:text-lg">Imagine your weekend here.</p>
        </section>

        <section className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-20" aria-label={`A Saturday in ${selectedLocation}`}>
          <div className="relative">
            <div className="absolute bottom-3 left-6 top-3 w-px bg-[#ded6ca] sm:left-7" />
            <ol className="relative space-y-0">
              {moments.map((moment) => <JourneyMoment key={moment.time} moment={moment} />)}
            </ol>
          </div>

          <aside className="relative overflow-hidden rounded-[2rem] border border-[#eadfd2] bg-[#f4eadf] p-7 shadow-[0_20px_50px_-32px_rgba(92,65,42,0.5)] sm:p-9 lg:sticky lg:top-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#e2c7ad]/40 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a26d45]">A little closer to home</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#354536]">Why this fits you</h2>
              <p className="mt-5 text-sm leading-7 text-[#746e66]">You told us you value:</p>

              <ul className="mt-5 space-y-3">
                {[{ label: "Coffee", icon: "coffee" as const }, { label: "Nature", icon: "tree" as const }, { label: "Walkability", icon: "walk" as const }].map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-sm font-medium text-[#596157]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/70 text-[#a26d45]"><JourneyIcon name={item.icon} /></span>
                    {item.label}
                  </li>
                ))}
              </ul>

              <div className="my-8 h-px bg-[#dfd1c2]" />
              <p className="text-base leading-7 text-[#596157]">SweetHome found a place that brings them together.</p>

              <Link href="/report" className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-2xl bg-[#354536] px-6 text-sm font-semibold text-white shadow-[0_16px_30px_-16px_rgba(53,69,54,0.8)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#4b624b] focus:outline-none focus:ring-4 focus:ring-[#dce8d6]">
                View AI Property Report
                <span className="ml-3 text-lg">→</span>
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
