import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "For Parents",
  description:
    "Sam's Happy Kids Sing-Along is created to be a trusted music space for families with young children, with content designed for early childhood learning.",
  alternates: { canonical: "/parents" },
};

const helpItems = [
  "Build vocabulary",
  "Practice pronunciation",
  "Learn numbers and letters",
  "Understand daily routines",
  "Improve listening skills",
  "Move with rhythm",
  "Feel calm before sleep",
  "Enjoy positive family time",
];

const whenToPlay = [
  "Morning wake-up time",
  "Breakfast routines",
  "Playtime",
  "Preschool activities",
  "Car rides",
  "Screen time with supervision",
  "Bath time",
  "Bedtime",
  "Quiet time",
];

export default function ParentsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky/15 to-cream py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            For Parents and Families
          </h1>
          <p className="mt-6 leading-relaxed text-ink/70">
            Sam&apos;s Happy Kids Sing-Along is created to be a trusted music
            space for families with young children. We understand how
            important it is to choose songs and videos that feel safe,
            positive, and helpful. That is why our content is designed with
            care, warmth, and early childhood learning in mind.
          </p>
        </div>
      </section>

      <Section background="white">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            How Our Songs Help Children
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink/70">
            Our songs use melody, rhythm, repetition, and simple language to
            help children learn naturally. Through music, children can:
          </p>
        </div>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {helpItems.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-2xl bg-sky/10 p-4 text-ink/80"
            >
              <span className="text-xl">🎼</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section background="sunny" className="text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          When to Play Our Songs
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink/70">
          Sam&apos;s Happy Kids Sing-Along is perfect for:
        </p>
        <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-3">
          {whenToPlay.map((item) => (
            <li
              key={item}
              className="rounded-full bg-white px-5 py-2 font-display text-sm font-semibold text-ink/80 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section background="white" className="text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          A Gentle Note to Parents
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink/70">
          Every child learns at their own pace. Our songs are here to make
          learning joyful, not pressured.
        </p>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink/70">
          Let your little one sing, clap, dance, repeat, laugh, and enjoy the
          music in their own way.
        </p>
      </Section>
    </>
  );
}
