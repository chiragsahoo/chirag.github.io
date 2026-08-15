import { MapPin, Briefcase, Layers } from 'lucide-react';
import { profile } from '../data/profile';
import { Reveal } from '../components/Reveal';
import './About.css';

export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__layout">
        <Reveal>
          <header className="section-header">
            <p className="section-eyebrow">About</p>
            <h2 id="about-title" className="section-title">
              Hands-on Tech Lead. Senior Backend Engineer.
            </h2>
          </header>
        </Reveal>

        <div className="about__content">
          <Reveal delay={1}>
            <div className="about__identity glass-card">
              <p className="about__lead">{profile.identity}</p>
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
              <Reveal key={para.slice(0, 24)} delay={(Math.min(i + 2, 4) as 1 | 2 | 3 | 4)}>
                <p>{para}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={2}>
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
