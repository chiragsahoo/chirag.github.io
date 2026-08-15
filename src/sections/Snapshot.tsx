import { snapshotMetrics } from '../data/profile';
import { Reveal } from '../components/Reveal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';
import './Snapshot.css';

function MetricValue({
  value,
  animate,
  visible,
}: {
  value: string;
  animate: boolean;
  visible: boolean;
}) {
  const numeric = animate ? parseInt(value, 10) : 0;
  const count = useCountUp(
    Number.isFinite(numeric) ? numeric : 0,
    visible && animate,
  );

  if (animate) {
    return (
      <span className="snapshot__value">
        {count}
        <span className="snapshot__plus">+</span>
      </span>
    );
  }

  return <span className="snapshot__value snapshot__value--text">{value}</span>;
}

export function Snapshot() {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="snapshot"
      className="section snapshot"
      ref={ref}
      aria-labelledby="snapshot-title"
    >
      <div className="container">
        <Reveal variant="blur">
          <header className="section-header">
            <p className="section-eyebrow">Professional Snapshot</p>
            <h2 id="snapshot-title" className="section-title">
              Experience at a glance
            </h2>
            <p className="section-subtitle">
              A concise view of leadership tenure, domain depth, and engineering
              focus.
            </p>
          </header>
        </Reveal>

        <div className="snapshot__grid">
          {snapshotMetrics.map((metric, i) => (
            <Reveal
              key={metric.description}
              delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}
              variant="scale"
            >
              <article className="snapshot__card glass-card">
                <MetricValue
                  value={metric.value}
                  animate={metric.animate}
                  visible={visible}
                />
                <p className="snapshot__label">{metric.label}</p>
                <p className="snapshot__desc">{metric.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
