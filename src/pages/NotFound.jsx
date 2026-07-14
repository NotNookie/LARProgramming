import { Link } from "react-router-dom";
import Icon from "../components/Icon";

export default function NotFound() {
  return (
    <section className="container-tech flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="flex items-center gap-2 font-mono text-label-sm uppercase tracking-wider text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        Error // 404
      </p>

      <h1 className="mt-6 font-mono text-7xl font-bold tracking-tight text-ink-soft md:text-8xl">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink-soft md:text-3xl">
        Page not found
      </h2>
      <p className="mt-4 max-w-md leading-relaxed text-slate">
        The page you're looking for doesn't exist or may have moved. Let's get you
        back on track.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link to="/" className="btn-primary">
          Back Home
        </Link>
        <Link to="/start" className="btn-ghost">
          Start a Project <Icon name="arrowRight" size={18} />
        </Link>
      </div>
    </section>
  );
}
