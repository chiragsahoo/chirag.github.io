import './GlowOrb.css';

type Props = {
  variant?: '1' | '2' | '3';
  className?: string;
};

export function GlowOrb({ variant = '1', className = '' }: Props) {
  return (
    <div
      className={`fx-orb fx-orb--${variant} ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
