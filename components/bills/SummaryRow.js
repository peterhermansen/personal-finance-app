import styles from '@/styles/components/bills/SummaryRow.module.css';
import formatVal from '@/utils/formatVal';

const SummaryRow = ({ text, num, value }) => {
  return (
    <div className={styles['summary-row']}>
      <span
        className={`${styles['summary-row-text']} text-5 ${text === 'Due Soon' ? 'red' : 'gray'}`}
      >
        {text}
      </span>
      <span
        className={`${styles['summary-row-value']} text-5 bold ${text === 'Due Soon' ? 'red' : null}`}
      >
        {`${num} ($${formatVal(value)})`}
      </span>
    </div>
  );
};

export default SummaryRow;
