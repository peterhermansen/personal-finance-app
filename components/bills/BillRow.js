/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/components/bills/BillRow.module.css';
import ordinalDay from '@/utils/ordinalDay';
import formatVal from '@/utils/formatVal';

const BillRow = ({ bill, bills, i, totalRows }) => {
  const isPaid = bills.paid.arr.includes(bill);
  const isDueSoon = bills.dueSoon.arr.includes(bill);
  const absAmount = Math.abs(bill.amount);

  return (
    <>
      <li className={styles['bill-row']}>
        <div className={styles['bill-name']}>
          <img
            src={bill.avatar}
            alt="Avatar"
            width="40"
            height="40"
            className={styles.avatar}
          />
          <span className="text-4 bold">{bill.name}</span>
        </div>
        <div className={styles['due-date']}>
          <span className={`${styles.date} text-5 ${isPaid ? 'green' : null}`}>
            Monthly - {ordinalDay(bill.date)}
          </span>
          {isPaid || isDueSoon ? (
            <img
              src={`
                ${isPaid ? '/images/icon-bill-paid.svg' : ''} 
                ${isDueSoon ? '/images/icon-bill-due.svg' : ''}`}
              alt="Avatar"
              width="16"
              height="16"
              className={styles.avatar}
            />
          ) : null}
        </div>

        <span
          className={`${styles.amount} text-4 bold ${isDueSoon ? 'red' : null}`}
        >
          ${formatVal(absAmount)}
        </span>
      </li>
      {i < totalRows - 1 ? <div className="divider"></div> : null}
    </>
  );
};

export default BillRow;
