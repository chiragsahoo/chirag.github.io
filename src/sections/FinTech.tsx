import { fintechHighlights } from '../data/profile';
import { Reveal } from '../components/Reveal';
import './FinTech.css';

export function FinTech() {
  return (
    <section id="fintech" className="section fintech" aria-labelledby="fintech-title">
      <div className="fintech__bg" aria-hidden="true">
        <div className="fintech__chart" />
      </div>

      <div className="container fintech__inner">
        <Reveal variant="blur">
          <header className="section-header">
            <p className="section-eyebrow">FinTech</p>
            <h2 id="fintech-title" className="section-title">
              Engineering for Financial Technology
            </h2>
            <p className="section-subtitle">
              Backend engineering across payment rails, banking systems, and
              transaction processing—with microservices, Kafka, and Redis.
            </p>
          </header>
        </Reveal>

        <Reveal delay={1} variant="scale">
          <ul className="fintech__grid">
            {fintechHighlights.map((item) => (
              <li key={item} className="fintech__item glass-card">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
