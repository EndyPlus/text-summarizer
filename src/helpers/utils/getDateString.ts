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

export default function getDateString(date: Date) {
  const newDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} • ${date.toLocaleTimeString(
    "en-US",
    { hour: "numeric", minute: "numeric", hour12: true },
  )}`;

  return newDate;
}

// "January 18, 2026 • 11:54 AM"
