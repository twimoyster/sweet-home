"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Suburb = {
  id: string;
  propertyId: string;
  name: string;
  sentence: string;
  highlights: string[];
  imageClass: string;
  artClass: string;
};

const suburbs: Suburb[] = [
  {
    id: "chatswood",
    propertyId: "modern-apartment",
    name: "Chatswood",
    sentence: "Everything you need within walking distance.",
    highlights: ["☕ Café Culture", "🚇 Public Transport", "🛒 Groceries", "🚶 Walkability"],
    imageClass: "bg-[linear-gradient(135deg,#e7d9c9_0%,#d4c9b4_48%,#a8bba9_100%)]",
    artClass: "text-[#657765]",
  },
  {
    id: "rhodes",
    propertyId: "family-townhouse",
    name: "Rhodes",
    sentence: "Peaceful waterside living after work.",
    highlights: ["🌳 Parks", "🚇 Public Transport", "🚶 Walkability", "🏃 Outdoor Lifestyle"],
    imageClass: "bg-[linear-gradient(145deg,#d9e4e3_0%,#b7d1d2_48%,#8faeb7_100%)]",
    artClass: "text-[#527c87]",
  },
  {
    id: "burwood",
    propertyId: "sunny-unit",
    name: "Burwood",
    sentence: "A vibrant neighbourhood full of local character.",
    highlights: ["☕ Café Culture", "🛒 Groceries", "🚶 Walkability", "🌳 Parks"],
    imageClass: "bg-[linear-gradient(135deg,#ead8c7_0%,#d5bba8_48%,#b78d79_100%)]",
    artClass: "text-[#9a664f]",
  },
];

