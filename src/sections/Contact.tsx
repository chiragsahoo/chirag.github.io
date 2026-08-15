import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { profile } from '../data/profile';
import { Reveal } from '../components/Reveal';
import './Contact.css';

export function Contact() {
  const { email, phone, linkedin, github } = profile.contact;

  const items = [
    {
      id: 'email',
      label: 'Email',
      value: email || 'Add email in profile.ts',
      href: email ? `mailto:${email}` : undefined,
      icon: Mail,
      configured: Boolean(email),
    },
    {
      id: 'phone',
      label: 'Phone',
      value: phone || 'Add phone in profile.ts',
      href: phone ? `tel:${phone.replace(/\s+/g, '')}` : undefined,
      icon: Phone,
      configured: Boolean(phone),
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: linkedin || 'Add LinkedIn URL in profile.ts',
      href: linkedin || undefined,
      icon: Linkedin,
      configured: Boolean(linkedin),
      external: true,
    },
    {
      id: 'github',
      label: 'GitHub',
      value: github || 'Add GitHub URL in profile.ts',
      href: github || undefined,
      icon: Github,
      configured: Boolean(github),
      external: true,
    },
  ] as const;

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <header className="section-header">
            <p className="section-eyebrow">Contact</p>
            <h2 id="contact-title" className="section-title">
              Let&apos;s connect
            </h2>
            <p className="section-subtitle">
              Open to Tech Lead, Senior Backend, and architecture-focused conversations. Update contact placeholders in{' '}
              <code>src/data/profile.ts</code>.
            </p>
          </header>
        </Reveal>

        <div className="contact__grid">
          {items.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <>
                <span className="contact__icon" aria-hidden="true">
                  <Icon size={20} />
                </span>
                <span className="contact__label">{item.label}</span>
                <span className={`contact__value ${item.configured ? '' : 'contact__value--placeholder'}`}>
                  {item.configured && item.id === 'linkedin'
                    ? 'View LinkedIn Profile'
                    : item.configured && item.id === 'github'
                      ? 'View GitHub Profile'
                      : item.value}
                </span>
              </>
            );

            return (
              <Reveal key={item.id} delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="contact__card glass-card"
                    {...('external' in item && item.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {content}
                  </a>
                ) : (
                  <div className="contact__card glass-card contact__card--inactive">
                    {content}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
