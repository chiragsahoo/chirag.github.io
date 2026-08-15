import { GlowOrb } from './GlowOrb';
import { usePrefersReducedMotion } from '../../hooks/useMedia';
import './AnimatedBackground.css';

type Props = {
  variant?: 'global' | 'hero' | 'section';
  className?: string;
};

/** Lightweight background — gradient + soft orbs only (no particles/RAF). */
export function AnimatedBackground({
  variant = 'global',
  className = '',
}: Props) {
  const reduced = usePrefersReducedMotion();

  return (
    <div
      className={`fx-bg fx-bg--${variant} ${className}`.trim()}
      aria-hidden="true"
    >
      <div className="fx-bg__gradient" />
      {!reduced && variant === 'global' && (
        <>
          <GlowOrb variant="1" />
          <GlowOrb variant="2" />
        </>
      )}
      <div className="fx-bg__grid" />
      <div className="fx-bg__vignette" />
    </div>
  );
}
