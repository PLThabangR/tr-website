type HeroBackgroundProps = {
  variant: "ai" | "analytics" | "development" | "managed";
};

export function HeroBackground({ variant }: HeroBackgroundProps) {
  const backgrounds = {
    ai: "bg-[radial-gradient(ellipse_at_78%_25%,rgba(222,171,95,0.14),transparent_45%)]",

    analytics:
      "bg-[radial-gradient(ellipse_at_75%_30%,rgba(222,171,95,0.09),transparent_45%)]",

    development:
      "bg-[radial-gradient(ellipse_at_25%_30%,rgba(222,171,95,0.10),transparent_45%)]",

    managed:
      "bg-[radial-gradient(ellipse_at_50%_20%,rgba(222,171,95,0.08),transparent_45%)]",
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 ${backgrounds[variant]}`}
    >
      <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:48px_48px]" />
    </div>
  );
}
