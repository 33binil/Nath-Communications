interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export function Logo({
  variant = 'light',
  size = 'md',
  showTagline = true,
  className = '',
}: LogoProps) {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Red Ribbon 'N' Logo Mark matching screenshot */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 36 36"
          className="w-8 h-8 sm:w-9 sm:h-9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stylized Red Folded Ribbon N */}
          <path
            d="M6 28V8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8V23.5L24.5 6.8C25.2 6.0 26.3 5.7 27.2 6.1C28.2 6.6 28.8 7.6 28.8 8.7V28C28.8 29.1046 27.9046 30 26.8 30C25.6954 30 24.8 29.1046 24.8 28V12.5L10.3 29.2C9.6 30.0 8.5 30.3 7.6 29.9C6.6 29.4 6 28.4 6 28Z"
            fill="#E02424"
          />
          <path
            d="M9.5 24.5L25.5 6.5C26.5 5.5 28.5 6.2 28.5 7.8V14L13.5 30C11.5 31 9.5 29 9.5 24.5Z"
            fill="#C81E1E"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col">
        <span
          className={`font-bold tracking-tight leading-tight ${
            size === 'sm'
              ? 'text-base'
              : size === 'lg'
              ? 'text-2xl'
              : 'text-lg sm:text-[1.18rem]'
          } ${isDark ? 'text-white' : 'text-slate-900'}`}
        >
          Nath Digital Hub
        </span>
        {showTagline && (
          <span
            className={`font-medium tracking-[0.14em] uppercase ${
              size === 'sm' ? 'text-[7.5px]' : 'text-[8.5px] sm:text-[9px]'
            } ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
          >
            TECH FOR A BETTER TOMORROW
          </span>
        )}
      </div>
    </div>
  );
}

