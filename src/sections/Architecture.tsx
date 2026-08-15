import { ArrowDown } from 'lucide-react';
import { architectureCards, architectureFlow } from '../data/profile';
import { Reveal } from '../components/Reveal';
import './Architecture.css';

export function Architecture() {
  return (
    <section id="architecture" className="section architecture" aria-labelledby="arch-title">
      <div className="container">
        <Reveal>
          <header className="section-header">
            <p className="section-eyebrow">Engineering &amp; Architecture</p>
            <h2 id="arch-title" className="section-title">
              Conceptual technology architecture
            </h2>
            <p className="section-subtitle">
              A conceptual view of how client traffic flows through APIs, services, messaging, cache, data, and cloud delivery—representing expertise across these layers, not a single deployed system.
            </p>
          </header>
        </Reveal>

        <Reveal delay={1}>
          <div className="arch-flow glass-card" aria-label="Architecture flow diagram">
            <ol className="arch-flow__list">
              {architectureFlow.map((node, index) => (
                <li key={node} className="arch-flow__node">
                  <div className="arch-flow__box">
                    <span className="arch-flow__index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="arch-flow__label">{node}</span>
                  </div>
                  {index < architectureFlow.length - 1 && (
                    <span className="arch-flow__arrow" aria-hidden="true">
                      <ArrowDown size={16} />
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <div className="arch-cards">
          {architectureCards.map((card, i) => (
            <Reveal key={card.title} delay={(Math.min((i % 4) + 1, 4) as 1 | 2 | 3 | 4)}>
              <article className="arch-card glass-card">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
