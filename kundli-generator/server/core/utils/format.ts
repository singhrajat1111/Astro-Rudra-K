// Return "--" if value is null/undefined
export function safe(v: any, fallback: string = "--") {
  if (!v) return fallback;
  return v;
}

// Convert "2025-02-12T02:30:00.000Z" → "02:30 AM"
export function formatTime12(iso: string | null): string {
  if (!iso) return "--";

  const d = new Date(iso);
  let h = d.getHours();
  const m = d.getMinutes();

  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  if (h === 0) h = 12;

  return `${pad(h)}:${pad(m)} ${ampm}`;
}

// Convert "2025-02-12T02:30:00.000Z" → "12 Feb 2025"
export function formatDate(iso: string | null): string {
  if (!iso) return "--";

  const d = new Date(iso);
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

// For padding hours/minutes with leading zero
export function pad(n: number): string {
  return n < 10 ? "0" + n : n.toString();
}

// Full detail: "12 Feb 2025, 02:22 AM"
export function formatFull(iso: string | null): string {
  if (!iso) return "--";
  return `${formatDate(iso)}, ${formatTime12(iso)}`;
}
