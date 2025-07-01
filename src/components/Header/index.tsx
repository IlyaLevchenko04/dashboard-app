import { twMerge } from 'tailwind-merge';
type HeadingEl = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
  as?: HeadingEl;
}

export const Header = ({ as: Component = 'h1', className, children }: HeaderProps) => (
  <Component className={twMerge('!mb-[24px] font-bold', className)}>
    {children}
  </Component>
);
