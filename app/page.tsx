import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-white">
      {/* Hero */}

      {/* Large actions */}
      <section className="mx-auto max-w-page px-5 py-12 md:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="font-serif2 text-[clamp(28px,6vw,56px)] leading-tight tracking-[0.2px]">
            HydroPeptide Learning Lab
          </h1>
          <p className="mt-3 text-hp-muted text-base md:text-lg">
            Your gateway to professional education &amp; product mastery.
          </p>
        </div>

        {/* GLAM CTAs */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2">
          {/* SIGN UP / PORTAL */}
          <Link
            href="https://hydropeptideunitedkingdom-hydropeptide.bridgeapp.com/login?external=1&state=4kfaXaUiYSODutYz1ym0IQOD7OsGDiW77ajaDBZay-Q"
            className="group relative overflow-hidden rounded-3xl border border-hp-border bg-white shadow-card hover:shadow-xl transition-shadow"
          >
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/signin.jpg"
                alt="Learning portal"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 540px, 100vw"
                priority
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm text-hp-muted">For professionals</p>
              <h2 className="mt-1 font-serif2 text-2xl md:text-3xl">
                Learning Portal
              </h2>
              <p className="mt-2 text-sm md:text-base text-hp-muted">
                Access courses, protocols, and resources.
              </p>
              <div className="mt-6">
                <span
                  className="inline-flex w-full items-center justify-center rounded-full px-8 py-4
                       text-lg md:text-xl font-semibold text-white
                       bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:brightness-110
                       shadow-md active:translate-y-px"
                >
                  Sign in to Portal
                </span>
              </div>
            </div>
          </Link>

          {/* REGISTER / EDUCATION */}
          <Link
            href="https://register.hydropeptide.com/education"
            className="group relative overflow-hidden rounded-3xl border border-hp-border bg-white shadow-card hover:shadow-xl transition-shadow"
          >
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/register.jpg"
                alt="Education registration"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 540px, 100vw"
                priority
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm text-hp-muted">Upcoming trainings</p>
              <h2 className="mt-1 font-serif2 text-2xl md:text-3xl">
                Register for Education
              </h2>
              <p className="mt-2 text-sm md:text-base text-hp-muted">
                Register for new product and protocol sessions.
              </p>
              <div className="mt-6">
                <span
                  className="inline-flex w-full items-center justify-center rounded-full px-8 py-4
                       text-lg md:text-xl font-semibold text-white
                       bg-gradient-to-r from-emerald-500 to-green-700 group-hover:brightness-110
                       shadow-md active:translate-y-px"
                >
                  Register
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
