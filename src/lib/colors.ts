import type { ColorKey } from "./data";

export const colorClasses: Record<
  ColorKey,
  { bg: string; bgSoft: string; text: string; border: string }
> = {
  sunny: {
    bg: "bg-sunny",
    bgSoft: "bg-sunny/15",
    text: "text-sunny-dark",
    border: "border-sunny",
  },
  sky: {
    bg: "bg-sky",
    bgSoft: "bg-sky/15",
    text: "text-sky-dark",
    border: "border-sky",
  },
  coral: {
    bg: "bg-coral",
    bgSoft: "bg-coral/15",
    text: "text-coral-dark",
    border: "border-coral",
  },
  grass: {
    bg: "bg-grass",
    bgSoft: "bg-grass/15",
    text: "text-grass-dark",
    border: "border-grass",
  },
  grape: {
    bg: "bg-grape",
    bgSoft: "bg-grape/15",
    text: "text-grape-dark",
    border: "border-grape",
  },
};
