import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-hp-white border-b border-hp-softGray">
      <div className="mx-auto max-w-page px-5 py-4 flex items-center justify-center">
        <Link href="/" aria-label="Home" className="inline-flex">
          <Image
            src="/logo.jpg"
            alt="HydroPeptide"
            width={200}
            height={40}
            priority
            className="h-7 w-auto md:h-8"
          />
        </Link>
      </div>
    </header>
  );
}
