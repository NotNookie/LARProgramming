import { Link } from "react-router-dom";

// Larprogramming logo: traced SVG "LP" mark + live wordmark.
// Mark source: /public/logo-mark.svg (transparent, scalable)
// Set `showWordmark={false}` for the mark on its own.
export default function Logo({ height = 40, showWordmark = false, className = "" }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Larprogramming — home"
    >
      <img
        src="/logo-mark.svg"
        alt="Larprogramming"
        style={{ height }}
        className="w-auto select-none"
      />
      {showWordmark && (
        <span className="text-lg font-bold tracking-tight text-ink-soft sm:text-xl">
          LARProgramming
        </span>
      )}
    </Link>
  );
}
