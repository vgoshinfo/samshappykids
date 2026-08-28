# Sam's Happy Kids Sing-Along

Marketing site for Sam's Happy Kids Sing-Along, a nursery rhyme and
children's music brand. Built with Next.js (App Router), TypeScript, and
Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Pages

- `/` — Home
- `/about` — About
- `/songs` — Songs
- `/videos` — Videos (YouTube)
- `/parents` — Parents
- `/contact` — Contact

## Before launch

- **Placeholder links**: `src/lib/links.ts` has `#` placeholders for
  YouTube, Spotify, Amazon Music, Apple Music, iTunes, Instagram, and
  Facebook — swap in the real profile/channel URLs.
- **Contact form**: `src/components/ContactForm.tsx` currently simulates a
  submission client-side only. Wire it up to a real form endpoint (e.g.
  Formspree, Resend) before launch.
- **Favicon**: `src/app/favicon.ico` is still the default Next.js icon —
  replace with a brand icon.
- **Character art**: characters (Sam, Mia, Leo, Lily, Noah) currently use
  emoji placeholders in `src/lib/data.ts` — swap in real illustrations when
  available.

## Content source

Site copy, SEO metadata, and page structure come from the approved content
draft for samshappykids.com.
