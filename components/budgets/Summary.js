import styles from '@/styles/components/budgets/Summary.module.css';
import formatVal from '@/utils/formatVal';

const Summary = ({ budgetObj, budgets }) => {
  const { spentBudgets } = budgetObj;

  function generateSummaryEl(budget, i) {
    const budgetColor = {
      backgroundColor: budget.theme,
    };

    return (
      <div key={budget.category}>
        <div className={styles.budget}>
          <div
            className={`${styles['budget-color']}`}
            style={budgetColor}
          ></div>
          <div className={`${styles['budget-text']}`}>
            <div>
              <span className={`${styles['budget-title']} text-4 gray`}>
                {budget.category}
              </span>
            </div>
            <div className={styles.amounts}>
              <span className="text-3 bold">
                ${formatVal(spentBudgets[budget.category])}
              </span>
              <span className="text-5 gray">
                of ${formatVal(budget.maximum)}
              </span>
            </div>
          </div>
        </div>
        {i < budgets.length - 1 ? (
          <div className="divider mrg-top-1 mrg-btm-1"></div>
        ) : null}
      </div>
    );
  }

  return (
    <div className={styles.summary}>
      <span className={`${styles.title} text-2 bold`}>Spending Summary</span>
      <div className={styles.details}>
        {budgets.slice().map((budget, i) => generateSummaryEl(budget, i))}
      </div>
    </div>
  );
};

export default Summary;
