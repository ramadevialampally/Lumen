// simple date utils (converted from TS)
export function ensureDate(timestamp) {
  if (!timestamp) return new Date();
  if (timestamp instanceof Date) return timestamp;
  const d = new Date(timestamp);
  if (isNaN(d.getTime())) {
    console.warn("Invalid timestamp provided:", timestamp);
    return new Date();
  }
  return d;
}

export function formatTimestamp(timestamp, options = { hour: "2-digit", minute: "2-digit" }) {
  const d = ensureDate(timestamp);
  return d.toLocaleTimeString([], options);
}

export function formatDate(timestamp, options = { year: "numeric", month: "short", day: "numeric" }) {
  const d = ensureDate(timestamp);
  return d.toLocaleDateString([], options);
}

export function formatDateTime(timestamp) {
  const d = ensureDate(timestamp);
  return d.toLocaleString([], { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}
