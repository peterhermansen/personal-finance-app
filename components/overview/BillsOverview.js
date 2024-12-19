import HeaderOverview from './HeaderOverview';
import styles from '@/styles/components/overview/BillsOverview.module.css';
import formatVal from '@/utils/formatVal';

const BillsOverview = ({ data }) => {
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

  function billRow(title, value, color) {
    return (
      <div className={styles.row}>
        <div className={`${styles.color} ${color}`}></div>
        <div className={styles.content}>
          <span className={`${styles.title} text-4`}>{title}</span>
          <span className={`${styles.value} text-4 bold`}>
            ${formatVal(value)}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.bills}>
      <HeaderOverview
        title="Recurring Bills"
        btnText="See Details"
        link="/bills"
      />
      <div className={styles['bill-rows']}>
        {billRow('Paid Bills', paidTotal, 'green-bg')}
        {billRow('Total Upcoming', upcomingTotal, 'yellow-bg')}
        {billRow('Due Soon', dueSoonTotal, 'cyan-bg')}
      </div>
    </div>
  );
};

export default BillsOverview;
