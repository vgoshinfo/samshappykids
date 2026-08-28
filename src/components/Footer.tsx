import Link from "next/link";
import { externalLinks, footerQuickLinks } from "@/lib/links";

const followLinks = [
  { label: "YouTube", href: externalLinks.youtube },
  { label: "Spotify", href: externalLinks.spotify },
  { label: "Amazon Music", href: externalLinks.amazonMusic },
  { label: "Apple Music", href: externalLinks.appleMusic },
  { label: "Instagram", href: externalLinks.instagram },
  { label: "Facebook", href: externalLinks.facebook },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎵</span>
            <span className="font-display text-lg font-bold">
              Sam&apos;s Happy Kids Sing-Along
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Joyful nursery rhymes, lullabies, and learning songs for babies,
            toddlers, preschoolers, and families.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-sunny">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {footerQuickLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-sunny">
            Follow Us
          </h3>
          <ul className="mt-4 space-y-2">
            {followLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        Made with love for happy little learners everywhere.
      </div>
    </footer>
  );
}
