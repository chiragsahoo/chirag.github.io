import {
  Compass,
  Network,
  SearchCode,
  Users,
  ClipboardList,
  ListTodo,
  Lightbulb,
  ShieldCheck,
  Handshake,
} from 'lucide-react';
import { leadershipAreas } from '../data/profile';
import { Reveal } from '../components/Reveal';
import './Leadership.css';

const icons = [
  Compass,
  Network,
  SearchCode,
  Users,
  ClipboardList,
  ListTodo,
  Lightbulb,
  ShieldCheck,
  Handshake,
];

export function Leadership() {
  return (
    <section id="leadership" className="section leadership" aria-labelledby="leadership-title">
      <div className="container">
        <Reveal>
          <header className="section-header leadership__header">
            <p className="section-eyebrow">Technical Leadership</p>
            <h2 id="leadership-title" className="section-title">
              Leading with architecture and execution
            </h2>
            <p className="section-subtitle">
              Hands-on leadership across technical direction, design, mentoring, delivery planning, and production ownership.
            </p>
          </header>
        </Reveal>

        <div className="leadership__grid">
          {leadershipAreas.map((area, i) => {
            const Icon = icons[i] ?? Compass;
            return (
              <Reveal key={area.title} delay={(Math.min((i % 4) + 1, 4) as 1 | 2 | 3 | 4)}>
                <article className="leadership__card glass-card">
                  <div className="leadership__icon" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
