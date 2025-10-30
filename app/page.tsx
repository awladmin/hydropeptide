import Image from "next/image";
import WipeButton from "./components/WipeButton";

export default function Page() {
  return (
    <main className="bg-hp-white">
      <section className="mx-auto max-w-page px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif2 text-[clamp(28px,6vw,56px)] leading-tight tracking-[0.2px]">
            HydroPeptide Learning Lab
          </h1>
          <p className="mt-3 text-hp-muted text-base md:text-lg">
            Your gateway to professional education &amp; product mastery.
          </p>
        </div>

        {/* Two non-link panels; ONLY the button links */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2">
          {/* Panel 1 */}
          <div className="relative overflow-hidden rounded-3xl border border-hp-softGray bg-white shadow-card">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/signin.jpg" // replace or remove if not using images
                alt="Sign in"
                fill
                className="object-cover"
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

              {/* ONLY this button is the link */}
              <div className="mt-6">
                <WipeButton href="https://hydropeptideunitedkingdom-hydropeptide.bridgeapp.com/login?external=1&state=4kfaXaUiYSODutYz1ym0IQOD7OsGDiW77ajaDBZay-Q">
                  Sign in to Portal
                </WipeButton>
              </div>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="relative overflow-hidden rounded-3xl border border-hp-softGray bg-white shadow-card">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/register.jpg"
                alt="Register"
                fill
                className="object-cover"
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
                Sign up for new product and protocol sessions.
              </p>

              <div className="mt-6">
                <WipeButton href="https://register.hydropeptide.com/education">
                  REGISTER
                </WipeButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
