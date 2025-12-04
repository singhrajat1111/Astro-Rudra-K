export function pad(n: number) {
  return n < 10 ? "0" + n : n;
}

// ISO String (UTC)
export function formatISO(date: Date) {
  return date.toISOString();
}

// Local formatted time: "06:28 AM"
export function formatLocal(date: Date) {
  let h = date.getHours();
  let m = date.getMinutes();
  let ampm = h >= 12 ? "PM" : "AM";

  h = h % 12;
  if (h === 0) h = 12;

  return `${pad(h)}:${pad(m)} ${ampm}`;
}
