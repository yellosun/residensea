import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-sea-deep/10 bg-sand-light/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-sea-deep"
        >
          residensea
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-sea-deep">
          <Link href="/#story" className="hover:text-terracotta">
            Story
          </Link>
          <Link href="/#hosts" className="hover:text-terracotta">
            Hosts
          </Link>
          <Link href="/#work" className="hover:text-terracotta">
            Our Work
          </Link>
          <Link
            href="/apply"
            className="rounded-full bg-sea-deep px-4 py-2 text-sand-light hover:bg-terracotta"
          >
            Apply
          </Link>
        </nav>
      </div>
    </header>
  );
}
