// Shared, reusable card. Used more than once, so editing it has a blast radius — the
// Visual UI Editor warns before touching it.

export default function StatCard({ title, meta }: { title: string; meta: string }) {
  return (
    <article className="card">
      <h3 className="card-title" style={{ color: 'black' }}>{title}</h3>
      <p className="card-meta">{meta}</p>
    </article>
  );
}
