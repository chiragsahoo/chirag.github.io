import { useState } from 'react';
import { architectureCards, architectureNodes } from '../data/profile';
import { Reveal } from '../components/Reveal';
import './Architecture.css';

export function Architecture() {
  const [active, setActive] = useState<string>(architectureNodes[0].id);
  const current =
    architectureNodes.find((n) => n.id === active) ?? architectureNodes[0];

  return (
    <section
      id="architecture"
      className="section architecture"
      aria-labelledby="arch-title"
    >
      <div className="container">
        <Reveal variant="blur">
          <header className="section-header">
            <p className="section-eyebrow">Engineering &amp; Architecture</p>
            <h2 id="arch-title" className="section-title">
              Conceptual technology architecture
            </h2>
            <p className="section-subtitle">
              A conceptual representation of technical expertise across APIs,
              services, messaging, cache, data, and cloud delivery—not a claim
              that every technology was used together in one project.
            </p>
          </header>
        </Reveal>

        <Reveal delay={1} variant="scale">
          <div className="arch-flow glass-card">
            <div className="arch-flow__track" aria-label="Architecture flow diagram">
              {architectureNodes.map((node, index) => (
                <div key={node.id} className="arch-flow__item">
                  <button
                    type="button"
                    className={`arch-flow__box ${active === node.id ? 'arch-flow__box--active' : ''}`}
                    onMouseEnter={() => setActive(node.id)}
                    onFocus={() => setActive(node.id)}
                    aria-pressed={active === node.id}
                  >
                    <span className="arch-flow__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="arch-flow__label">{node.label}</span>
                    <span className="arch-flow__packet" aria-hidden="true" />
                  </button>
                  {index < architectureNodes.length - 1 && (
                    <span className="arch-flow__connector" aria-hidden="true">
                      <span className="arch-flow__dot" />
                    </span>
                  )}
                </div>
              ))}
            </div>

            <aside className="arch-flow__detail" aria-live="polite">
              <h3>{current.label}</h3>
              <p>{current.detail}</p>
            </aside>
          </div>
        </Reveal>

        <div className="arch-cards">
          {architectureCards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={(Math.min((i % 4) + 1, 4) as 1 | 2 | 3 | 4)}
              variant={i % 2 === 0 ? 'left' : 'right'}
            >
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
