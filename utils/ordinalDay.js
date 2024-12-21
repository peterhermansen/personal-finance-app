export default function ordinalDay(date) {
  const day = new Date(date).getDate();
  const suffixes = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];

  if (day > 10 && day < 20) return `${day}th`;

  return `${day}${suffixes[day % 10]}`;
}
