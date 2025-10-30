import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-hp-navy text-hp-white">
      <div className="mx-auto max-w-page px-5 py-12 md:py-16 grid gap-10 md:grid-cols-12">
        {/* Left: logo + blurb */}
        <div className="md:col-span-6">
          <Image
            src="/logo-white.svg"
            alt="HydroPeptide"
            width={200}
            height={40}
            className="h-8 w-auto logo-white"
            priority
          />
          <p className="mt-6 text-sm leading-relaxed text-white/85">
            With over 20 years of experience in professional skincare, we’ve
            been at the forefront of peptide technology-creating
            scientifically-advanced, easy-to-use products.
          </p>

          {/* Socials (inline SVGs so no extra packages) */}
          <div className="mt-6 flex items-center gap-4">
            <Link
              href="https://www.facebook.com/HydroPeptide"
              target="_blank"
              aria-label="Facebook"
              className="hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.7V12h2.7V9.8c0-2.7 1.6-4.2 4-4.2 1.2 0 2.4.2 2.4.2v2.6h-1.4c-1.4 0-1.9.9-1.9 1.8V12h3.2l-.5 2.9h-2.7v7A10 10 0 0 0 22 12z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/hydropeptideuk/"
              target="_blank"
              aria-label="Instagram"
              className="hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.75-.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </Link>
            <Link
              href="https://www.youtube.com/user/hydropeptidemedia"
              target="_blank"
              aria-label="YouTube"
              className="hover:opacity-90"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.7 4.5 12 4.5 12 4.5s-7.7 0-9.4.6A3 3 0 0 0 .5 7.2 31.8 31.8 0 0 0 0 12a31.8 31.8 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.7.6 9.4.6 9.4.6s7.7 0 9.4-.6a3 3 0 0 0 2.1-2.1c.4-1.6.5-3.2.5-4.8s0-3.2-.5-4.8zM9.8 15.2V8.8l6 3.2-6 3.2z" />
              </svg>
            </Link>
          </div>

          <p className="mt-6 text-xs text-white/70">
            © {new Date().getFullYear()} HydroPeptide UK. All rights reserved.
          </p>
        </div>

        {/* Columns */}
        <div className="md:col-span-6">
          <h3 className="font-serif2 text-xl">About</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <Link
                href="https://hydropeptide.co.uk/pages/our-story-2"
                className="hover:underline text-[14px]"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                href="https://hydropeptide.co.uk/pages/commitment"
                className="hover:underline text-[14px]"
              >
                Our Commitment
              </Link>
            </li>
            <li>
              <Link
                href="https://hydropeptide.co.uk/policies/privacy-policy"
                className="hover:underline text-[14px]"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="https://hydropeptide.co.uk/pages/cookie-policy"
                className="hover:underline text-[14px]"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
