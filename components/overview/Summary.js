import styles from '@/styles/components/overview/Summary.module.css';

const OverviewSummary = ({ header, value, style }) => {
  // Keep 2 decimal places and add commas
  let formattedValue = value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div
      className={`${styles.summary} ${style === 'dark' ? styles.dark : styles.light}`}
    >
      <h4 className={styles['summary-title']}>{header}</h4>
      <h1>${formattedValue}</h1>
    </div>
  );
};

export default OverviewSummary;
