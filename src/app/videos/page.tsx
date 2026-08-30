import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { externalLinks } from "@/lib/links";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch Sam's Happy Kids on YouTube — colorful nursery rhyme videos, lyric videos, and sing-along fun for children.",
  keywords: [
    "kids YouTube videos",
    "nursery rhyme videos",
    "sing-along videos for toddlers",
    "lyric videos for kids",
    "YouTube channel for toddlers",
    "children's music videos",
  ],
  alternates: { canonical: "/videos" },
};

const channelHighlights = [
  "Nursery rhyme videos",
  "Lyric videos",
  "Full album videos",
  "Learning songs",
  "Bedtime lullabies",
  "Character sing-alongs",
  "Fun music videos for toddlers and preschoolers",
];

export default function VideosPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-coral/15 to-cream py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            Watch Sam&apos;s Happy Kids on YouTube
          </h1>
          <p className="mt-6 leading-relaxed text-ink/70">
            Our YouTube channel brings each song to life with colorful
            visuals, fun characters, and sing-along videos for children.
            Children can watch, listen, dance, and learn with Sam, Mia, Leo,
            Lily, Noah, and friends.
          </p>
          <div className="mt-8">
            <Button href={externalLinks.youtube} variant="primary" external>
              Visit Our YouTube Channel
            </Button>
          </div>
        </div>
      </section>

      <Section background="white" className="text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          What You&apos;ll Find On Our Channel
        </h2>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {channelHighlights.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 text-ink/80 shadow-sm ring-1 ring-ink/5"
            >
              <span className="text-xl">📺</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section background="ink" className="text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Never Miss a New Song
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/80">
          Subscribe to Sam&apos;s Happy Kids Sing-Along on YouTube and join
          us for new music, happy learning, and gentle family-friendly fun.
        </p>
        <div className="mt-10">
          <Button href={externalLinks.youtube} variant="secondary" external>
            Subscribe on YouTube
          </Button>
        </div>
      </Section>
    </>
  );
}
