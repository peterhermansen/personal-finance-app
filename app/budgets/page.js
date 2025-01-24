'use client';
import '@/styles/globals.css';
import '@/styles/queries.css';
import { useStateContext } from '@/app/stateContext';
import styles from '@/styles/components/budgets/page.module.css';
import BudgetsChart from '@/components/budgets/BudgetsChart';
import Summary from '@/components/budgets/Summary';
import budgetData from '@/utils/budgetData';
import Budget from '@/components/budgets/Budget';
import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';
import Modal from '@/components/modal/Modal';
import Delete from '@/components/modal/Delete';

export default function BudgetsPage() {
  const { sidebarOpen, budgets, transactions, windowSize } = useStateContext();
  const [loading, setLoading] = useState(true);

  const [buttonClicked, setButtonClicked] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [buttonSource, setButtonSource] = useState('');
  const [editTarget, setEditTarget] = useState('');
  const handleButtonClick = () => {
    setButtonClicked(true);
    setButtonSource('Add Budget');
  };
  const [menuOpen, setMenuOpen] = useState('');

  const handleExitClick = (e) => {
    if (e.target.alt === menuOpen) setMenuOpen('');
    else setMenuOpen(e.target.alt);
  };

  useEffect(() => {
    if (transactions && budgets) setLoading(false);
  }, [transactions, budgets]);

  if (loading) return <Loading />;

  const budgetObj = budgetData(budgets, transactions);

  return (
    <div
      className={`container ${windowSize.width > 1200 ? (sidebarOpen ? 'container--sidebar-open' : 'container--sidebar-closed') : ''}`}
      onClick={handleExitClick}
    >
      {buttonClicked ? (
        <Modal
          buttonSource={buttonSource}
          setButtonClicked={setButtonClicked}
          editTarget={editTarget}
          setEditTarget={setEditTarget}
        />
      ) : null}

      {deleteClicked ? (
        <Delete
          buttonSource={buttonSource}
          editTarget={editTarget}
          setEditTarget={setEditTarget}
          setDeleteClicked={setDeleteClicked}
        />
      ) : null}
      <div>
        <div className="top">
          <h1 className="title text-1 bold">Budgets</h1>
          <button className="btn-add text-4 bold" onClick={handleButtonClick}>
            + Add New Budget
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.summary}>
            <div className={styles.chart}>
              <BudgetsChart budgetObj={budgetObj} budgets={budgets} />
            </div>
            <Summary budgetObj={budgetObj} budgets={budgets} />
          </div>

          <div className={styles.details}>
            {budgets.map((el) => {
              return (
                <Budget
                  budget={el}
                  budgetObj={budgetObj}
                  key={el.category}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  setButtonClicked={setButtonClicked}
                  setButtonSource={setButtonSource}
                  setEditTarget={setEditTarget}
                  setDeleteClicked={setDeleteClicked}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
