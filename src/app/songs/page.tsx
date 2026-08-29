import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import CategoryCard from "@/components/CategoryCard";
import { albums, songCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Songs",
  description:
    "Explore our growing collection of nursery rhymes, lullabies, learning songs, and happy sing-alongs for babies, toddlers, and preschoolers.",
};

const albumUses = [
  "Playtime",
  "Preschool classrooms",
  "Family car rides",
  "Morning routines",
  "Bedtime",
  "YouTube music sessions",
  "Nursery rhyme playlists",
];

export default function SongsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-coral/15 to-cream py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            Songs for Little Learners
          </h1>
          <p className="mt-6 leading-relaxed text-ink/70">
            Explore our growing collection of nursery rhymes, lullabies,
            learning songs, and happy sing-alongs. Whether your child wants
            to dance, count, learn letters, brush their teeth, or drift off
            to sleep, there is a Sam&apos;s Happy Kids song for every moment.
          </p>
        </div>
      </section>

      <Section background="white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {songCategories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </Section>

      <Section background="grass" className="text-center">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          Sam&apos;s Happy Kids Sing-Along Albums
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink/70">
          Enjoy full collections of children&apos;s songs created for
          everyday listening.
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-2">
          {albums.map((album) => (
            <div
              key={album.title}
              className="overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-ink/5"
            >
              <Image
                src={album.image}
                alt={`${album.title} — ${album.subtitle}`}
                width={1672}
                height={941}
                className="h-auto w-full object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="font-display text-lg font-bold text-ink">
                  {album.title}
                </h3>
                <p className="text-sm text-ink/60">{album.subtitle}</p>

                <p className="mt-4 font-display text-xs font-bold uppercase tracking-wide text-grass-dark">
                  Listen on Spotify
                </p>
                <div className="mt-2 overflow-hidden rounded-xl">
                  <iframe
                    title={`${album.title} on Spotify`}
                    src={album.spotifyEmbedSrc}
                    width="100%"
                    height="352"
                    style={{ borderRadius: "12px" }}
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>

                {album.appleMusicEmbedSrc && (
                  <>
                    <p className="mt-5 font-display text-xs font-bold uppercase tracking-wide text-coral-dark">
                      Listen on Apple Music
                    </p>
                    <div className="mt-2 overflow-hidden rounded-xl">
                      <iframe
                        title={`${album.title} on Apple Music`}
                        src={album.appleMusicEmbedSrc}
                        width="100%"
                        height="450"
                        style={{ borderRadius: "12px" }}
                        frameBorder="0"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                        loading="lazy"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl leading-relaxed text-ink/70">
          Our albums are perfect for:
        </p>
        <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-3">
          {albumUses.map((use) => (
            <li
              key={use}
              className="rounded-full bg-white px-5 py-2 font-display text-sm font-semibold text-ink/80 shadow-sm"
            >
              {use}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
