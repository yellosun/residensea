function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="var(--color-terracotta)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function HistoryIcon() {
  return (
    <IconWrap>
      <path d="M4,7 C7,5.5 11,5.5 14,7 C17,5.5 21,5.5 24,7 L24,21 C21,19.5 17,19.5 14,21 C11,19.5 7,19.5 4,21 Z" />
      <path d="M14,7 L14,21" />
    </IconWrap>
  );
}

export function StorefrontIcon() {
  return (
    <IconWrap>
      <path d="M4,12 L14,5 L24,12" />
      <path d="M6,12 L6,22 L22,22 L22,12" />
      <path d="M11,22 L11,16 L17,16 L17,22" />
    </IconWrap>
  );
}

export function ShellIcon() {
  return (
    <IconWrap>
      <path d="M14,21 C9.5,21 7,17.8 7,14.2 C7,10 10.3,7 14,7 C17.7,7 20,9.7 20,12.7 C20,15.2 18,16.7 15.7,16.7 C13.6,16.7 12.3,15.4 12.3,13.7" />
    </IconWrap>
  );
}

export function GiveBackIcon() {
  return (
    <IconWrap>
      <path d="M6,12 L22,12 L22,23 L6,23 Z" />
      <path d="M6,12 L6,8 L22,8 L22,12" />
      <path d="M14,8 C14,8 12,4.3 9,5.2 C7,5.8 7.2,8 9,8" />
      <path d="M14,8 C14,8 16,4.3 19,5.2 C21,5.8 20.8,8 19,8" />
      <path d="M14,8 L14,23" />
    </IconWrap>
  );
}
