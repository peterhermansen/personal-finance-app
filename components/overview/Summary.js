import styles from '@/styles/components/overview/Summary.module.css';

const Summary = ({ header, value, style }) => {
  // Keep 2 decimal places and add commas
  let formattedValue = value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div
      className={`${styles.summary} ${style === 'dark' ? styles.dark : styles.light}`}
    >
      <h4
        className={`${styles['summary-title']} ${style === 'dark' ? styles['value-light'] : null}`}
      >
        {header}
      </h4>
      <h1 className={`${style === 'dark' ? styles['value-light'] : null}`}>
        ${formattedValue}
      </h1>
    </div>
  );
};

export default Summary;
