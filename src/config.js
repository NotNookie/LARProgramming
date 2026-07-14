// ─────────────────────────────────────────────────────────────
// Site configuration
// ─────────────────────────────────────────────────────────────

// Facebook page + direct Messenger link (derived from the page ID).
export const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61591989867062";
export const MESSENGER_URL = "https://m.me/61591989867062";

export const SITE = {
  name: "Larprogramming",
  tagline: "HIGH_PERFORMANCE_STUDIO",
  year: 2024,
};

// Build a prefilled Messenger message from the intake form and open it.
export function openMessenger(message) {
  const url = message
    ? `${MESSENGER_URL}?text=${encodeURIComponent(message)}`
    : MESSENGER_URL;
  window.open(url, "_blank", "noopener,noreferrer");
}
