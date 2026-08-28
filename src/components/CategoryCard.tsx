import { colorClasses } from "@/lib/colors";
import type { ColorKey } from "@/lib/data";

type CategoryCardProps = {
  title: string;
  blurb: string;
  emoji: string;
  color: ColorKey;
};

export default function CategoryCard({ title, blurb, emoji, color }: CategoryCardProps) {
  const c = colorClasses[color];

  return (
    <div
      className={`rounded-3xl border-2 ${c.border}/30 bg-white p-6 transition-transform hover:-translate-y-1`}
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${c.bgSoft}`}
      >
        {emoji}
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/70">{blurb}</p>
    </div>
  );
}
