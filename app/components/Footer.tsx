export default function Footer() {
  return (
    <footer className="mt-auto bg-white border-t border-hp-border py-6">
      <div className="mx-auto max-w-page px-5 text-center text-sm text-hp-muted">
        © {new Date().getFullYear()} HydroPeptide. All rights reserved.
      </div>
    </footer>
  );
}
