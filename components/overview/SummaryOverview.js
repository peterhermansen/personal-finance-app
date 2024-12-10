import styles from '@/styles/components/overview/SummaryOverview.module.css';
import formatVal from '@/utils/formatVal';

const SummaryOverview = ({ header, value, style }) => {
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
        ${formatVal(value)}
      </h1>
    </div>
  );
};

export default SummaryOverview;
