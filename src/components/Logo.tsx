interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const heightClass =
    size === 'sm' ? 'h-10' : size === 'lg' ? 'h-14' : 'h-12';

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="/nath_logo.png"
        alt="Nath Communications"
        className={`${heightClass} w-auto object-contain`}
      />
    </div>
  );
}