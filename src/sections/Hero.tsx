import { ArrowDown, Download, ExternalLink, FolderKanban, User } from 'lucide-react';
import { heroBadges, profile } from '../data/profile';
import { TechBackground } from '../components/TechBackground';
import './Hero.css';

export function Hero() {
  const linkedinConfigured = Boolean(profile.contact.linkedin);

  return (
    <section id="top" className="hero" aria-labelledby="hero-name">
      <TechBackground />
      <div className="hero__inner container">
        <p className="hero__eyebrow hero-anim hero-anim--1">
          <span className="hero__status" aria-hidden="true" />
          Available for Tech Lead &amp; Senior Backend roles
        </p>

        <h1 id="hero-name" className="hero__name hero-anim hero-anim--2">
          {profile.nameDisplay}
        </h1>

        <p className="hero__title hero-anim hero-anim--3">{profile.title}</p>

        <p className="hero__tagline hero-anim hero-anim--4">{profile.tagline}</p>

        <p className="hero__secondary hero-anim hero-anim--5">
          {profile.secondaryLine}
        </p>

        <div className="hero__badges hero-anim hero-anim--6" aria-label="Core technologies">
          {heroBadges.map((badge) => (
            <span key={badge} className="hero__badge">
              {badge}
            </span>
          ))}
        </div>

        <div className="hero__actions hero-anim hero-anim--7">
          <a href="#about" className="btn btn-primary">
            <User className="btn-icon" aria-hidden="true" />
            Explore My Profile
          </a>
          <a href="#projects" className="btn btn-secondary">
            <FolderKanban className="btn-icon" aria-hidden="true" />
            View Projects
          </a>
          <a href={profile.resumePath} className="btn btn-ghost" download>
            <Download className="btn-icon" aria-hidden="true" />
            Download Resume
          </a>
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
            <span className="btn btn-ghost btn--disabled" title="Add LinkedIn URL in src/data/profile.ts">
              LinkedIn
            </span>
          )}
        </div>

        <a href="#snapshot" className="hero__scroll" aria-label="Scroll to snapshot">
          <ArrowDown size={18} />
          <span>Scroll</span>
        </a>
      </div>
    </section>
  );
}
