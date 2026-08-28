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

export const characters: { name: string; blurb: string; emoji: string; color: ColorKey }[] = [
  {
    name: "Sam",
    blurb: "The cheerful leader who loves music, friendship, and helping everyone sing along.",
    emoji: "🦁",
    color: "sunny",
  },
  {
    name: "Mia",
    blurb: "Sweet, bright, and full of kindness, Mia loves melodies, colors, and happy little moments.",
    emoji: "🌸",
    color: "coral",
  },
  {
    name: "Leo",
    blurb: "Playful and energetic, Leo brings fun, movement, and big smiles to every song.",
    emoji: "🐵",
    color: "grass",
  },
  {
    name: "Lily",
    blurb: "Gentle and curious, Lily loves stories, nature, and peaceful bedtime tunes.",
    emoji: "🦋",
    color: "sky",
  },
  {
    name: "Noah",
    blurb: "Friendly and imaginative, Noah enjoys adventures, animals, and silly sing-along fun.",
    emoji: "🦊",
    color: "grape",
  },
];

export const platforms: { name: string; color: ColorKey }[] = [
  { name: "YouTube", color: "coral" },
  { name: "Spotify", color: "grass" },
  { name: "Amazon Music", color: "sky" },
  { name: "Apple Music", color: "grape" },
  { name: "iTunes", color: "sunny" },
];
