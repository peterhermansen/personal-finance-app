import styles from '@/styles/components/budgets/Budget.module.css';
import Image from 'next/image';
import formatVal from '@/utils/formatVal';
import Latest from '@/components/budgets/Latest';
import EditMenu from '@/components/general/EditMenu';

const Budget = ({
  budget,
  budgetObj,
  menuOpen,
  setMenuOpen,
  setButtonClicked,
  setButtonSource,
  setEditTarget,
  setDeleteClicked,
}) => {
  const handleMenuClick = () => {
    setMenuOpen(budget.category);
  };

  const spentBudget = budgetObj.spentBudgets[budget.category];
  const percent = (spentBudget / budget.maximum) * 100;
  const remaining = budget.maximum - spentBudget;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles['top-left']}>
          <div
            className={styles['color-circle']}
            style={{ backgroundColor: `${budget.theme}` }}
          ></div>
          <span className="text-2 bold">{budget.category}</span>
        </div>
        <button onClick={handleMenuClick}>
          <Image
            src="/images/icon-ellipsis.svg"
            alt={budget.category}
            width="16"
            height="16"
          />
        </button>
        {menuOpen === budget.category ? (
          <EditMenu
            setButtonClicked={setButtonClicked}
            setButtonSource={setButtonSource}
            setEditTarget={setEditTarget}
            category={budget.category}
            setDeleteClicked={setDeleteClicked}
          />
        ) : null}
      </div>

      <div className={styles.bar}>
        <span className="text-4 gray">
          Maximum of ${formatVal(budget.maximum)}
        </span>

        <div className={styles.chart}>
          <div className={styles['chart-background']}></div>
          <div
            className={styles['chart-foreground']}
            style={{
              backgroundColor: `${budget.theme}`,
              width: `${percent > 100 ? 100 : percent}%`,
            }}
          ></div>
        </div>

        <div className={styles.spent}>
          <div className={styles['spent-box']}>
            <div
              className={styles['color-bar']}
              style={{ backgroundColor: `${budget.theme}` }}
            ></div>
            <div className={styles['spent-text']}>
              <span className="text-5 gray">Spent</span>
              <span className="text-4 bold">${formatVal(spentBudget)}</span>
            </div>
          </div>

          <div className={styles['spent-box']}>
            <div
              className={styles['color-bar']}
              style={{ backgroundColor: `#f8f4f0` }}
            ></div>
            <div className={styles['spent-text']}>
              <span className="text-5 gray">Remaining</span>
              <span className="text-4 bold">
                ${formatVal(remaining > 0 ? remaining : 0)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Latest
        category={budget.category}
        transactions={budgetObj.budgetTransactions}
      />
    </div>
  );
};

export default Budget;
