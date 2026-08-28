import { colorClasses } from "@/lib/colors";
import { platforms } from "@/lib/data";

export default function PlatformRow() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {platforms.map((platform) => {
        const c = colorClasses[platform.color];
        return (
          <span
            key={platform.name}
            className={`rounded-full px-5 py-2 font-display text-sm font-semibold ${c.bgSoft} ${c.text}`}
          >
            {platform.name}
          </span>
        );
      })}
    </div>
  );
}
