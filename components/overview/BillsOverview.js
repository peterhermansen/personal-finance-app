import HeaderOverview from './HeaderOverview';
import styles from '@/styles/components/overview/BillsOverview.module.css';
import formatVal from '@/utils/formatVal';
import billData from '@/utils/billData';

const BillsOverview = ({ data }) => {
  const { paidTotal, upcomingTotal, dueSoonTotal } = billData(data);

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
