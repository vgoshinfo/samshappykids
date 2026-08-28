type WaveDividerProps = {
  color?: "white" | "cream";
  flip?: boolean;
};

export default function WaveDivider({ color = "white", flip = false }: WaveDividerProps) {
  const fill = color === "white" ? "#ffffff" : "#fffdf5";

  return (
    <div
      aria-hidden="true"
      className={`-mt-1 w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="h-10 w-full sm:h-16"
      >
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,32 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
