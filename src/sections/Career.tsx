import { careerTimeline } from '../data/profile';
import { Reveal } from '../components/Reveal';
import './Career.css';

export function Career() {
  return (
    <section id="career" className="section career" aria-labelledby="career-title">
      <div className="container">
        <Reveal>
          <header className="section-header">
            <p className="section-eyebrow">Experience</p>
            <h2 id="career-title" className="section-title">
              From engineer to Tech Lead
            </h2>
            <p className="section-subtitle">
              A progressive path through banking, FinTech payments, and enterprise
              platforms—culminating in hands-on technical leadership.
            </p>
          </header>
        </Reveal>

        <div className="timeline" role="list">
          {careerTimeline.map((entry, index) => (
            <Reveal
              key={entry.id}
              delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}
              variant={index % 2 === 0 ? 'left' : 'right'}
            >
              <article className="timeline__item" role="listitem">
                <div className="timeline__rail" aria-hidden="true">
                  <span className="timeline__dot" />
                  {index < careerTimeline.length - 1 && (
                    <span className="timeline__line" />
                  )}
                </div>

                <div className="timeline__card glass-card">
                  <div className="timeline__header">
                    <div>
                      <h3 className="timeline__company">{entry.company}</h3>
                      <p className="timeline__role">{entry.role}</p>
                    </div>
                    <div className="timeline__meta">
                      <span className="timeline__period">{entry.period}</span>
                      <span className="timeline__domain">{entry.domain}</span>
                    </div>
                  </div>

                  <div className="timeline__body">
                    <div>
                      <h4>Focus</h4>
                      <ul className="timeline__tags">
                        {entry.focus.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {entry.technologies && (
                      <div>
                        <h4>Technologies</h4>
                        <div className="timeline__chips">
                          {entry.technologies.map((tech) => (
                            <span key={tech} className="tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {entry.projects && (
                      <div>
                        <h4>Projects / Domains</h4>
                        <div className="timeline__chips">
                          {entry.projects.map((project) => (
                            <span key={project} className="tag tag-muted">
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
