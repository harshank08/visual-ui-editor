import FeatureCard from "../components/FeatureCard";
import PricingCard from "../components/PricingCard";

export default function Landing() {
  return (
    <>
      <section className="hero">
        <p className="hero-kicker">New in 2026</p>
        <h2 className="hero-heading">Ship polished UI without leaving the browser</h2>
        <p className="hero-sub">
          Acme turns your live app into an editable canvas. Point, tweak, and commit —
          every change maps straight back to your source.
        </p>
        <div className="hero-actions">
          <button className="cta">Start free trial</button>
          <button className="cta cta-ghost">Watch demo</button>
        </div>
      </section>

      <section className="features">
        {/* FeatureCard is reused → blast-radius demo when you edit FeatureCard.tsx */}
        <FeatureCard
          glyph="🎯"
          title="Pixel-precise selection"
          description="Click any element and jump to the exact line of source that renders it."
        />
        <FeatureCard
          glyph="⚡"
          title="Instant live edits"
          description="Change copy, spacing and color in place — no rebuild, no context switch."
        />
        <FeatureCard
          glyph="🛡️"
          title="Blast-radius safety"
          description="Shared components warn you before a single tweak ripples across the app."
        />
      </section>

      <section className="pricing">
        <p className="hero-kicker">Pricing</p>
        <h2 className="section-heading">Plans that scale with your team</h2>
        <div className="pricing-grid">
          {/* PricingCard is reused → blast-radius demo when you edit PricingCard.tsx */}
          <PricingCard
            tier="Starter"
            price="$0"
            cadence="/mo"
            features={["1 project", "Community support", "Basic inspector"]}
            cta="Get started"
          />
          <PricingCard
            tier="Team"
            price="$24"
            cadence="/mo"
            features={["Unlimited projects", "Priority support", "Blast-radius warnings", "Shared presets"]}
            cta="Choose Team"
            highlighted
          />
          <PricingCard
            tier="Enterprise"
            price="Custom"
            cadence=""
            features={["SSO & audit logs", "Dedicated success manager", "On-prem option"]}
            cta="Contact sales"
          />
        </div>
      </section>

      <section className="testimonial">
        <blockquote className="quote">
          “We cut our design-to-merge time in half. Editing the running app and having it
          land in the right file still feels like magic.”
        </blockquote>
        <p className="quote-author">Jordan Rivera · Head of Design, Northwind</p>
      </section>

      <section className="footer-cta">
        <h2 className="section-heading section-heading--edited">Ready to edit your UI in place?</h2>
        <p className="hero-sub">Join thousands of teams shipping faster with Acme.</p>
        <button className="cta">Create your workspace</button>
      </section>
    </>
  );
}
