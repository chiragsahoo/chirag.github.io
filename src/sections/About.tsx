import { MapPin, Briefcase, Layers } from 'lucide-react';
import { leadershipFlow, profile } from '../data/profile';
import { Reveal } from '../components/Reveal';
import './About.css';

export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__layout">
        <Reveal variant="blur">
          <header className="section-header">
            <p className="section-eyebrow">About</p>
            <h2 id="about-title" className="section-title">
              Hands-on Tech Lead. Senior Backend Engineer.
            </h2>
          </header>
        </Reveal>

        <div className="about__content">
          <Reveal delay={1} variant="left">
            <div className="about__identity glass-card">
              <p className="about__lead">
                <span className="highlight-phrase">Hands-on Tech Lead</span> and{' '}
                <span className="highlight-phrase">Senior Backend Engineer</span>{' '}
                specializing in .NET, Microservices, distributed systems, FinTech and
                enterprise applications.
              </p>
              <ul className="about__meta">
                <li>
                  <Briefcase size={16} aria-hidden="true" />
                  <span>
                    {profile.title} · {profile.experience} experience
                  </span>
                </li>
                <li>
                  <MapPin size={16} aria-hidden="true" />
                  <span>{profile.location}</span>
                </li>
                <li>
                  <Layers size={16} aria-hidden="true" />
                  <span>.NET · Microservices · FinTech · Enterprise</span>
                </li>
              </ul>
            </div>
          </Reveal>

          <div className="about__copy">
            {profile.about.map((para, i) => (
              <Reveal
                key={para.slice(0, 24)}
                delay={(Math.min(i + 2, 4) as 1 | 2 | 3 | 4)}
                variant="right"
              >
                <p>{para}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={2} variant="scale">
          <div className="about__flow" aria-label="Leadership to impact flow">
            {leadershipFlow.map((step, index) => (
              <div key={step} className="about__flow-step">
                <span className="about__flow-node">{step}</span>
                {index < leadershipFlow.length - 1 && (
                  <span className="about__flow-line" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={3}>
          <div className="about__roles">
            <p className="about__roles-label">Target roles</p>
            <div className="about__roles-list">
              {profile.targetRoles.map((role) => (
                <span key={role} className="tag tag-muted">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
