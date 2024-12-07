import styles from '@/styles/components/overview/PotsOverview.module.css';
import Image from 'next/image';

const PotsOverview = ({ pots }) => {
  // Calculate total of all pots
  const totalSaved = pots.reduce((acc, val) => acc + val.total, 0);

  function generatePotEl(pot) {
    const potColor = {
      backgroundColor: pot.theme,
    };

    return (
      <div className={`${styles.pot}`} key={pot.name}>
        <div className={`${styles['pot-color']}`} style={potColor}></div>
        <div className={`${styles['pot-text']}`}>
          <div className={`${styles['pot-title']}`}>
            <h5>{pot.name}</h5>
          </div>
          <div className={`${styles['pot-value']}`}>
            <h5>${pot.total}</h5>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.pots}`}>
      <div className="overview-section-header">
        <h2>Pots</h2>
        <button className="btn--overview">
          <h4>See Details</h4>
          <Image
            src="/images/icon-caret-right.svg"
            alt="Right Arrow"
            width="8"
            height="8"
          />
        </button>
      </div>

      <div className={`${styles['pots-summary']}`}>
        <div className={`${styles['pots-total']}`}>
          <Image
            src="/images/icon-pot.svg"
            alt="Savings Pot"
            width="40"
            height="40"
          />
          <div className={`${styles['pots-total-txt']}`}>
            <h4>Total Saved</h4>
            <h1>${totalSaved}</h1>
          </div>
        </div>
        <div className={`${styles['pots-detail']}`}>
          {pots.slice(0, 4).map((pot) => generatePotEl(pot))}
        </div>
      </div>
    </div>
  );
};

export default PotsOverview;
