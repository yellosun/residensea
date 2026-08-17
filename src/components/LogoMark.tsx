export default function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="48" fill="var(--color-sea-deep)" />
      <path
        d="M68,16
           C73,23 78,29 78,35
           C78,41.5 73.5,46 68,46
           C62.5,46 58,41.5 58,35
           C58,29 63,23 68,16 Z"
        fill="var(--color-terracotta)"
      />
      <path
        d="M12,60
           C18,48 26,46 32,52
           C36,56 40,58 44,54
           C48,48 56,46 62,52
           C66,56 72,58 78,52
           C80,50 82,49 84,50
           C80,58 72,62 64,58
           C58,55 54,52 50,56
           C46,60 38,62 32,58
           C26,54 20,52 14,58
           C13,59 12,60 12,60 Z"
        fill="var(--color-sand-light)"
      />
    </svg>
  );
}
