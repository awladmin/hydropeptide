import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-page px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif2 text-[clamp(28px,6vw,56px)] leading-tight tracking-[0.2px]">
            HydroPeptide Learning Lab
          </h1>
          <p className="mt-3 text-hp-muted text-base md:text-lg">
            Your gateway to professional education &amp; product mastery.
          </p>
        </div>

        {/* Large actions */}
        <div className="mt-10 md:mt-12 flex flex-col items-stretch gap-4 sm:flex-row sm:justify-center">
          <Link
            href="https://hydropeptideunitedkingdom-hydropeptide.bridgeapp.com/login?external=1&state=4kfaXaUiYSODutYz1ym0IQOD7OsGDiW77ajaDBZay-Q"
            className="inline-flex items-center justify-center rounded-full px-8 py-4
                       text-base md:text-lg font-semibold text-white
                       bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-105
                       shadow-md active:translate-y-px"
          >
            Sign up
          </Link>

          <Link
            href=" https://register.hydropeptide.com/education"
            className="inline-flex items-center justify-center rounded-full px-8 py-4
                       text-base md:text-lg font-semibold text-white
                       bg-gradient-to-r from-green-500 to-emerald-600 hover:brightness-105
                       shadow-md active:translate-y-px"
          >
            Register
          </Link>
        </div>

        {/* Optional secondary copy */}
        <p className="mt-6 text-center text-sm text-hp-muted">
          Links will take you to the correct portal.
        </p>
      </section>
    </main>
  );
}
