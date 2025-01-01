import styles from '@/styles/components/pots/Pot.module.css';
import Image from 'next/image';
import formatVal from '@/utils/formatVal';

const Pot = ({ pot }) => {
  const percent = (pot.total / pot.target) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles['top-left']}>
          <div
            className={styles.color}
            style={{ backgroundColor: `${pot.theme}` }}
          ></div>
          <span className="text-2 bold">{pot.name}</span>
        </div>
        <button>
          <Image
            src="/images/icon-ellipsis.svg"
            alt="Pot Edit Button"
            width="16"
            height="16"
          />
        </button>
      </div>

      <div className={styles.details}>
        <div className={styles.saved}>
          <span className="text-4 gray">Total Saved</span>
          <span className="text-1 bold">${formatVal(pot.total)}</span>
        </div>
        <div className={styles.chart}>
          <div className={styles['chart-background']}></div>
          <div
            className={styles['chart-foreground']}
            style={{
              backgroundColor: `${pot.theme}`,
              width: `${percent}%`,
            }}
          ></div>
        </div>
        <div className={styles.target}>
          <span className="text-5 bold dark-gray">{formatVal(percent)}%</span>
          <span className="text-5 gray">Target of ${pot.target}</span>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={`${styles.button} text-4 bold`}>+ Add Money</button>
        <button className={`${styles.button} text-4 bold`}>Withdraw</button>
      </div>
    </div>
  );
};

export default Pot;