export default function billData(data) {
  // Remove non-recurring bills
  let recurring = data.filter((el) => el.recurring);

  // Remove duplicates
  recurring = recurring.filter((el, i, arr) => {
    return arr.findIndex((item) => item.name === el.name) === i;
  });

  const today = new Date().getDate();

  // Filter bills that were already paid
  const paid = recurring.filter((el) => {
    if (+el.date.slice(8, 10) <= today) return true;
  });

  // Filter bills that are upcoming this month
  const upcoming = recurring.filter((el) => {
    if (+el.date.slice(8, 10) > today) return true;
  });

  // Filter bills that are upcoming this week
  const dueSoon = recurring.filter((el) => {
    if (+el.date.slice(8, 10) > today && +el.date.slice(8, 10) < today + 7)
      return true;
  });

  // Reduce arrays to find absolute value of selected bills
  function totalValue(arr) {
    return Math.abs(+arr.reduce((acc, cur) => acc + cur.amount, 0).toFixed(2));
  }

  const paidTotal = totalValue(paid);
  const upcomingTotal = totalValue(upcoming);
  const dueSoonTotal = totalValue(dueSoon);

  return { paidTotal, upcomingTotal, dueSoonTotal };
}
