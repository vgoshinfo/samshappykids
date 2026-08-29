export type ColorKey = "sunny" | "sky" | "coral" | "grass" | "grape";

export const featuredSongs: { title: string; blurb: string; color: ColorKey }[] = [
  {
    title: "Ten Little Monkeys Jumping on the Bed",
    blurb: "A fun counting song filled with bouncing, giggles, and playful bedtime energy.",
    color: "coral",
  },
  {
    title: "A-B-C Song",
    blurb: "A bright and cheerful alphabet song to help little learners sing their letters with joy.",
    color: "sunny",
  },
  {
    title: "Dream Away",
    blurb: "A soft bedtime lullaby made for sleepy eyes, moonlit skies, and peaceful dreams.",
    color: "grape",
  },
  {
    title: "Rain, Rain, Go Away",
    blurb: "A sweet rainy-day rhyme about waiting for sunshine and playtime.",
    color: "sky",
  },
  {
    title: "Brush Your Teeth Song",
    blurb: "A happy daily routine song that makes healthy habits fun and easy.",
    color: "grass",
  },
  {
    title: "Days of the Week Song",
    blurb: "A simple and catchy way for children to learn the days of the week.",
    color: "sunny",
  },
];

export const songCategories: { title: string; blurb: string; emoji: string; color: ColorKey }[] = [
  {
    title: "Learning Songs",
    blurb: "Fun songs that help children learn letters, numbers, colors, shapes, days of the week, and more.",
    emoji: "🔤",
    color: "sunny",
  },
  {
    title: "Counting Songs",
    blurb: "Playful number rhymes that make counting simple and exciting.",
    emoji: "🔢",
    color: "coral",
  },
  {
    title: "Bedtime Songs",
    blurb: "Soft lullabies and calming music for peaceful sleep and quiet moments.",
    emoji: "🌙",
    color: "grape",
  },
  {
    title: "Action Songs",
    blurb: "Clap, stomp, jump, dance, and move along with happy songs made for active little bodies.",
    emoji: "🤸",
    color: "grass",
  },
  {
    title: "Daily Routine Songs",
    blurb: "Songs that make brushing teeth, washing hands, getting ready, and going to school more fun.",
    emoji: "🪥",
    color: "sky",
  },
  {
    title: "Animal Songs",
    blurb: "Friendly animal adventures with monkeys, lambs, bears, owls, cats, dogs, and more.",
    emoji: "🐵",
    color: "coral",
  },
];

export const characters: {
  name: string;
  tagline: string;
  blurb: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  color: ColorKey;
}[] = [
  {
    name: "Sam",
    tagline: "The Musical Leader",
    blurb: "Curious, kind, and encouraging — Sam loves music, friendship, and helping everyone sing along.",
    image: "/images/characters/sam.png",
    imageWidth: 300,
    imageHeight: 1024,
    color: "sunny",
  },
  {
    name: "Mia",
    tagline: "The Little Dancer",
    blurb: "Energetic, playful, and expressive, Mia loves melodies, colors, and happy little moments.",
    image: "/images/characters/mia.png",
    imageWidth: 280,
    imageHeight: 1024,
    color: "coral",
  },
  {
    name: "Leo",
    tagline: "The Explorer",
    blurb: "Adventurous, brave, and curious, Leo brings fun, movement, and big smiles to every song.",
    image: "/images/characters/leo.png",
    imageWidth: 230,
    imageHeight: 1024,
    color: "grass",
  },
  {
    name: "Lily",
    tagline: "The Little Dreamer",
    blurb: "Gentle, sweet, and imaginative, Lily loves stories, nature, and peaceful bedtime tunes.",
    image: "/images/characters/lily.png",
    imageWidth: 170,
    imageHeight: 1024,
    color: "sky",
  },
  {
    name: "Noah",
    tagline: "The Little Thinker",
    blurb: "Curious, clever, and a little silly, Noah enjoys adventures, animals, and sing-along fun.",
    image: "/images/characters/noah.png",
    imageWidth: 316,
    imageHeight: 1024,
    color: "grape",
  },
];

export const albums: {
  title: string;
  subtitle: string;
  image: string;
  spotifyUrl: string;
  spotifyEmbedSrc: string;
  appleMusicUrl?: string;
  appleMusicEmbedSrc?: string;
}[] = [
  {
    title: "Full Album Vol. 1",
    subtitle: "Sam's Happy Kids Sing-Along",
    image: "/images/album-sing-along-vol-1.png",
    spotifyUrl: "https://open.spotify.com/album/0rmU5xaXYwpnfGi3xbvwOU",
    spotifyEmbedSrc: "https://open.spotify.com/embed/album/0rmU5xaXYwpnfGi3xbvwOU?utm_source=generator",
    appleMusicUrl: "https://music.apple.com/in/album/sams-happy-kids-sing-along/6804042849",
    appleMusicEmbedSrc: "https://embed.music.apple.com/in/album/sams-happy-kids-sing-along/6804042849",
  },
  {
    title: "Full Album Vol. 2",
    subtitle: "Sam's Happy Kids Nursery Rhymes",
    image: "/images/album-nursery-rhymes-vol-2.png",
    spotifyUrl: "https://open.spotify.com/album/7bPHPLL8LmAJ4ZiJ7eMCNr",
    spotifyEmbedSrc: "https://open.spotify.com/embed/album/7bPHPLL8LmAJ4ZiJ7eMCNr?utm_source=generator",
    appleMusicUrl: "https://music.apple.com/in/album/sams-happy-kids-nursery-rhymes-vol-2/6804828491",
    appleMusicEmbedSrc: "https://embed.music.apple.com/in/album/sams-happy-kids-nursery-rhymes-vol-2/6804828491",
  },
];

export const platforms: { name: string; color: ColorKey }[] = [
  { name: "YouTube", color: "coral" },
  { name: "Spotify", color: "grass" },
  { name: "Amazon Music", color: "sky" },
  { name: "Apple Music", color: "grape" },
  { name: "iTunes", color: "sunny" },
];
