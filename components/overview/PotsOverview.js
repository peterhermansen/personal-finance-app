import styles from '@/styles/components/overview/PotsOverview.module.css';
import Image from 'next/image';
import HeaderOverview from './HeaderOverview';

const PotsOverview = ({ data }) => {
  // Calculate total of all pots
  const totalSaved = data.reduce((acc, val) => acc + val.total, 0);

  function generatePotEl(pot) {
    const potColor = {
      backgroundColor: pot.theme,
    };

    return (
      <div className={`${styles.pot}`} key={pot.name}>
        <div className={`${styles['pot-color']}`} style={potColor}></div>
        <div className={`${styles['pot-text']}`}>
          <div className={`${styles['pot-title']}`}>
            <span className="text-5">{pot.name}</span>
          </div>
          <div className={`${styles['pot-value']}`}>
            <span className="text-5 bold">${pot.total}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.pots}`}>
      <HeaderOverview title="Pots" btnText="See Details" link="/pots" />
      <div className={`${styles['pots-summary']}`}>
        <div className={`${styles['pots-total']}`}>
          <Image
            src="/images/icon-pot.svg"
            alt="Savings Pot"
            width="40"
            height="40"
          />
          <div className={`${styles['pots-total-txt']}`}>
            <h4 className="text-4">Total Saved</h4>
            <span className="text-1 bold">${totalSaved}</span>
          </div>
        </div>
        <div className={`${styles['pots-detail']}`}>
          {data.slice(0, 4).map((pot) => generatePotEl(pot))}
        </div>
      </div>
    </div>
  );
};

export default PotsOverview;
