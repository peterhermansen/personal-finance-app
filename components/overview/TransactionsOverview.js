import styles from '@/styles/components/overview/TransactionsOverview.module.css';
import HeaderOverview from './HeaderOverview';
import TransactionsRow from '../transactions/TransactionsRow';

const TransactionsOverview = ({ data }) => {
  return (
    <div className={styles.transactions}>
      <HeaderOverview title="Transactions" btnText="View All" />
      <ul className={styles['transaction-rows']}>
        {data.slice(0, 5).map((el, i) => {
          return (
            <TransactionsRow data={el} i={i} totalRows={5} key={el.date} />
          );
        })}
        {/* <TransactionsRow data={data[0]} i={0} totalRows={2} />
        <TransactionsRow data={data[1]} i={1} totalRows={2} /> */}
      </ul>
    </div>
  );
};

export default TransactionsOverview;
