type ServiceHeroVisualProps = {
  variant: "ai" | "analytics" | "development" | "managed";
};

const visualContent = {
  ai: {
    label: "INTELLIGENT SYSTEMS",
    code: "AI / 001",
    symbol: "AI",
  },
  analytics: {
    label: "DATA INTELLIGENCE",
    code: "DATA / 002",
    symbol: "D",
  },
  development: {
    label: "SOFTWARE ENGINEERING",
    code: "DEV / 003",
    symbol: "01",
  },
  managed: {
    label: "SYSTEM OPERATIONS",
    code: "OPS / 004",
    symbol: "∞",
  },
};

export function ServiceHeroVisual({ variant }: ServiceHeroVisualProps) {
  const content = visualContent[variant];

  return (
    <div className="relative isolate flex min-h-[420px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#100E0F]">
      {/* Atmospheric lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(222,171,95,0.13),transparent_65%)]" />

      {/* Secondary light */}
      <div className="absolute -right-20 -top-20 size-80 rounded-full bg-[#DEAB5F]/10 blur-[100px]" />

      {/* Outer geometry */}
      <div className="absolute size-[340px] rounded-full border border-[#DEAB5F]/10" />

      <div className="absolute size-[270px] rounded-full border border-[#DEAB5F]/15" />

      <div className="absolute size-[200px] rounded-full border border-[#DEAB5F]/20" />

      {/* Rotated geometry */}
      <div className="absolute size-[300px] rotate-45 border border-white/5" />

      {/* Central visual */}
      <div className="relative z-10 flex size-36 items-center justify-center rounded-full border border-[#DEAB5F]/30 bg-[#100E0F]/80 shadow-[0_0_80px_rgba(222,171,95,0.12)]">
        <span className="font-serif text-5xl text-[#DEAB5F]">
          {content.symbol}
        </span>
      </div>

      {/* Decorative data points */}
      <div className="absolute left-[22%] top-[28%] size-2 rounded-full bg-[#DEAB5F] shadow-[0_0_18px_#DEAB5F]" />

      <div className="absolute bottom-[25%] right-[24%] size-2 rounded-full bg-[#DEAB5F]/70" />

      <div className="absolute right-[30%] top-[22%] size-1.5 rounded-full bg-white/60" />

      {/* Technical labels */}
      <div className="absolute left-7 top-7">
        <p className="text-[10px] tracking-[0.25em] text-[#DEAB5F]">
          {content.label}
        </p>
      </div>

      <div className="absolute bottom-7 right-7">
        <p className="font-mono text-xs text-white/40">{content.code}</p>
      </div>

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />
    </div>
  );
}
