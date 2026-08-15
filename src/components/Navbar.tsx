import { useEffect, useState } from 'react';
import { Menu, X, Linkedin } from 'lucide-react';
// import { Github } from 'lucide-react'; // Hidden for now
import { navLinks, profile } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import './Navbar.css';

const SECTION_IDS = navLinks.map((l) => l.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#top" className="navbar__brand" onClick={close}>
          <span className="navbar__mark" aria-hidden="true">
            CS
          </span>
          <span className="navbar__brand-text">
            <span className="navbar__name">{profile.name}</span>
            <span className="navbar__role">{profile.title}</span>
          </span>
        </a>

        <nav className="navbar__desktop" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          {profile.contact.linkedin && (
            <a
              href={profile.contact.linkedin}
              className="navbar__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          )}
          {/* GitHub hidden for now
          {profile.contact.github && (
            <a
              href={profile.contact.github}
              className="navbar__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          )}
          */}
          <a
            href={profile.resumePath}
            className="btn btn-secondary navbar__cta"
            download
          >
            Resume
          </a>
          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.id ? 'is-active' : ''}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumePath}
            className="btn btn-primary"
            download
            onClick={close}
          >
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
