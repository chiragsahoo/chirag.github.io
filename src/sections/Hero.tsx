import { ArrowDown, Download, ExternalLink, FolderKanban, User } from 'lucide-react';
import { heroBadges, heroSupportLine, profile } from '../data/profile';
import './Hero.css';

export function Hero() {
  const linkedinConfigured = Boolean(profile.contact.linkedin);

  return (
    <section id="top" className="hero" aria-labelledby="hero-name">
      <div className="hero__inner container">
        <p className="hero__eyebrow hero-seq hero-seq--1">
          <span className="hero__status" aria-hidden="true" />
          Available for Tech Lead &amp; Senior Backend roles
        </p>

        <h1 id="hero-name" className="hero__name hero-seq hero-seq--2">
          {profile.nameDisplay}
        </h1>

        <div className="hero__title-wrap hero-seq hero-seq--3">
          <p className="hero__title">{profile.title}</p>
          <span className="hero__title-underline" aria-hidden="true" />
        </div>

        <p className="hero__tagline hero-seq hero-seq--4">{profile.tagline}</p>

        <p className="hero__secondary hero-seq hero-seq--5">{heroSupportLine}</p>

        <div
          className="hero__badges hero-seq hero-seq--6"
          aria-label="Core technologies"
        >
          {heroBadges.map((badge) => (
            <span key={badge} className="hero__badge">
              {badge}
            </span>
          ))}
        </div>

        <div className="hero__actions hero-seq hero-seq--7">
          <a href="#about" className="btn btn-primary">
            <User className="btn-icon" aria-hidden="true" />
            Explore My Profile
          </a>
          <a href="#projects" className="btn btn-secondary">
            <FolderKanban className="btn-icon" aria-hidden="true" />
            View Projects
          </a>
          {profile.resumeDownloadEnabled ? (
            <a href={profile.resumePath} className="btn btn-ghost" download>
              <Download className="btn-icon" aria-hidden="true" />
              Download Resume
            </a>
          ) : null}
          {linkedinConfigured ? (
            <a
              href={profile.contact.linkedin}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="btn-icon" aria-hidden="true" />
              LinkedIn
            </a>
          ) : (
            <span
              className="btn btn-ghost btn--disabled"
              title="Add LinkedIn URL in src/data/profile.ts"
            >
              LinkedIn
            </span>
          )}
        </div>
      </div>

      <a href="#snapshot" className="hero__scroll" aria-label="Scroll to snapshot">
        <ArrowDown size={18} />
        <span>Scroll</span>
      </a>
    </section>
  );
}
