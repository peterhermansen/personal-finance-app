'use client';
import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement);

const BudgetsChart = ({ data }) => {
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

  data.forEach((budget) => {
    chartData.datasets[0].data.push(budget.maximum);
    chartData.datasets[0].backgroundColor.push(budget.theme);
    chartData.datasets[1].data.push(budget.maximum);
    chartData.datasets[1].backgroundColor.push(`${budget.theme}cc`);
  });

  const options = { borderWidth: 0, cutout: '65%', animation: false };
  return <Doughnut data={chartData} options={options} />;
};

export default BudgetsChart;