function NeighbourhoodPlaceholder({ suburb }: { suburb: Suburb }) {
  return (
    <div className={`relative h-56 overflow-hidden sm:h-64 ${suburb.imageClass}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_15%,rgba(255,255,255,.7),transparent_31%)]" />
      <div className="absolute -bottom-12 -left-10 h-36 w-72 rounded-[50%] bg-white/20 blur-sm" />
      <svg aria-hidden="true" className={`absolute bottom-0 left-1/2 h-[82%] w-[86%] -translate-x-1/2 ${suburb.artClass}`} fill="none" viewBox="0 0 480 240">
        <path d="M0 216h480" opacity=".36" stroke="currentColor" strokeWidth="3" />
        <path d="m115 216 0-91 125-76 125 76v91" fill="rgba(255,255,255,.24)" stroke="currentColor" strokeOpacity=".55" strokeWidth="3" />
        <path d="M166 216v-65h46v65M270 216v-92h52v92M348 216v-54h25v54" fill="rgba(255,255,255,.3)" stroke="currentColor" strokeOpacity=".45" strokeWidth="3" />
        <path d="M84 216c16-48 33-70 51-91M96 185c-17-18-32-24-48-22M108 164c16-18 31-23 47-21" stroke="currentColor" strokeLinecap="round" strokeOpacity=".5" strokeWidth="5" />
        <circle cx="393" cy="68" r="27" fill="rgba(255,255,255,.3)" />
      </svg>
    </div>
  );
}

function SuburbCard({ suburb }: { suburb: Suburb }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#eadfd2] bg-white shadow-[0_20px_55px_-30px_rgba(74,64,51,0.42)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_65px_-30px_rgba(74,64,51,0.55)]">
      <NeighbourhoodPlaceholder suburb={suburb} />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h2 className="text-3xl font-semibold tracking-[-0.055em] text-[#354536]">{suburb.name}</h2>
        <p className="mt-3 text-[0.98rem] leading-7 text-[#746e66]">{suburb.sentence}</p>

        <div className="mt-7 border-t border-[#eee7de] pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a29a90]">Everyday highlights</p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${suburb.name} lifestyle highlights`}>
            {suburb.highlights.map((highlight) => (
              <li key={highlight} className="rounded-full bg-[#f5f1eb] px-3 py-1.5 text-xs font-medium text-[#5d6d5e]">{highlight}</li>
            ))}
          </ul>
        </div>

        <Link href={`/journey?property=${suburb.propertyId}`} className="mt-auto inline-flex h-12 items-center justify-center rounded-xl bg-[#354536] px-5 pt-0 text-sm font-semibold text-white shadow-[0_14px_28px_-16px_rgba(53,69,54,0.85)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#4b624b] focus:outline-none focus:ring-4 focus:ring-[#dce8d6]">
          Experience Life Here
          <span className="ml-3 text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}

export default function SuburbsPage() {
  const [selectedPropertyId, setSelectedPropertyId] = useState("modern-apartment");

  useEffect(() => {
    const propertyId = new URLSearchParams(window.location.search).get("property");

    if (propertyId) {
      const selectionTimer = window.setTimeout(() => setSelectedPropertyId(propertyId), 0);

      return () => window.clearTimeout(selectionTimer);
    }
  }, []);

  const selectedSuburb = suburbs.find((suburb) => suburb.propertyId === selectedPropertyId) ?? suburbs[0];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fbf7f0] px-6 text-[#354536] selection:bg-[#dce8d6] selection:text-[#354536] sm:px-8">
      <div className="pointer-events-none absolute -left-40 top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-[#f1ddc7]/55 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 -right-36 h-[34rem] w-[34rem] rounded-full bg-[#dce8d4]/70 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl pb-16 pt-8 sm:pt-10 lg:pb-24 lg:pt-12">
        <header className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="SweetHome home">
            <span className="flex h-10 w-10 items-center justify-center rounded-[0.9rem] bg-[#354536] text-xl text-white shadow-[0_10px_25px_-14px_rgba(53,69,54,0.8)]">⌂</span>
            <span className="text-base font-semibold tracking-[-0.035em]">SweetHome</span>
          </Link>
          <p className="text-xs font-medium tracking-[0.12em] text-[#a26d45] sm:text-sm">Imagine your everyday</p>
        </header>

        <section className="mx-auto max-w-3xl pb-12 pt-20 text-center sm:pt-28 lg:pb-16">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#a26d45]">Neighbourhood Comparison</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.065em] text-[#354536] sm:text-7xl">Life around this home</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#82786c] sm:text-lg sm:leading-8">Here&apos;s what everyday life could look like if you lived here.</p>
        </section>

        <section className="mx-auto max-w-md" aria-label={`${selectedSuburb.name} neighbourhood`}>
          <SuburbCard suburb={selectedSuburb} />
        </section>

        <aside className="mx-auto mt-12 max-w-3xl rounded-[1.75rem] border border-[#eadfd2] bg-[#f4eadf]/80 p-6 shadow-[0_18px_42px_-32px_rgba(92,65,42,0.45)] sm:mt-16 sm:flex sm:items-start sm:gap-5 sm:p-7">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/75 text-xl shadow-sm">🌿</span>
          <div className="mt-4 sm:mt-0">
            <h2 className="text-lg font-semibold tracking-[-0.025em] text-[#354536]">Why compare neighbourhoods?</h2>
            <p className="mt-2 text-sm leading-6 text-[#746e66]">A great home is more than four walls.<br />Understanding the neighbourhood helps you imagine your everyday life before making a decision.</p>
          </div>
        </aside>

        <nav className="mx-auto flex max-w-3xl items-center justify-between gap-4 pt-10 sm:pt-12" aria-label="Neighbourhood navigation">
          <Link href="/places" className="inline-flex h-12 items-center rounded-xl px-4 text-sm font-semibold text-[#82786c] transition duration-300 hover:bg-white/60 hover:text-[#354536] focus:outline-none focus:ring-4 focus:ring-[#dce8d6]"><span className="mr-2 text-lg">←</span> Previous</Link>
        </nav>
      </div>
    </main>
  );
}
