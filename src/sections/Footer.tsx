import { Linkedin, Github } from 'lucide-react';
import { profile } from '../data/profile';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{profile.nameDisplay}</p>
          <p className="footer__title">{profile.title}</p>
          <p className="footer__quote">&ldquo;{profile.footerQuote}&rdquo;</p>
        </div>

        <div className="footer__meta">
          <p className="footer__location">{profile.location}</p>
          <div className="footer__socials">
            {profile.contact.linkedin ? (
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            ) : (
              <span className="footer__social-disabled" title="Add LinkedIn in profile.ts" aria-hidden="true">
                <Linkedin size={18} />
              </span>
            )}
            {profile.contact.github ? (
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            ) : (
              <span className="footer__social-disabled" title="Add GitHub in profile.ts" aria-hidden="true">
                <Github size={18} />
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>© {year} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
