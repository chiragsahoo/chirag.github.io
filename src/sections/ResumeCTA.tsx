import { Download, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';
import { Reveal } from '../components/Reveal';
import './ResumeCTA.css';

export function ResumeCTA() {
  const linkedinConfigured = Boolean(profile.contact.linkedin);

  return (
    <section id="resume" className="section resume-cta" aria-labelledby="resume-title">
      <div className="container">
        <Reveal>
          <div className="resume-cta__card glass-card">
            <div className="resume-cta__content">
              <p className="section-eyebrow">Resume</p>
              <h2 id="resume-title" className="section-title">
                Want to know more about my experience?
              </h2>
              <p className="section-subtitle">
                Download the resume or connect on LinkedIn for a deeper look at roles, stack, and delivery focus.
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
                    LinkedIn
                  </a>
                ) : (
                  <span
                    className="btn btn-secondary btn--disabled"
                    title="Add LinkedIn URL in src/data/profile.ts"
                  >
                    LinkedIn
                  </span>
                )}
              </div>
              <p className="resume-cta__hint">
                Place your PDF at <code>public/assets/Chirag-Sahoo-Resume.pdf</code>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
