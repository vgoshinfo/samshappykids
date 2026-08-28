import { colorClasses } from "@/lib/colors";
import type { ColorKey } from "@/lib/data";

type SongCardProps = {
  title: string;
  blurb: string;
  color: ColorKey;
};

export default function SongCard({ title, blurb, color }: SongCardProps) {
  const c = colorClasses[color];

  return (
    <div className="flex gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/5">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl ${c.bgSoft} ${c.text}`}
      >
        🎶
      </div>
      <div>
        <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink/70">{blurb}</p>
      </div>
    </div>
  );
}
