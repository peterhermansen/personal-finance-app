import styles from '@/styles/components/overview/SummaryOverview.module.css';
import formatVal from '@/utils/formatVal';

const SummaryOverview = ({ header, value, style }) => {
  return (
    <div
      className={`${styles.summary} ${style === 'dark' ? styles.dark : styles.light}`}
    >
      <span
        className={`${styles['summary-title']} ${style === 'dark' ? styles['value-light'] : null} text-4`}
      >
        {header}
      </span>
      <span
        className={`${style === 'dark' ? styles['value-light'] : null} text-1`}
      >
        ${formatVal(value)}
      </span>
    </div>
  );
};

export default SummaryOverview;
