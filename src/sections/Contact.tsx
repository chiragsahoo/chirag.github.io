import { Mail, Phone, Linkedin } from 'lucide-react';
// import { Github } from 'lucide-react'; // Hidden for now
import { profile } from '../data/profile';
import { Reveal } from '../components/Reveal';
import './Contact.css';

export function Contact() {
  const { email, phone, linkedin } = profile.contact;
  // const { github } = profile.contact; // Hidden for now

  const items = [
    {
      id: 'email',
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      icon: Mail,
      configured: true,
    },
    {
      id: 'phone',
      label: 'Phone',
      value: phone,
      href: `tel:${phone.replace(/\s+/g, '')}`,
      icon: Phone,
      configured: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/chiragsahoo',
      href: linkedin,
      icon: Linkedin,
      configured: true,
      external: true,
    },
    // {
    //   id: 'github',
    //   label: 'GitHub',
    //   value: github || 'Add GitHub URL in profile.ts',
    //   href: github || undefined,
    //   icon: Github,
    //   configured: Boolean(github),
    //   external: true,
    // },
  ] as const;

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="contact__network" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <header className="section-header">
            <p className="section-eyebrow">Contact</p>
            <h2 id="contact-title" className="section-title">
              Let&apos;s connect
            </h2>
            <p className="section-subtitle">
              Open to Tech Lead, Senior Backend, and architecture-focused conversations.
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
                <span className="contact__value">
                  {item.id === 'linkedin' ? 'View LinkedIn Profile' : item.value}
                </span>
              </>
            );

            return (
              <Reveal key={item.id} delay={(Math.min(i + 1, 4) as 1 | 2 | 3 | 4)}>
                <a
                  href={item.href}
                  className="contact__card glass-card"
                  {...('external' in item && item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {content}
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
