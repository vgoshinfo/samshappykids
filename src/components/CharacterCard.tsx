import Image from "next/image";
import { colorClasses } from "@/lib/colors";
import type { ColorKey } from "@/lib/data";

type CharacterCardProps = {
  name: string;
  tagline: string;
  blurb: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  color: ColorKey;
};

export default function CharacterCard({
  name,
  tagline,
  blurb,
  image,
  imageWidth,
  imageHeight,
  color,
}: CharacterCardProps) {
  const c = colorClasses[color];

  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`flex h-64 w-full items-center justify-center overflow-hidden rounded-3xl ring-4 ring-white shadow-lg ${c.bgSoft}`}
      >
        <Image
          src={image}
          alt={name}
          width={imageWidth}
          height={imageHeight}
          className="h-full w-auto object-contain"
        />
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-ink">{name}</h3>
      <span className={`mt-1 rounded-full px-3 py-0.5 text-xs font-semibold ${c.bgSoft} ${c.text}`}>
        {tagline}
      </span>
      <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-ink/70">{blurb}</p>
    </div>
  );
}
