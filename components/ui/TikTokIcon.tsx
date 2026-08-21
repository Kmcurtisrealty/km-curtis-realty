interface TikTokIconProps {
  className?: string;
}

export function TikTokIcon({ className }: TikTokIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.6 5.82c-.9-.98-1.4-2.26-1.4-3.57h-3.15v13.9a2.79 2.79 0 1 1-1.98-2.67v-3.2a5.94 5.94 0 0 0-.8-.05A5.99 5.99 0 1 0 15.27 16V9.4a7.28 7.28 0 0 0 4.25 1.36V7.62a4.85 4.85 0 0 1-2.92-1.8Z" />
    </svg>
  );
}
