import styles from '@/styles/components/budgets/Latest.module.css';
import HeaderOverview from '../overview/HeaderOverview';
import TransactionsRow from '../transactions/TransactionRow';

const Latest = ({ category, transactions }) => {
  return (
    <div className={styles.latest}>
      <HeaderOverview
        title="Latest Spending"
        btnText="See All"
        link="/transactions"
        display="budgets"
      />
      <ul>
        <div className="divider-dark"></div>
        {transactions[category].slice(0, 3).map((el, i) => {
          return (
            <TransactionsRow
              data={el}
              i={i}
              totalRows={3}
              key={el.date}
              display="overview"
              budget="true"
            />
          );
        })}
        <div className="divider-dark"></div>
      </ul>
    </div>
  );
};

export default Latest;
