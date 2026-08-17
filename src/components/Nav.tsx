"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/#story", label: "Story" },
  { href: "/#hosts", label: "Hosts" },
  { href: "/#work", label: "Our Work" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sea-deep/10 bg-sand-light/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="residensea"
          onClick={() => setOpen(false)}
          className="font-serif text-xl italic tracking-tight text-sea-deep"
        >
          residensea
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-sea-deep sm:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-terracotta"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="rounded-full bg-sea-deep px-4 py-2 text-sand-light hover:bg-terracotta"
          >
            Apply
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-sea-deep sm:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M4 4l14 14M18 4L4 18" />
            ) : (
              <path d="M2 6h18M2 11h18M2 16h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-sea-deep/10 bg-sand-light px-6 py-4 text-sm font-medium text-sea-deep sm:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 hover:bg-sea-deep/5 hover:text-terracotta"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-sea-deep px-4 py-3 text-center text-sand-light hover:bg-terracotta"
          >
            Apply
          </Link>
        </nav>
      )}
    </header>
  );
}
