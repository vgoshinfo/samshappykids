"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { mainNav } from "@/lib/links";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-sunny bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.jpeg"
            alt="Sam's Happy Kids Sing-Along"
            width={1024}
            height={1024}
            className="h-16 w-auto object-contain sm:h-20"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 font-display text-sm font-semibold text-ink/80 transition-colors hover:bg-sunny/20 hover:text-coral-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t-2 border-sunny/40 bg-white px-6 py-4 md:hidden">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-3 font-display text-base font-semibold text-ink/80 hover:bg-sunny/20 hover:text-coral-dark"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
