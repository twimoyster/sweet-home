import Link from "next/link";

const homeDetails = [
  { icon: "✓", text: "Bright morning sunlight", positive: true },
  { icon: "✓", text: "Quiet balcony", positive: true },
  { icon: "✓", text: "Functional layout", positive: true },
  { icon: "⚠", text: "Slight afternoon heat", positive: false },
];

const nearbyPlaces = [
  { icon: "☕", name: "Café", distance: "4 min walk" },
  { icon: "🛒", name: "Groceries", distance: "6 min walk" },
  { icon: "🚉", name: "Train Station", distance: "8 min walk" },
  { icon: "🌳", name: "Park", distance: "5 min walk" },
];

const lifestyleMatches = [
  {
    label: "You said you prefer",
    preference: "Public Transport",
    explanation: "This home is within walking distance of the station.",
  },
  {
    label: "You said you enjoy",
    preference: "Quiet mornings",
    explanation: "The street is relatively quiet during morning hours.",
  },
  {
    label: "You said you value",
    preference: "Walkability",
    explanation: "Daily essentials are accessible without a car.",
  },
];

const thingsToCheck = [
  "Visit during peak traffic hours.",
  "Check afternoon sunlight.",
  "Confirm public transport frequency.",
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a26d45]">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-[#354536] sm:text-3xl">{title}</h2>
    </div>
  );
}

export default function ReportPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fbf7f0] px-6 text-[#354536] selection:bg-[#dce8d6] selection:text-[#354536] sm:px-8">
      <div className="pointer-events-none absolute -left-40 top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-[#f1ddc7]/55 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 -right-36 h-[34rem] w-[34rem] rounded-full bg-[#dce8d4]/70 blur-3xl" />

      <div className="relative mx-auto w-full max-w-5xl pb-16 pt-8 sm:pt-10 lg:pb-24 lg:pt-12">
        <header className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="SweetHome home">
            <span className="flex h-10 w-10 items-center justify-center rounded-[0.9rem] bg-[#354536] text-xl text-white shadow-[0_10px_25px_-14px_rgba(53,69,54,0.8)]">⌂</span>
            <span className="text-base font-semibold tracking-[-0.035em]">SweetHome</span>
          </Link>
          <p className="text-xs font-medium tracking-[0.12em] text-[#a26d45] sm:text-sm">A little closer to home</p>
        </header>

        <header className="mx-auto max-w-3xl pb-12 pt-20 text-center sm:pt-28 lg:pb-16">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#a26d45]">Personalised Report</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.065em] text-[#354536] sm:text-7xl">Is this the right home for you?</h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#82786c] sm:text-lg sm:leading-8">Here&apos;s how this home matches your lifestyle and everyday needs.</p>
        </header>

        <section className="rounded-[2rem] bg-[#354536] p-7 text-white shadow-[0_26px_70px_-34px_rgba(53,69,54,0.65)] sm:p-10" aria-label="Overall lifestyle match">
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#b9d2ae]/20 blur-3xl" />
            <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-[#d9e7d4]">Overall lifestyle match</p>
                <p className="mt-5 text-7xl font-semibold tracking-[-0.08em]">91<span className="ml-2 text-2xl font-medium tracking-normal text-[#b9c9b5]">%</span></p>
              </div>
              <div className="max-w-sm sm:text-right">
                <p className="text-2xl font-semibold tracking-[-0.045em]">Excellent Match</p>
                <p className="mt-3 text-sm leading-6 text-[#d1ddd0]">This home aligns strongly with the lifestyle you described.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="home-heading">
          <SectionHeading eyebrow="Section 1" title="🏠 The Home" />
          <div id="home-heading" className="grid gap-3 sm:grid-cols-2">
            {homeDetails.map((item) => (
              <div key={item.text} className="flex items-center gap-4 rounded-2xl border border-[#eadfd2] bg-white/75 p-5 shadow-[0_16px_35px_-28px_rgba(92,65,42,0.45)]">
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm ${item.positive ? "bg-[#e6eee3] text-[#5e805d]" : "bg-[#f5eadf] text-[#a26d45]"}`}>{item.icon}</span>
                <span className="text-sm font-medium text-[#596157]">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="around-heading">
          <SectionHeading eyebrow="Section 2" title="🌳 Life Around This Home" />
          <div id="around-heading" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {nearbyPlaces.map((place) => (
              <div key={place.name} className="rounded-2xl border border-[#eadfd2] bg-[#f4eadf]/75 p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 text-xl shadow-sm">{place.icon}</span>
                <p className="mt-5 text-sm font-semibold text-[#354536]">{place.name}</p>
                <p className="mt-1 text-xs font-medium text-[#a26d45]">{place.distance}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="lifestyle-heading">
          <SectionHeading eyebrow="Section 3" title="❤️ Based on What Matters to You" />
          <div id="lifestyle-heading" className="space-y-4">
            {lifestyleMatches.map((match) => (
              <div key={match.preference} className="rounded-[1.5rem] border border-[#eadfd2] bg-white/75 p-6 sm:flex sm:items-start sm:gap-6">
                <div className="flex items-center gap-3 sm:w-56 sm:shrink-0">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e6eee3] text-sm text-[#5e805d]">✓</span>
                  <div>
                    <p className="text-xs font-medium text-[#82786c]">{match.label}</p>
                    <p className="mt-1 text-sm font-semibold text-[#354536]">{match.preference}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#746e66] sm:mt-1">{match.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="check-heading">
          <SectionHeading eyebrow="Section 4" title="Things Worth Checking" />
          <div id="check-heading" className="rounded-[1.75rem] border border-[#eadfd2] bg-[#f4eadf]/75 p-6 sm:p-7">
            <ul className="space-y-4">
              {thingsToCheck.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#746e66]"><span className="mt-0.5 text-[#a26d45]">•</span>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#bcd2b7] bg-[#e6eee3] p-7 shadow-[0_22px_50px_-34px_rgba(76,99,78,0.55)] sm:p-10" aria-labelledby="recommendation-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5e805d]">Final Verdict</p>
          <div className="mt-5 flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <h2 id="recommendation-heading" className="text-3xl font-semibold tracking-[-0.055em] text-[#354536]">SweetHome Recommendation</h2>
              <p className="mt-5 text-lg font-semibold leading-7 text-[#4c634e]">This home is a strong match for your lifestyle.</p>
              <p className="mt-3 text-sm leading-7 text-[#596157]">It offers convenient daily living with excellent walkability and public transport access.</p>
              <p className="mt-3 text-sm leading-7 text-[#596157]">We recommend arranging an inspection before making your final decision.</p>
            </div>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/75 text-2xl shadow-sm">🌿</span>
          </div>
        </section>

        <nav className="flex flex-col-reverse items-center justify-center gap-4 pt-10 sm:flex-row" aria-label="Report navigation">
          <Link href="/lifestyle" className="inline-flex h-12 items-center justify-center rounded-xl px-5 text-sm font-semibold text-[#82786c] transition duration-300 hover:bg-white/60 hover:text-[#354536] focus:outline-none focus:ring-4 focus:ring-[#dce8d6]">Restart Journey</Link>
          <Link href="/places" className="inline-flex h-12 items-center justify-center rounded-xl bg-[#354536] px-6 text-sm font-semibold text-white shadow-[0_14px_28px_-16px_rgba(53,69,54,0.85)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#4b624b] focus:outline-none focus:ring-4 focus:ring-[#dce8d6]">Back to Homes</Link>
        </nav>
      </div>
    </main>
  );
}
