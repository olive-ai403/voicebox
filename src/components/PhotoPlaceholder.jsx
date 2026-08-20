export default function PhotoPlaceholder({ className }) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="50%" height="50%">
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
        <path
          d="M6 34L17 24L25 31L33 22L42 32"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
