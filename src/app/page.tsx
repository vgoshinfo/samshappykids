import Image from "next/image";
import Section from "@/components/Section";
import WaveDivider from "@/components/WaveDivider";
import Button from "@/components/Button";
import SongCard from "@/components/SongCard";
import CharacterCard from "@/components/CharacterCard";
import PlatformRow from "@/components/PlatformRow";
import { characters, featuredSongs } from "@/lib/data";
import { externalLinks } from "@/lib/links";

const enjoyList = [
  "ABC songs and alphabet learning",
  "Counting songs and number rhymes",
  "Animal songs and silly adventures",
  "Bedtime lullabies and calm music",
  "Dance songs for movement and fun",
  "Daily routine songs for brushing, washing, sharing, and more",
  "Classic nursery rhyme-inspired songs with a fresh, friendly feel",
];

const whyFamiliesLoveUs = [
  "Easy for children to sing",
  "Gentle and age-appropriate",
  "Positive and family-friendly",
  "Fun for repeated listening",
  "Helpful for early learning",
  "Perfect for babies, toddlers, and preschoolers",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky/20 via-sunny/15 to-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center sm:py-28">
          <span className="rounded-full bg-white px-4 py-1 font-display text-sm font-semibold text-coral-dark shadow-sm">
            Sing. Learn. Smile. Grow.
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight text-ink sm:text-6xl">
            Welcome to Sam&apos;s Happy Kids Sing-Along
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
            Joyful nursery rhymes, gentle songs, and colorful learning moments
            for little hearts.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">
            Sam&apos;s Happy Kids Sing-Along is a warm and cheerful music world
            created for babies, toddlers, preschoolers, and families. Through
            sweet melodies, playful characters, and easy-to-sing lyrics, we
            help children learn, smile, move, dream, and grow. From ABC songs
            and counting rhymes to bedtime lullabies and happy dance-alongs,
            every song is made with love for children and peace of mind for
            parents.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={externalLinks.youtube} variant="primary" external>
              Watch on YouTube
            </Button>
            <Button href={externalLinks.spotify} variant="secondary" external>
              Listen Now
            </Button>
            <Button href="/about" variant="outline">
              Meet the Characters
            </Button>
          </div>
          <div className="mt-14 w-full max-w-3xl overflow-hidden rounded-3xl shadow-xl ring-1 ring-ink/5">
            <Image
              src="/images/album-sing-along-vol-1.png"
              alt="Sam's Happy Kids Sing-Along — Full Album Vol. 1, featuring Sam's Happy Kids and family"
              width={1672}
              height={941}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>
      <WaveDivider color="white" />

      {/* About the Brand */}
      <Section background="white" className="text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Music Made for Happy Little Learners
        </h2>
        <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-ink/70">
          At Sam&apos;s Happy Kids Sing-Along, we believe children learn best
          when they feel happy, safe, and loved. Our songs are created to
          make everyday learning simple and joyful. Whether your child is
          learning letters, numbers, colors, animals, routines, manners, or
          bedtime habits, our music turns each little lesson into a
          beautiful sing-along moment.
        </p>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-ink/70">
          Each song is designed with gentle rhythms, clear words, friendly
          repetition, and bright storytelling, making it easy for young
          children to follow, remember, and enjoy.
        </p>
      </Section>

      {/* What Children Will Enjoy */}
      <Section background="sunny">
        <h2 className="text-center font-display text-3xl font-bold text-ink sm:text-4xl">
          A World of Songs for Every Little Moment
        </h2>
        <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {enjoyList.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl bg-white p-4 text-ink/80 shadow-sm"
            >
              <span className="text-xl">🎈</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Parent-Friendly Section */}
      <Section background="sky" className="text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Created with Parents in Mind
        </h2>
        <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-ink/70">
          We know parents want content that feels safe, gentle, meaningful,
          and enjoyable. That is why Sam&apos;s Happy Kids Sing-Along focuses
          on positive messages, simple learning, soft visuals, and music that
          children can enjoy again and again. Our songs are made to support
          early childhood development while keeping the experience light,
          playful, and family-friendly.
        </p>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-ink/70">
          Perfect for morning playtime, car rides, preschool activities,
          bedtime routines, or quiet family moments.
        </p>
      </Section>

      {/* Featured Songs */}
      <Section background="white">
        <h2 className="text-center font-display text-3xl font-bold text-ink sm:text-4xl">
          Popular Songs From Sam&apos;s Happy Kids Sing-Along
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredSongs.map((song) => (
            <SongCard key={song.title} {...song} />
          ))}
        </div>
      </Section>

      {/* Music Platforms */}
      <Section background="grape" className="text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Listen Anywhere
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink/70">
          You can enjoy Sam&apos;s Happy Kids Sing-Along on YouTube and your
          favorite music platforms.
        </p>
        <div className="mt-8">
          <PlatformRow />
        </div>
        <div className="mt-10">
          <Button href={externalLinks.spotify} variant="primary" external>
            Listen to the Songs
          </Button>
        </div>
      </Section>

      {/* YouTube Section */}
      <Section background="coral" className="text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Watch Our Nursery Rhyme Videos
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink/70">
          Bring the songs to life with colorful videos, friendly characters,
          and cheerful sing-along moments. Our YouTube channel is made for
          children who love music, movement, stories, and gentle learning.
          Subscribe to enjoy new nursery rhymes, lyric videos, albums, and
          fun musical adventures.
        </p>
        <div className="mt-8">
          <Button href={externalLinks.youtube} variant="primary" external>
            Visit Our YouTube Channel
          </Button>
        </div>
      </Section>

      {/* Character Section */}
      <Section background="white">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Meet Sam and Friends
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink/70">
            Say hello to the happy little friends who bring our songs to
            life. Sam and his friends love to sing, dance, learn, play, and
            explore the world together. Each character adds warmth,
            curiosity, and joy to the Sam&apos;s Happy Kids Sing-Along
            family.
          </p>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {characters.map((character) => (
            <CharacterCard key={character.name} {...character} />
          ))}
        </div>
      </Section>

      {/* Why Families Love Us */}
      <Section background="sunny">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Simple Songs. Sweet Stories. Happy Learning.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink/70">
            Families love Sam&apos;s Happy Kids Sing-Along because our songs
            are:
          </p>
        </div>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {whyFamiliesLoveUs.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 text-ink/80 shadow-sm"
            >
              <span className="text-xl">💛</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-2xl text-center leading-relaxed text-ink/70">
          Every song is made to feel warm, safe, and memorable.
        </p>
      </Section>

      {/* Call To Action */}
      <Section background="ink" className="text-center">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Let&apos;s Sing Together
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/80">
          Join Sam and friends for happy songs, sweet rhymes, and little
          learning moments every day.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href={externalLinks.youtube} variant="secondary" external>
            Subscribe on YouTube
          </Button>
          <Button href={externalLinks.spotify} variant="primary" external>
            Listen on Spotify
          </Button>
          <Button href="/songs" variant="outline">
            Explore Songs
          </Button>
        </div>
      </Section>
    </>
  );
}
