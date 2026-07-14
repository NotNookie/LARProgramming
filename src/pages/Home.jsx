import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const competencies = [
  {
    n: "01",
    icon: "brush",
    title: "Custom Design",
    body: "Unique, modern designs built around your brand — never a template, always made to fit you.",
  },
  {
    n: "02",
    icon: "code",
    title: "Built to Last",
    body: "Fast, reliable websites built with modern tools like React and Astro, and easy to update as you grow.",
  },
  {
    n: "03",
    icon: "layers",
    title: "Found on Google",
    body: "SEO and performance tuned so your site loads fast and shows up when customers search.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="container-tech flex justify-end pt-8">
          <Clock />
        </div>

        <div className="container-tech pb-24 pt-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-container px-4 py-1.5 font-mono text-label-sm uppercase tracking-wider text-ink">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Studio Active
          </span>

          <h1 className="mt-8 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-ink-soft md:text-6xl">
            <span className="text-ink-soft">Fast, modern websites</span>
            <br />
            <span className="font-mono font-medium tracking-tight text-slate">
              made just for you.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate">
            Larprogramming is a web development studio building clean, fast, and
            mobile-friendly websites for small businesses and brands — designed to
            help you look great and get found online.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/start" className="btn-primary">
              Start a Project
            </Link>
            <Link to="/services" className="btn-ghost">
              View Services <Icon name="arrowRight" size={18} />
            </Link>
          </div>
        </div>

        <div className="container-tech">
          <div className="h-px w-full bg-line" />
        </div>
      </section>

      {/* ── Launch Offer (remove this section once slots are filled) ── */}
      <section className="container-tech pt-16">
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="flex items-center gap-2 font-mono text-label-sm uppercase tracking-wider text-primary">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                Launch Offer // Limited Slots
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink-soft md:text-3xl">
                3 Free Websites for Early Clients
              </h2>
              <p className="mt-3 leading-relaxed text-slate">
                We're just getting started and building our portfolio — so we're
                designing and building a free, custom website for the first 3
                businesses who reach out. You cover any hosting or domain costs; we
                handle the rest.
              </p>
            </div>
            <Link to="/start" className="btn-primary shrink-0">
              Claim a Slot <Icon name="arrowRight" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── What We Do ───────────────────────────────────────── */}
      <section className="container-tech py-24">
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-slate">
          <span>// WHAT WE DO</span>
          <span>STATUS: OPEN FOR PROJECTS</span>
        </div>

        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-ink-soft md:text-4xl">
          Everything you need to get online
        </h2>
        <p className="mt-4 max-w-2xl text-slate">
          Designed, built, and launched by us — so you can focus on running your
          business.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {competencies.map((c) => (
            <article
              key={c.n}
              className="group card-tech flex flex-col p-8 transition-all hover:border-primary hover:shadow-lift"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded border border-line-soft text-primary transition-colors group-hover:border-primary">
                  <Icon name={c.icon} size={22} />
                </div>
                <span className="font-mono text-sm text-slate/60">{c.n}</span>
              </div>

              <h3 className="mt-24 text-2xl font-semibold tracking-tight text-ink-soft">
                {c.title}
              </h3>
              <p className="mt-4 leading-relaxed text-slate">{c.body}</p>
            </article>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-16 flex flex-col items-start gap-4 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg text-ink-soft">
            Have a project in mind?{" "}
            <span className="text-slate">Let's build it together.</span>
          </p>
          <Link to="/start" className="btn-primary">
            Start a Project <Icon name="arrowRight" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

// Live clock in Philippine time (updates every second).
function phtNow() {
  return new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Manila",
  });
}

function Clock() {
  const [time, setTime] = useState(phtNow);

  useEffect(() => {
    const id = setInterval(() => setTime(phtNow()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="font-mono text-xs tracking-widest text-slate/70">
      [ <span className="text-ink-soft">{time}</span> PHT ]
    </p>
  );
}
