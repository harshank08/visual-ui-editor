// Reusable pricing tier. Used more than once on the landing page, so editing it has a
// blast radius — the Visual UI Editor warns before touching it.

export default function PricingCard({
  tier,
  price,
  cadence,
  features,
  cta,
  highlighted = false,
}: {
  tier: string;
  price: string;
  cadence: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}) {
  return (
    <article className={highlighted ? "price price-featured" : "price"}>
      {highlighted && <span className="price-badge">Most popular</span>}
      <h3 className="price-tier">{tier}</h3>
      <p className="price-amount">
        {price}
        <span className="price-cadence">{cadence}</span>
      </p>
      <ul className="price-list">
        {features.map((f) => (
          <li key={f} className="price-item">
            {f}
          </li>
        ))}
      </ul>
      <button className={highlighted ? "cta" : "cta cta-ghost"}>{cta}</button>
    </article>
  );
}
