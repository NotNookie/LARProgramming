import { useState } from "react";
import Icon from "../components/Icon";
import { openMessenger, MESSENGER_URL } from "../config";

const BUDGETS = [
  "Just exploring",
  "Under $500",
  "$500 – $2,000",
  "$2,000+",
];

const TIMELINES = [
  "As soon as possible",
  "Within a month",
  "1 – 3 months",
  "No rush",
];

const BENEFITS = [
  "Custom, modern design",
  "Looks great on phones",
  "Fast loading speed",
  "Easy to find on Google",
  "Built around your goals",
];

const STEPS = [
  ["01", "Tell us your idea", "Fill out the form or message us on Messenger."],
  ["02", "We get back to you", "We review your idea and reach out with a plan."],
  ["03", "We build & launch", "We design, build, and put your website online."],
];

const EMPTY = {
  name: "",
  email: "",
  business: "",
  details: "",
  budget: "",
  timeline: "",
};

export default function StartProject() {
  const [form, setForm] = useState(EMPTY);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  // Bundle the form into a prefilled Messenger message and open the chat.
  function handleSubmit(e) {
    e.preventDefault();
    const lines = [
      "New project inquiry 👋",
      form.name && `Name: ${form.name}`,
      form.email && `Email: ${form.email}`,
      form.business && `Business: ${form.business}`,
      form.budget && `Budget: ${form.budget}`,
      form.timeline && `Timeline: ${form.timeline}`,
      form.details && `\nDetails:\n${form.details}`,
    ].filter(Boolean);
    openMessenger(lines.join("\n"));
  }

  return (
    <section className="container-tech py-16 md:py-24">
      {/* ── Heading ────────────────────────────────────────── */}
      <p className="flex items-center gap-2 font-mono text-label-sm uppercase tracking-wider text-ink">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        Let's build something
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink-soft sm:text-5xl md:text-6xl">
        Start Your Project
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
        Tell us a little about what you have in mind. Fill in what you can. We'll review it and get back to you with ideas and
        next steps.
      </p>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_360px]">
        {/* ── Form panel ───────────────────────────────────── */}
        <form
          onSubmit={handleSubmit}
          className="relative card-tech p-6 md:p-10"
        >
          <Corner className="left-2 top-2" />
          <Corner className="bottom-2 right-2 rotate-180" />

          {/* About you */}
          <SectionHead icon="user" label="// About You" />
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Your Name">
              <input
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="Juan Dela Cruz"
                className={inputClass}
              />
            </Field>
            <Field label="Email Address">
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@email.com"
                className={inputClass}
              />
            </Field>
          </div>
          <Field label="Business Name (optional)" className="mt-6">
            <input
              type="text"
              value={form.business}
              onChange={update("business")}
              placeholder="Your business or brand"
              className={inputClass}
            />
          </Field>

          {/* Your project */}
          <SectionHead icon="grid" label="// Your Project" className="mt-12" />
          <Field label="Tell us about your project">
            <textarea
              rows={5}
              value={form.details}
              onChange={update("details")}
              placeholder="What are you looking to build? Share your idea, what it's for, and anything you'd love it to do..."
              className={`${inputClass} resize-y`}
            />
          </Field>

          {/* Budget & timeline */}
          <SectionHead icon="sliders" label="// Budget & Timeline" className="mt-12" />
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Budget">
              <Select value={form.budget} onChange={update("budget")} placeholder="Choose an option...">
                {BUDGETS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="When do you need it?">
              <Select value={form.timeline} onChange={update("timeline")} placeholder="Choose an option...">
                {TIMELINES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </Select>
            </Field>
          </div>

          {/* Actions */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <Icon name="message" size={18} /> Message Us on Messenger
            </a>
            <button type="submit" className="btn-primary">
              Send Your Request <Icon name="arrowRight" size={18} />
            </button>
          </div>
          <p className="mt-4 text-center text-sm text-slate">
            Prefer to chat? Both buttons open Messenger so we can talk it through.
          </p>
        </form>

        {/* ── Sidebar ──────────────────────────────────────── */}
        <aside className="flex flex-col gap-6">
          <div className="card-tech p-6">
            <SidebarHead icon="spark" label="What You Get" />
            <ul className="mt-5 space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span className="mt-0.5 font-mono text-primary">+</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-tech p-6">
            <SidebarHead icon="workflow" label="How It Works" />
            <ol className="mt-5 space-y-6">
              {STEPS.map(([n, title, body]) => (
                <li key={n} className="flex gap-4">
                  <span className="font-mono text-sm text-primary">{n}</span>
                  <div>
                    <p className="font-semibold text-ink-soft">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ── Small building blocks ──────────────────────────────── */

const inputClass =
  "w-full rounded border-0 border-b border-line bg-line-soft/40 px-3 py-3 text-ink-soft placeholder:text-slate/60 outline-none transition-colors focus:border-b-2 focus:border-primary focus:bg-line-soft/60";

function Field({ label, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="label-tech mb-2 block">{label}</span>
      {children}
    </label>
  );
}

function Select({ value, onChange, placeholder, children }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={`${inputClass} appearance-none pr-10 ${
          value ? "text-ink-soft" : "text-slate/60"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {children}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate">
        <Icon name="arrowRight" size={16} className="rotate-90" />
      </span>
    </div>
  );
}

function SectionHead({ icon, label, className = "" }) {
  return (
    <div className={`mb-6 border-b border-line pb-4 ${className}`}>
      <div className="flex items-center gap-3 text-slate">
        <Icon name={icon} size={18} />
        <span className="font-mono text-sm uppercase tracking-wider text-slate">
          {label}
        </span>
      </div>
    </div>
  );
}

function SidebarHead({ icon, label }) {
  return (
    <div className="flex items-center gap-3 border-b border-line pb-4">
      <span className="text-primary">
        <Icon name={icon} size={18} />
      </span>
      <span className="font-mono text-sm font-semibold uppercase tracking-wider text-ink-soft">
        {label}
      </span>
    </div>
  );
}

function Corner({ className = "" }) {
  return (
    <span
      className={`pointer-events-none absolute h-4 w-4 border-l-2 border-t-2 border-primary ${className}`}
    />
  );
}
