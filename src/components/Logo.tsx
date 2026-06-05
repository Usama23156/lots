type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 ${className}`}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="h-9 w-9 shrink-0 sm:h-[38px] sm:w-[38px]"
      >
        <rect width="38" height="38" rx="14" fill="#FAEDCD" />
        <path
          d="M19.2 28.6c1.18-5.28 1.08-9.68-.28-13.2"
          stroke="#3C2F2F"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M18.9 15.3c-3.55-.18-6.02 1.08-7.38 3.78 3.7.32 6.16-.94 7.38-3.78Z"
          fill="#588157"
        />
        <path
          d="M19.1 15.2c.22-3.45-1.02-5.86-3.72-7.22-.38 3.6.86 6.01 3.72 7.22Z"
          fill="#D4A373"
        />
        <path
          d="M19.5 15.2c3.52-.64 6.2.24 8.04 2.66-3.56.8-6.24-.08-8.04-2.66Z"
          fill="#588157"
        />
        <path
          d="M19.4 15.2c1.74-2.95 4.02-4.3 6.84-4.04-1.66 3.16-3.94 4.5-6.84 4.04Z"
          fill="#D4A373"
        />
        <path
          d="M12.2 29.2c3.82-1.72 8.36-1.72 13.6 0"
          stroke="#588157"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-serif text-xl font-semibold tracking-[-0.04em] text-[#3C2F2F] sm:text-2xl">
        PalmLand
      </span>
    </div>
  );
}
