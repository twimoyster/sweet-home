import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fbf7f0] px-6 text-[#354536] selection:bg-[#dce8d6] selection:text-[#354536]">
      <div className="pointer-events-none absolute -left-40 top-[-8rem] h-[32rem] w-[32rem] animate-pulse rounded-full bg-[#f3ddc5]/70 blur-3xl [animation-duration:8s]" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 h-[34rem] w-[34rem] animate-pulse rounded-full bg-[#dce8d4]/80 blur-3xl [animation-delay:2s] [animation-duration:10s]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-3xl" />

      <section className="relative flex w-full max-w-2xl flex-col items-center text-center">
        <div className="mb-14 flex items-center gap-3 animate-[float_6s_ease-in-out_infinite]">
          <span className="flex h-11 w-11 items-center justify-center rounded-[1.1rem] bg-[#354536] text-xl text-white shadow-[0_12px_28px_-14px_rgba(53,69,54,0.8)]">⌂</span>
          <span className="text-lg font-semibold tracking-[-0.035em] text-[#354536]">SweetHome</span>
        </div>

        <p className="text-sm font-medium tracking-[0.16em] text-[#a26d45]">Find where life feels right.</p>
        <h1 className="mt-8 max-w-xl text-5xl font-semibold leading-[1.04] tracking-[-0.065em] text-[#354536] sm:text-7xl">
          Not every place feels like home.
          <span className="mt-3 block font-normal italic text-[#bb7959]">Let&apos;s discover yours.</span>
        </h1>

        <Link
          href="/lifestyle"
          className="group mt-12 inline-flex h-16 items-center justify-center rounded-[1.35rem] bg-[#354536] px-9 text-base font-semibold text-white shadow-[0_18px_35px_-17px_rgba(53,69,54,0.85)] transition duration-500 hover:-translate-y-1 hover:bg-[#4b624b] hover:shadow-[0_24px_40px_-18px_rgba(53,69,54,0.75)] focus:outline-none focus:ring-4 focus:ring-[#dce8d6]"
        >
          Begin Your Journey
          <span className="ml-4 text-xl transition-transform duration-500 group-hover:translate-x-1">→</span>
        </Link>

      </section>
    </main>
  );
}
