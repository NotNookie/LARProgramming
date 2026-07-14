import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";

const links = [
  { to: "/home", label: "Home" },
  { to: "/services", label: "Services" },
];

const linkClass = ({ isActive }) =>
  `relative py-1 text-sm font-medium transition-colors ${
    isActive
      ? "text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-primary"
      : "text-ink hover:text-primary"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/80 backdrop-blur-md">
      <nav className="container-tech flex h-16 items-center justify-between">
        <Logo height={36} />

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <NavLink to="/start" className="btn-primary hidden px-5 py-2 text-sm md:inline-flex">
          Start a Project
        </NavLink>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded border border-line text-ink md:hidden"
        >
          <Icon name={open ? "close" : "menu"} size={20} />
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-line bg-surface md:hidden">
          <div className="container-tech flex flex-col gap-1 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded px-2 py-3 text-base font-medium transition-colors ${
                    isActive ? "text-primary" : "text-ink hover:text-primary"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/start"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Start a Project
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
