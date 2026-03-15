const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 *
 * @param {Date} date Date object .
 * @returns A formatted date string.
 * @example
 * dateString = "January 18, 2026 • 11:54 AM"
 */
export default function getDateString(date: Date) {
  const newDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} • ${date.toLocaleTimeString(
    "en-US",
    { hour: "numeric", minute: "numeric", hour12: true },
  )}`;

  return newDate;
}
