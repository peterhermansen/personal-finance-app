import Image from 'next/image';
import styles from '@/styles/components/overview/HeaderOverview.module.css';
import Link from 'next/link';

const HeaderOverview = ({ title, btnText, link, display }) => {
  return (
    <div className={styles.header}>
      <h2 className={`${display ? 'text-3' : 'text-2'} bold`}>{title}</h2>
      <Link href={link}>
        <button className={styles.btn}>
          <span className="text-4">{btnText}</span>
          <Image
            src="/images/icon-caret-right.svg"
            alt="Right Arrow"
            width="8"
            height="8"
          />
        </button>
      </Link>
    </div>
  );
};

export default HeaderOverview;
