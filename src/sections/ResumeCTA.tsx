import { Download, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';
import { Reveal } from '../components/Reveal';
import './ResumeCTA.css';

export function ResumeCTA() {
  const linkedinConfigured = Boolean(profile.contact.linkedin);

  return (
    <section id="resume" className="section resume-cta" aria-labelledby="resume-title">
      <div className="container">
        <Reveal variant="scale">
          <div className="resume-cta__card glass-card">
            <div className="resume-cta__content">
              <p className="section-eyebrow">Next Step</p>
              <h2 id="resume-title" className="section-title">
                Let&apos;s build something impactful.
              </h2>
              <p className="section-subtitle">
                Open to opportunities where technology, architecture and leadership
                come together.
              </p>
              <div className="resume-cta__actions">
                <a href={profile.resumePath} className="btn btn-primary" download>
                  <Download className="btn-icon" aria-hidden="true" />
                  Download Resume
                </a>
                {linkedinConfigured ? (
                  <a
                    href={profile.contact.linkedin}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="btn-icon" aria-hidden="true" />
                    Connect on LinkedIn
                  </a>
                ) : (
                  <span
                    className="btn btn-secondary btn--disabled"
                    title="Add LinkedIn URL in src/data/profile.ts"
                  >
                    Connect on LinkedIn
                  </span>
                )}
              </div>
              <p className="resume-cta__hint">
                PDF available for download
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
