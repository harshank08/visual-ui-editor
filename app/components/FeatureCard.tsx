// Reusable feature tile. Used more than once on the landing page, so editing it has a
// blast radius — the Visual UI Editor warns before touching it.

export default function FeatureCard({
  glyph,
  title,
  description,
}: {
  glyph: string;
  title: string;
  description: string;
}) {
  return (
    <article className="feature">
      <span className="feature-glyph" aria-hidden>
        {glyph}
      </span>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc">{description}</p>
    </article>
  );
}
