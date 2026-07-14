import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const processSteps = [
  { n: "01", title: "Discovery", body: "We talk through your goals, ideas, and what you need the site to do." },
  { n: "02", title: "Design", body: "We design a look that fits your brand and refine it with your feedback." },
  { n: "03", title: "Build", body: "We turn the design into a fast, working website with clean code." },
  { n: "04", title: "Launch", body: "We put your site live and make sure everything runs smoothly." },
];

const included = [
  "Mobile-Friendly",
  "Basic SEO Setup",
  "Contact Form",
  "Launch & Hosting Help",
];

const specs = [
  { n: "01", label: "FRONTEND", value: "React, Astro, Vite" },
  { n: "02", label: "STYLING", value: "Tailwind CSS" },
  { n: "03", label: "BACKEND", value: "Node.js, Supabase, REST APIs" },
];

export default function Services() {
  return (
    <>
      {/* ── Intro ────────────────────────────────────────────── */}
      <section className="container-tech relative pb-16 pt-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-container px-4 py-1.5 font-mono text-label-sm uppercase tracking-wider text-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          What We Do
        </span>

        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <div>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-ink-soft sm:text-5xl md:text-6xl">
              Custom Websites,
              <br />
              <span className="text-primary">Built for You.</span>
            </h1>
            <div className="mt-6 h-0.5 w-64 max-w-full bg-primary" />
            <p className="mt-8 max-w-xl leading-relaxed text-slate">
              We design and build fast, modern websites tailored to your business —
              from simple landing pages to full online stores. Clean code,
              mobile-first, and made to grow with you.
            </p>
          </div>
          <span
            aria-hidden="true"
            className="select-none font-mono text-7xl font-bold text-line md:text-8xl"
          >
            0x01
          </span>
        </div>
      </section>

      {/* ── Service cards ────────────────────────────────────── */}
      <section className="container-tech grid gap-6 pb-8 md:grid-cols-2">
        <ServiceCard
          n="01"
          icon="brush"
          title="Custom Web Design"
          body="Unique designs made to match your brand — never a template. Clean, modern, and looking great on phones, tablets, and desktops."
        >
          <p className="label-tech mb-3">What you get</p>
          <ul className="space-y-1.5 font-mono text-sm text-ink">
            {["Responsive on every device", "Brand-matched look", "Conversion-focused layouts"].map((c) => (
              <li key={c}>
                <span className="mr-2 text-primary">//</span>
                {c}
              </li>
            ))}
          </ul>
        </ServiceCard>

        <ServiceCard
          n="02"
          icon="code"
          title="Web Development"
          body="Fast, reliable websites built with modern tools. Clean code that loads quickly, ranks well on Google, and is easy to update."
        >
          <code className="mt-2 block max-w-full overflow-x-auto whitespace-nowrap rounded border border-primary/30 bg-primary/5 px-3 py-1.5 font-mono text-sm text-primary">
            const stack = ['React', 'Astro', 'Node']
          </code>
        </ServiceCard>
      </section>

      {/* ── What's Included (wide) ───────────────────────────── */}
      <section className="container-tech pb-24">
        <div className="card-tech grid gap-8 p-8 md:grid-cols-[280px_1fr] md:p-10">
          <div>
            <div className="grid h-10 w-10 place-items-center rounded border border-line-soft text-primary">
              <Icon name="layers" size={20} />
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink-soft">
              What's Included
            </h3>
          </div>
          <div>
            <p className="relative leading-relaxed text-ink-soft">
              Every website comes with the essentials to get you online and found —
              no confusing add-ons, and no surprises. Here's what you can expect in
              every project we take on.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-line-soft pt-6 md:grid-cols-4">
              {included.map((feature) => (
                <div key={feature}>
                  <p className="label-tech mb-1 text-primary">Included</p>
                  <p className="font-semibold text-ink-soft">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The Process ──────────────────────────────────────── */}
      <section className="container-tech pb-24">
        <div className="card-tech p-8 md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-ink-soft">
            The Process
          </h2>
          <div className="mt-4 h-0.5 w-16 bg-primary" />

          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {processSteps.map((s) => (
              <div key={s.n}>
                <span className="grid h-11 w-11 place-items-center rounded border border-primary/40 font-mono text-sm text-primary">
                  {s.n}
                </span>
                <h3 className="mt-6 font-semibold text-ink-soft">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Built With ───────────────────────────────────────── */}
      <section className="container-tech pb-28">
        <div className="card-tech grid gap-10 p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink-soft">
              Built With
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-slate">
              We use modern, dependable tools so your site stays fast, secure, and
              easy to maintain long after launch.
            </p>
            <Link to="/start" className="btn-ghost mt-8">
              Start Your Project <Icon name="arrowRight" size={18} />
            </Link>
          </div>

          <div>
            {specs.map((s) => (
              <div
                key={s.n}
                className="flex items-center justify-between border-b border-line-soft py-6 last:border-0"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-slate">
                  {s.n} // {s.label}
                </span>
                <span className="font-semibold text-ink-soft">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ n, icon, title, body, children }) {
  return (
    <article className="card-tech flex min-w-0 flex-col p-8 transition-all hover:border-primary hover:shadow-lift md:p-10">
      <div className="flex items-start justify-between">
        <div className="grid h-11 w-11 place-items-center rounded bg-primary/10 text-primary">
          <Icon name={icon} size={20} />
        </div>
        <span className="font-mono text-sm text-slate/60">{n}</span>
      </div>
      <h3 className="mt-8 text-2xl font-semibold tracking-tight text-ink-soft">
        {title}
      </h3>
      <p className="mt-4 leading-relaxed text-slate">{body}</p>
      <div className="mt-8 min-w-0">{children}</div>
    </article>
  );
}
