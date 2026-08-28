import { colorClasses } from "@/lib/colors";
import type { ColorKey } from "@/lib/data";

type CharacterCardProps = {
  name: string;
  tagline: string;
  blurb: string;
  emoji: string;
  color: ColorKey;
};

export default function CharacterCard({
  name,
  tagline,
  blurb,
  emoji,
  color,
}: CharacterCardProps) {
  const c = colorClasses[color];

  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`flex h-28 w-28 items-center justify-center rounded-full text-5xl ring-4 ring-white ${c.bg} shadow-lg`}
      >
        {emoji}
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-ink">{name}</h3>
      <span className={`mt-1 rounded-full px-3 py-0.5 text-xs font-semibold ${c.bgSoft} ${c.text}`}>
        {tagline}
      </span>
      <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-ink/70">{blurb}</p>
    </div>
  );
}
