import styles from '@/styles/components/overview/TransactionsOverview.module.css';
import HeaderOverview from './HeaderOverview';
import TransactionsRow from '../transactions/TransactionRow';

const TransactionsOverview = ({ data, display }) => {
  return (
    <div className={styles.transactions}>
      <div className={styles.header}>
        <HeaderOverview
          title="Transactions"
          btnText="View All"
          link="/transactions"
        />
      </div>

      <div className="divider"></div>
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
      <div className="divider"></div>
    </div>
  );
};

export default TransactionsOverview;
