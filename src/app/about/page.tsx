import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sam's Happy Kids Sing-Along is a joyful nursery rhyme and children's music brand created for babies, toddlers, preschoolers, and families around the world.",
};

const missionItems = [
  "Language development",
  "Listening skills",
  "Memory and repetition",
  "Movement and coordination",
  "Number and letter recognition",
  "Daily routines",
  "Emotional comfort",
  "Imagination and creativity",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-grape/15 to-cream py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            About Sam&apos;s Happy Kids Sing-Along
          </h1>
          <p className="mt-6 leading-relaxed text-ink/70">
            Sam&apos;s Happy Kids Sing-Along is a joyful nursery rhyme and
            children&apos;s music brand created for babies, toddlers,
            preschoolers, and families around the world.
          </p>
          <p className="mt-4 leading-relaxed text-ink/70">
            Our mission is simple: to create songs that make children smile,
            help them learn, and give families beautiful music moments to
            enjoy together.
          </p>
          <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/character-group.png"
              alt="Sam, Mia, Leo, Lily, Noah, and Bingo the puppy"
              width={1536}
              height={1024}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <Section background="white" className="text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          A Happy Place for Little Voices
        </h2>
        <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-ink/70">
          Sam&apos;s Happy Kids Sing-Along was created with love for
          children&apos;s music, storytelling, and early learning. We wanted
          to build a musical world where children can sing freely, learn
          naturally, and feel comforted through sound, rhythm, and
          imagination. Every song is written with young listeners in mind,
          using simple words, cheerful melodies, and positive themes.
        </p>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-ink/70">
          From playful counting songs to soft bedtime lullabies, each track
          is made to become part of a child&apos;s everyday routine.
        </p>
      </Section>

      <Section background="sky">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            To Help Children Learn Through Joyful Music
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink/70">
            Our goal is to make early learning feel fun, safe, and
            memorable. We create songs that support:
          </p>
        </div>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {missionItems.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 text-ink/80 shadow-sm"
            >
              <span className="text-xl">🌟</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section background="white" className="text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Our Promise to Parents
        </h2>
        <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-ink/70">
          We create content that is gentle, positive, and suitable for young
          children. Parents can feel comfortable knowing that our music
          focuses on kindness, learning, family, friendship, curiosity, and
          happiness.
        </p>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-ink/70">
          No loud chaos. No confusing messages. Just sweet songs, clear
          lyrics, and a warm musical world made for little ones.
        </p>
      </Section>
    </>
  );
}
