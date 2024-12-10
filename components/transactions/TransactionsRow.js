import styles from '@/styles/components/transactions/TransactionsRow.module.css';
import Image from 'next/image';
import formatVal from '@/utils/formatVal';
import formatDate from '@/utils/formatDate';

const TransactionRow = ({ data, i, totalRows, display }) => {
  const plusMinus = data.amount > 0 ? '+' : '-';
  const absAmount = Math.abs(data.amount);
  console.log(absAmount);

  return (
    <>
      <li className={styles['transaction-row']}>
        <div className={styles['transaction-name']}>
          <Image
            src={data.avatar}
            alt="Transaction Image"
            width="40"
            height="40"
            className={styles.avatar}
          />
          <span className="text-4-bold">{data.name}</span>
        </div>
        <div className={styles['transaction-info']}>
          <span className={`text-4-bold ${plusMinus === '+' ? 'green' : null}`}>
            {plusMinus}${formatVal(absAmount)}
          </span>
          <span className={`text-5 ${styles.date}`}>
            {formatDate(data.date)}
          </span>
        </div>
      </li>
      {i < totalRows - 1 ? <div className="divider mrg-btm-sm"></div> : null}
    </>
  );
};

export default TransactionRow;
