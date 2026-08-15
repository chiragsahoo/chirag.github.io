import type { ElementType, ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Variant = 'up' | 'left' | 'right' | 'scale' | 'blur';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4 | 5;
  as?: ElementType;
  variant?: Variant;
};

const variantClass: Record<Variant, string> = {
  up: '',
  left: 'reveal--slide-left',
  right: 'reveal--slide-right',
  scale: 'reveal--scale',
  blur: 'reveal--blur',
};

export function Reveal({
  children,
  className = '',
  delay,
  as: Tag = 'div',
  variant = 'up',
}: Props) {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass[variant]} ${visible ? 'visible' : ''} ${delayClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
