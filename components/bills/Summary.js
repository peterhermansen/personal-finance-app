import styles from '@/styles/components/bills/Summary.module.css';
import SummaryRow from '@/components/bills/SummaryRow';

const Summary = ({ bills }) => {
  const { paid, upcoming, dueSoon } = bills;

  return (
    <div className={styles.summary}>
      <span className="text-3 bold">Summary</span>
      <div className={styles['summary-rows']}>
        <SummaryRow text="Paid Bills" num={paid.num} value={paid.total} />
        <div className="divider mrg-btm-1"></div>
        <SummaryRow
          text="Total Upcoming"
          num={upcoming.num}
          value={upcoming.total}
        />
        <div className="divider mrg-btm-1"></div>
        <SummaryRow text="Due Soon" num={dueSoon.num} value={dueSoon.total} />
      </div>
    </div>
  );
};

export default Summary;
