'use client';
import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from '@/styles/components/budgets/BudgetsChart.module.css';

Chart.register(ArcElement);

const BudgetsChart = ({ budgetObj, budgets }) => {
  const { spentBudget, maxBudget } = budgetObj;

  const chartData = {
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
      {
        data: [],
        backgroundColor: [],
        weight: 0.5,
      },
    ],
  };

  budgets.forEach((budget) => {
    chartData.datasets[0].data.push(budget.maximum);
    chartData.datasets[0].backgroundColor.push(budget.theme);
    chartData.datasets[1].data.push(budget.maximum);
    chartData.datasets[1].backgroundColor.push(`${budget.theme}cc`);
  });

  const options = { borderWidth: 0, cutout: '65%', animation: false };
  return (
    <div className={styles.chart}>
      <Doughnut data={chartData} options={options} />
      <div className={styles['chart-text']}>
        <span className="text-1 bold">${spentBudget}</span>
        <span className="text-5 gray">of ${maxBudget} limit</span>
      </div>
    </div>
  );
};

export default BudgetsChart;
