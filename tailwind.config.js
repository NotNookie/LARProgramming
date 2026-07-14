/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Luminous Technical palette
        surface: "#f8f9ff",
        "surface-alt": "#f8fafc", // level 1 fill
        "surface-container": "#ffffff",
        ink: "#0f172a", // secondary / headings
        "ink-soft": "#0b1c30",
        slate: "#64748b", // neutral body / labels
        line: "#e2e8f0", // grid divider lines
        "line-soft": "#f1f5f9", // tertiary / input bg / card borders
        primary: {
          DEFAULT: "#ff5722",
          strong: "#b02f00",
          fixed: "#ffdbd1",
        },
      },
      fontFamily: {
        sans: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        "headline-xl": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "label-sm": ["12px", { lineHeight: "1.5", letterSpacing: "0.05em", fontWeight: "600" }],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        lift: "0 8px 30px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};
