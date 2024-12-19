/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/components/transactions/TransactionRow.module.css';
import Image from 'next/image';
import formatVal from '@/utils/formatVal';
import formatDate from '@/utils/formatDate';

const TransactionsRow = ({ data, i, totalRows, display }) => {
  const plusMinus = data.amount > 0 ? '+' : '-';
  const absAmount = Math.abs(data.amount);

  return (
    <>
      <li
        className={`
          ${styles['transaction-row']} 
          ${display !== 'overview' ? 'grid-transaction-columns' : 'pd-btm-md'} 
          ${display !== 'overview' && i < totalRows ? 'pd-btm-sm' : null}
          ${display !== 'overview' && i > 0 ? ' pd-top-sm' : null}`}
      >
        <div className={styles['transaction-name']}>
          <img
            src={data.avatar}
            alt="Avatar"
            width="40"
            height="40"
            className={styles.avatar}
          />
          <span className="text-4 bold">{data.name}</span>
        </div>

        {display === 'overview' ? (
          <div className={styles['transaction-info']}>
            <span
              className={`text-4 bold ${plusMinus === '+' ? 'green' : null}`}
            >
              {plusMinus}${formatVal(absAmount)}
            </span>
            <span className={`text-5 ${styles.date}`}>
              {formatDate(data.date)}
            </span>
          </div>
        ) : (
          <>
            <span className="text-5 gray">{data.category}</span>
            <span className={`text-5 ${styles.date}`}>
              {formatDate(data.date)}
            </span>
            <span
              className={`text-4 bold ${plusMinus === '+' ? 'green' : null} ${display !== 'overview' ? 'transaction-amount' : null}`}
            >
              {plusMinus}${formatVal(absAmount)}
            </span>
          </>
        )}
      </li>
      {i < totalRows - 1 ? (
        <div
          className={`divider ${display === 'overview' ? 'mrg-btm-sm' : null}`}
        ></div>
      ) : null}
    </>
  );
};

export default TransactionsRow;
