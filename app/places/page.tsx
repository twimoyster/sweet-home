"use client";

import { useState } from "react";
import Link from "next/link";

type Property = {
  id: string;
  title: string;
  address: string;
  price: string;
  facts: string[];
  match: number;
  summary: string;
  chips: string[];
  imageClass: string;
  artClass: string;
};

function PropertyPlaceholder({ property }: { property: Property }) {
  return (
    <div className={`relative h-56 overflow-hidden sm:h-64 ${property.imageClass}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_15%,rgba(255,255,255,.7),transparent_31%)]" />
      <div className="absolute -bottom-12 -left-10 h-36 w-72 rounded-[50%] bg-white/20 blur-sm" />
      <svg aria-hidden="true" className={`absolute bottom-0 left-1/2 h-[82%] w-[86%] -translate-x-1/2 ${property.artClass}`} fill="none" viewBox="0 0 480 240">
        <path d="M0 216h480" opacity=".36" stroke="currentColor" strokeWidth="3" />
        <path d="m115 216 0-91 125-76 125 76v91" fill="rgba(255,255,255,.24)" stroke="currentColor" strokeOpacity=".55" strokeWidth="3" />
        <path d="M166 216v-65h46v65M270 216v-92h52v92M348 216v-54h25v54" fill="rgba(255,255,255,.3)" stroke="currentColor" strokeOpacity=".45" strokeWidth="3" />
        <path d="M84 216c16-48 33-70 51-91M96 185c-17-18-32-24-48-22M108 164c16-18 31-23 47-21" stroke="currentColor" strokeLinecap="round" strokeOpacity=".5" strokeWidth="5" />
        <circle cx="393" cy="68" r="27" fill="rgba(255,255,255,.3)" />
      </svg>
      <span className="absolute right-5 top-5 rounded-full border border-white/70 bg-white/75 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#4c5d51] shadow-sm backdrop-blur-sm">{property.match}% Match</span>
    </div>
  );
}

function PropertyCard({ property, onPreview }: { property: Property; onPreview: () => void }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#eadfd2] bg-white shadow-[0_20px_55px_-30px_rgba(74,64,51,0.42)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_65px_-30px_rgba(74,64,51,0.55)]">
      <PropertyPlaceholder property={property} />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div>
          <h2 className="text-2xl font-semibold tracking-[-0.05em] text-[#354536]">{property.title}</h2>
          <p className="mt-2 text-sm font-medium text-[#82786c]">{property.address}</p>
          <p className="mt-4 text-lg font-semibold tracking-[-0.025em] text-[#a26d45]">{property.price}</p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-[#82786c]" aria-label={`${property.title} facts`}>
            {property.facts.map((fact) => <li key={fact}>{fact}</li>)}
          </ul>
          <p className="mt-5 text-sm leading-6 text-[#746e66]">{property.summary}</p>
        </div>

        <div className="mt-6 border-t border-[#eee7de] pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a29a90]">Lifestyle match</p>
          <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${property.title} lifestyle matches`}>
            {property.chips.map((chip) => (
              <li key={chip} className="rounded-full bg-[#f5f1eb] px-3 py-1.5 text-xs font-medium text-[#5d6d5e]">{chip}</li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex items-center gap-4 pt-7">
          <Link href={`/suburbs?property=${property.id}`} className="inline-flex h-12 flex-1 items-center justify-center rounded-xl bg-[#354536] px-4 text-sm font-semibold text-white shadow-[0_14px_28px_-16px_rgba(53,69,54,0.85)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#4b624b] focus:outline-none focus:ring-4 focus:ring-[#dce8d6]">
            Experience This Home
            <span className="ml-2 text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <button type="button" onClick={onPreview} className="text-sm font-semibold text-[#82786c] underline decoration-[#d8cabb] underline-offset-4 transition hover:text-[#354536] focus:outline-none focus:ring-4 focus:ring-[#dce8d6]">Preview</button>
        </div>
      </div>
    </article>
  );
}

export default function PlacesPage() {
  const [previewProperty, setPreviewProperty] = useState<Property | null>(null);
  const properties: Property[] = [
    {
      id: "modern-apartment",
      title: "Modern Apartment",
      address: "Chatswood NSW",
      price: "$820/week",
      facts: ["2 Bed", "2 Bath", "1 Car"],
      match: 91,
      summary: "A great match for your morning routine and public transport preference.",
      chips: ["☀️ Morning Sun", "🚶 Walkable", "🚉 Public Transport"],
      imageClass: "bg-[linear-gradient(135deg,#e7d9c9_0%,#d4c9b4_48%,#a8bba9_100%)]",
      artClass: "text-[#657765]",
    },
    {
      id: "family-townhouse",
      title: "Family Townhouse",
      address: "Rhodes NSW",
      price: "$910/week",
      facts: ["3 Bed", "2 Bath", "1 Car"],
      match: 88,
      summary: "A thoughtful fit for peaceful evenings, a little more space and an easy commute.",
      chips: ["🌳 Quiet", "🐶 Pet Friendly", "🚉 Public Transport"],
      imageClass: "bg-[linear-gradient(145deg,#d9e5d7_0%,#b8ceb9_48%,#8fae9a_100%)]",
      artClass: "text-[#55745d]",
    },
    {
      id: "sunny-unit",
      title: "Sunny Unit",
      address: "Burwood NSW",
      price: "$760/week",
      facts: ["2 Bed", "1 Bath", "1 Car"],
      match: 86,
      summary: "A strong match for bright mornings, walkable essentials and a lively local rhythm.",
      chips: ["☀️ Morning Sun", "🚶 Walkable", "🌳 Quiet"],
      imageClass: "bg-[linear-gradient(145deg,#e5e0e8_0%,#c8c6d4_48%,#a49dad_100%)]",
      artClass: "text-[#666278]",
    },
  ];

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
          <p className="text-xs font-medium tracking-[0.12em] text-[#a26d45] sm:text-sm">Carefully shortlisted for you</p>
        </header>

        <section className="mx-auto max-w-3xl pb-12 pt-20 text-center sm:pt-28 lg:pb-16">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#a26d45]">AI Recommendations</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.065em] text-[#354536] sm:text-7xl">Homes selected for you</h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#82786c] sm:text-lg sm:leading-8">Based on your lifestyle, SweetHome found these homes as your strongest matches.</p>
        </section>

        <section className="grid gap-7 lg:grid-cols-3" aria-label="Recommended properties">
          {properties.map((property) => <PropertyCard key={property.id} property={property} onPreview={() => setPreviewProperty(property)} />)}
        </section>

        <aside className="mx-auto mt-12 max-w-3xl rounded-[1.75rem] border border-[#eadfd2] bg-[#f4eadf]/80 p-6 shadow-[0_18px_42px_-32px_rgba(92,65,42,0.45)] sm:mt-16 sm:flex sm:items-start sm:gap-5 sm:p-7">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/75 text-xl shadow-sm">✨</span>
          <div className="mt-4 sm:mt-0">
            <h2 className="text-lg font-semibold tracking-[-0.025em] text-[#354536]">Why these homes?</h2>
            <p className="mt-2 text-sm leading-6 text-[#746e66]">SweetHome compared your lifestyle preferences with each property&apos;s characteristics and surrounding neighbourhood to identify the strongest matches.</p>
          </div>
        </aside>

        <nav className="mx-auto flex max-w-3xl items-center justify-between gap-4 pt-10 sm:pt-12" aria-label="Recommended property navigation">
          <Link href="/loading" className="inline-flex h-12 items-center rounded-xl px-4 text-sm font-semibold text-[#82786c] transition duration-300 hover:bg-white/60 hover:text-[#354536] focus:outline-none focus:ring-4 focus:ring-[#dce8d6]"><span className="mr-2 text-lg">←</span> Previous</Link>
        </nav>
      </div>

      {previewProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#354536]/35 px-6 py-8 backdrop-blur-sm" role="presentation" onClick={() => setPreviewProperty(null)}>
          <div className="w-full max-w-lg overflow-hidden rounded-[2rem] border border-[#eadfd2] bg-[#fbf7f0] text-left shadow-[0_30px_90px_-35px_rgba(53,69,54,0.65)]" role="dialog" aria-modal="true" aria-labelledby="preview-title" onClick={(event) => event.stopPropagation()}>
            <PropertyPlaceholder property={previewProperty} />
            <div className="p-6 sm:p-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h2 id="preview-title" className="text-2xl font-semibold tracking-[-0.05em] text-[#354536]">{previewProperty.title}</h2>
                  <p className="mt-2 text-sm font-medium text-[#82786c]">{previewProperty.address}</p>
                </div>
                <button type="button" aria-label="Close preview" onClick={() => setPreviewProperty(null)} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xl text-[#82786c] transition hover:bg-white hover:text-[#354536] focus:outline-none focus:ring-4 focus:ring-[#dce8d6]">×</button>
              </div>
              <p className="mt-5 text-lg font-semibold text-[#a26d45]">{previewProperty.price}</p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-[#82786c]" aria-label={`${previewProperty.title} facts`}>
                {previewProperty.facts.map((fact) => <li key={fact}>{fact}</li>)}
              </ul>
              <p className="mt-5 text-sm leading-6 text-[#746e66]">{previewProperty.summary}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
