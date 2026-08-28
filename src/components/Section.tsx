import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  background?: "white" | "cream" | "sky" | "sunny" | "coral" | "grass" | "grape" | "ink";
  className?: string;
};

const backgroundClasses: Record<NonNullable<SectionProps["background"]>, string> = {
  white: "bg-white",
  cream: "bg-cream",
  sky: "bg-sky/10",
  sunny: "bg-sunny/15",
  coral: "bg-coral/10",
  grass: "bg-grass/10",
  grape: "bg-grape/10",
  ink: "bg-ink text-white",
};

export default function Section({
  children,
  background = "white",
  className = "",
}: SectionProps) {
  return (
    <section className={`${backgroundClasses[background]} py-16 sm:py-24`}>
      <div className={`mx-auto max-w-6xl px-6 ${className}`}>{children}</div>
    </section>
  );
}
