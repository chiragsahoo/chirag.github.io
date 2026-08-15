import { useState } from 'react';
import { techStack } from '../data/profile';
import { Reveal } from '../components/Reveal';
import './TechStack.css';

const PROMINENT = new Set(['.NET Core', 'ASP.NET Core', 'Spring Boot', 'Rust', 'C#']);

export function TechStack() {
  const [active, setActive] = useState(techStack[0].id);
  const current = techStack.find((c) => c.id === active) ?? techStack[0];

  return (
    <section id="tech" className="section tech" aria-labelledby="tech-title">
      <div className="container">
        <Reveal>
          <header className="section-header">
            <p className="section-eyebrow">Technology Ecosystem</p>
            <h2 id="tech-title" className="section-title">
              Multi-technology backend capability
            </h2>
            <p className="section-subtitle">
              Strong emphasis on .NET, Spring Boot, and Rust—backed by cloud, messaging, and data platforms.
            </p>
          </header>
        </Reveal>

        <Reveal delay={1}>
          <div className="tech__tabs" role="tablist" aria-label="Technology categories">
            {techStack.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={active === cat.id}
                className={`tech__tab ${active === cat.id ? 'tech__tab--active' : ''} ${cat.highlight ? 'tech__tab--highlight' : ''}`}
                onClick={() => setActive(cat.id)}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div
            className="tech__panel glass-card"
            role="tabpanel"
            aria-label={current.title}
          >
            <h3 className="tech__panel-title">{current.title}</h3>
            <ul className="tech__items">
              {current.items.map((item) => (
                <li
                  key={item}
                  className={`tech__item ${PROMINENT.has(item) ? 'tech__item--prominent' : ''}`}
                >
                  <span className="tech__item-dot" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={3}>
          <div className="tech__all" aria-label="All technologies overview">
            {techStack.map((cat) => (
              <div key={cat.id} className="tech__group">
                <h4>{cat.title}</h4>
                <div className="tech__chips">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className={`tech__chip ${PROMINENT.has(item) ? 'tech__chip--prominent' : ''}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
