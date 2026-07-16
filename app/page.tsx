import StatCard from "./components/StatCard";

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="hero-kicker">Welcome back</p>
        <h2 className="hero-heading hero-heading--red">Your projects at a Top</h2>
        <p className="hero-sub">Track spend, status and deadlines across every workstream.</p>
        <button className="cta cta--blue">Create new project</button>
      </section>

      <section className="cards">
        {/* Same component used twice → blast-radius demo when you edit StatCard.tsx */}
        <StatCard title="Project Alpha" meta="On track · due in 4 days" />
        <StatCard title="Project Beta" meta="At risk · due tomorrow" />
      </section>
    </>
  );
}
