type Props = { index?: string; eyebrow: string; title: string; copy?: string };
export function SectionHeading({ index, eyebrow, title, copy }: Props) {
  return <div className="mb-12 grid gap-5 md:grid-cols-[110px_1fr]">
    <span className="section-index pt-2">{index} / {eyebrow}</span>
    <div><h2 className="max-w-3xl">{title}</h2>{copy && <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary">{copy}</p>}</div>
  </div>;
}