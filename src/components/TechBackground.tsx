import './TechBackground.css';

export function TechBackground() {
  return (
    <div className="tech-bg" aria-hidden="true">
      <div className="tech-bg__grid" />
      <div className="tech-bg__glow tech-bg__glow--1" />
      <div className="tech-bg__glow tech-bg__glow--2" />
      <div className="tech-bg__glow tech-bg__glow--3" />
      <div className="tech-bg__particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className={`tech-bg__dot tech-bg__dot--${i + 1}`} />
        ))}
      </div>
      <div className="tech-bg__scan" />
    </div>
  );
}
