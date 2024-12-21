/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/components/bills/Total.module.css';
import formatVal from '@/utils/formatVal';

const Total = ({ bills }) => {
  return (
    <div className={styles.total}>
      <img
        src="images/icon-recurring-bills.svg"
        alt="Bill Icon"
        width="40"
        height="40"
      />
      <div className={styles['total-text']}>
        <span className="text-4 white">Total Bills</span>
        <span className="text-1 white bold">
          ${formatVal(bills.paid.total + bills.upcoming.total)}
        </span>
      </div>
    </div>
  );
};

export default Total;
