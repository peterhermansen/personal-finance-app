import Image from 'next/image';
import styles from '@/styles/components/overview/HeaderOverview.module.css';

const HeaderOverview = ({ title, btnText }) => {
  return (
    <div className={styles.header}>
      <h2 className="text-2 bold">{title}</h2>
      <button className={styles.btn}>
        <span className="text-4">{btnText}</span>
        <Image
          src="/images/icon-caret-right.svg"
          alt="Right Arrow"
          width="8"
          height="8"
        />
      </button>
    </div>
  );
};

export default HeaderOverview;
