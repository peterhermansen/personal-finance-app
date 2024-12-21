export default function billData(data) {
  const day = (bill) => +bill.date.slice(8, 10);
  const today = new Date().getDate();

  // Remove non-recurring bills
  let recurring = data.filter((el) => el.recurring);

  // Remove duplicates
  recurring = recurring.filter((el, i, arr) => {
    return arr.findIndex((item) => item.name === el.name) === i;
  });

  // Sort by day of the month
  recurring.sort((a, b) => day(a) - day(b));

  // Filter bills that were already paid
  const paidBills = recurring.filter((el) => {
    if (day(el) <= today) return true;
  });

  // Filter bills that are upcoming this month
  const upcomingBills = recurring.filter((el) => {
    if (day(el) > today) return true;
  });

  // Filter bills that are upcoming this week
  const dueSoonBills = recurring.filter((el) => {
    if (day(el) > today && day(el) < today + 7) return true;
  });

  // Reduce arrays to find absolute value of selected bills
  function totalValue(arr) {
    return Math.abs(+arr.reduce((acc, cur) => acc + cur.amount, 0).toFixed(2));
  }

  const paid = {
    total: totalValue(paidBills),
    num: paidBills.length,
    arr: paidBills,
  };
  const upcoming = {
    total: totalValue(upcomingBills),
    num: upcomingBills.length,
    arr: upcomingBills,
  };
  const dueSoon = {
    total: totalValue(dueSoonBills),
    num: dueSoonBills.length,
    arr: dueSoonBills,
  };

  return { recurring, paid, upcoming, dueSoon, today };
}
