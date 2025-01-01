/* eslint-disable @next/next/no-img-element */
import styles from '@/styles/components/transactions/TransactionRow.module.css';
import formatVal from '@/utils/formatVal';
import formatDate from '@/utils/formatDate';

const TransactionsRow = ({ data, i, totalRows, display, budget }) => {
  const plusMinus = data.amount > 0 ? '+' : '-';
  const absAmount = Math.abs(data.amount);

  return (
    <>
      <li
        className={`
          ${styles['transaction-row']} 
          ${display !== 'overview' ? 'grid-transaction-columns' : null} 
          ${display !== 'overview' && i < totalRows ? 'pd-btm-sm' : null}
          ${display !== 'overview' && i > 0 ? ' pd-top-sm' : null}`}
      >
        <div className={styles['transaction-name']}>
          <img
            src={data.avatar}
            alt="Avatar"
            width={budget ? '32' : '40'}
            height={budget ? '32' : '40'}
            className={styles.avatar}
          />
          <span className={`${budget ? 'text-5' : 'text-4'} bold`}>
            {data.name}
          </span>
        </div>

        {display === 'overview' ? (
          <div className={styles['transaction-info']}>
            <span
              className={`${budget ? 'text-5' : 'text-4'} bold ${plusMinus === '+' ? 'green' : null}`}
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
          className={`${budget ? 'divider-dark' : 'divider'} ${display === 'overview' && !budget ? 'mrg-btm-sm mrg-top-sm' : null} ${budget ? 'mrg-top-tiny mrg-btm-tiny' : null}`}
        ></div>
      ) : null}
    </>
  );
};

export default TransactionsRow;
