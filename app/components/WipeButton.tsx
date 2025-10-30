import Link from "next/link";

export default function WipeButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={[
        // full width by default, auto width on larger screens
        "group relative inline-flex items-center justify-center w-full sm:w-full md:w-full lg:w-full",
        // padding: left/right 32px, top/bottom 16px
        "px-8 py-4",
        // white with border, black text
        "rounded-none border border-hp-black bg-hp-white text-hp-black",
        // typography: 14px, uppercase, normal weight
        "text-[14px] uppercase font-normal tracking-[0.02em]",
        // transitions & focus
        "overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-hp-navy focus-visible:ring-offset-2",
        "active:scale-[0.997] transition-transform",
        className,
      ].join(" ")}
    >
      {/* solid blue wipe (#3d72f6) sliding in from left */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[#3d72f6]
          -translate-x-full
          transition-transform duration-400 ease-out
          group-hover:translate-x-0
        "
      />
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
    </Link>
  );
}
