export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function calcMinutesLeft(date: Date) {
  const currentTime = new Date().getTime();
  const targetTime = date.getTime();
  return Math.round((targetTime - currentTime) / 60000);
}
