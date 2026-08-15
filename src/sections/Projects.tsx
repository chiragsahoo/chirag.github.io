import { useState } from 'react';
import { projectCategories } from '../data/profile';
import { Reveal } from '../components/Reveal';
import './Projects.css';

export function Projects() {
  const [active, setActive] = useState(projectCategories[0].id);
  const category =
    projectCategories.find((c) => c.id === active) ?? projectCategories[0];

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
          <header className="section-header">
            <p className="section-eyebrow">Projects</p>
            <h2 id="projects-title" className="section-title">
              Domains &amp; platforms delivered
            </h2>
            <p className="section-subtitle">
              High-level project areas across FinTech payments and government/enterprise platforms—without confidential implementation details.
            </p>
          </header>
        </Reveal>

        <Reveal delay={1}>
          <div className="projects__tabs" role="tablist" aria-label="Project categories">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={active === cat.id}
                className={`projects__tab ${active === cat.id ? 'projects__tab--active' : ''}`}
                onClick={() => setActive(cat.id)}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="projects__grid" role="tabpanel" aria-label={category.title}>
          {category.projects.map((project, i) => (
            <Reveal key={project.name} delay={(Math.min((i % 4) + 1, 4) as 1 | 2 | 3 | 4)}>
              <article className="project-card glass-card">
                <div className="project-card__top">
                  <h3>{project.name}</h3>
                  <span className="project-card__domain">{project.domain}</span>
                </div>
                <p>{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
