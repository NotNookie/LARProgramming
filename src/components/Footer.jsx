import Logo from "./Logo";
import { SITE, FACEBOOK_URL, MESSENGER_URL } from "../config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-tech flex flex-col items-center gap-6 py-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <Logo height={30} />

        <p className="order-last font-mono text-xs uppercase tracking-wider text-slate md:order-none">
          © {year} Larprogramming{" "}
          <span className="text-primary">//</span> {SITE.tagline}
        </p>

        <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider">
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="text-slate hover:text-primary">
            Facebook
          </a>
          <a href={MESSENGER_URL} target="_blank" rel="noreferrer" className="text-slate hover:text-primary">
            Messenger
          </a>
        </div>
      </div>
    </footer>
  );
}
