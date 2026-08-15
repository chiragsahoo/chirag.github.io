import type { ElementType, ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  as?: ElementType;
};

export function Reveal({
  children,
  className = '',
  delay,
  as: Tag = 'div',
}: Props) {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${delayClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
