interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-widest ${
            light ? "text-vanille" : "text-rotbraun"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-off-white" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-creme/90" : "text-text-muted"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-rotbraun via-vanille to-rotbraun ${
          centered ? "mx-auto" : ""
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
