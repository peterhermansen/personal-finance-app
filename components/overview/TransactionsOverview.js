import styles from '@/styles/components/overview/TransactionsOverview.module.css';
import HeaderOverview from './HeaderOverview';
import TransactionsRow from '../transactions/TransactionRow';

const TransactionsOverview = ({ data, display }) => {
  return (
    <div className={styles.transactions}>
      <HeaderOverview title="Transactions" btnText="View All" />
      <ul className={styles['transaction-rows']}>
        {data.slice(0, 5).map((el, i) => {
          return (
            <TransactionsRow
              data={el}
              i={i}
              totalRows={5}
              key={el.date}
              display={display}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionsOverview;
