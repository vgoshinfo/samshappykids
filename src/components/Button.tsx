import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-coral text-white hover:bg-coral-dark shadow-md shadow-coral/30",
  secondary:
    "bg-sunny text-ink hover:bg-sunny-dark shadow-md shadow-sunny/30",
  outline:
    "bg-white text-ink border-2 border-ink/15 hover:border-coral hover:text-coral-dark",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 font-display text-base font-semibold tracking-wide transition-colors duration-200 ${variantClasses[variant]}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
