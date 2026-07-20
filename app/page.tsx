import StatCard from "./components/StatCard";

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="hero-kicker">Welcome back, User</p>
        <h2 className="hero-heading">Your Projects at a Glance</h2>
        <p className="hero-sub">Track spend, status and deadlines across every workstream with real-time insights.</p>
        <div className="hero-actions">
          <button className="cta">Create new project</button>
          <button className="cta cta-ghost">View all projects</button>
        </div>
      </section>

      <section className="stats-overview">
        <h3 className="section-subheading">Active Projects</h3>
        <div className="cards">
          {/* Same component used twice → blast-radius demo when you edit StatCard.tsx */}
          <StatCard title="Project Alpha" meta="On track · due in 4 days" />
          <StatCard title="Project Beta" meta="At risk · due tomorrow" />
        </div>
      </section>
    </>
  );
}
