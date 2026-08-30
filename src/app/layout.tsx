import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { externalLinks } from "@/lib/links";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.samshappykids.com"),
  title: {
    default: "Sam's Happy Kids Sing-Along | Nursery Rhymes, Kids Songs and Lullabies",
    template: "%s | Sam's Happy Kids Sing-Along",
  },
  description:
    "Sam's Happy Kids Sing-Along creates joyful nursery rhymes, learning songs, bedtime lullabies, and sing-along music for babies, toddlers, preschoolers, and families. Watch on YouTube and listen on Spotify, Amazon Music, Apple Music, iTunes, and more.",
  keywords: [
    "Sam's Happy Kids Sing-Along",
    "kids songs",
    "nursery rhymes",
    "baby songs",
    "toddler songs",
    "preschool songs",
    "lullabies for babies",
    "ABC song",
    "counting songs",
    "children's music",
    "sing along songs",
    "bedtime songs",
    "educational songs for kids",
    "songs for toddlers",
    "nursery rhyme videos",
    "kids YouTube songs",
  ],
  openGraph: {
    title: "Sam's Happy Kids Sing-Along | Nursery Rhymes, Kids Songs and Lullabies",
    description:
      "Joyful nursery rhymes, learning songs, bedtime lullabies, and sing-along music for babies, toddlers, preschoolers, and families.",
    images: ["/images/album-sing-along-vol-1.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam's Happy Kids Sing-Along | Nursery Rhymes, Kids Songs and Lullabies",
    description:
      "Joyful nursery rhymes, learning songs, bedtime lullabies, and sing-along music for babies, toddlers, preschoolers, and families.",
    images: ["/images/album-sing-along-vol-1.png"],
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sam's Happy Kids Sing-Along",
  url: "https://www.samshappykids.com",
  logo: "https://www.samshappykids.com/images/logo.jpeg",
  description:
    "Sam's Happy Kids Sing-Along creates joyful nursery rhymes, learning songs, bedtime lullabies, and sing-along music for babies, toddlers, preschoolers, and families.",
  sameAs: [
    externalLinks.youtube,
    externalLinks.spotify,
    externalLinks.appleMusic,
    externalLinks.facebook,
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
