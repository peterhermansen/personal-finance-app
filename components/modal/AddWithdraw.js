import styles from '@/styles/components/modal/Modal.module.css';
import { useStateContext } from '@/app/stateContext';
import { useState } from 'react';
import formatVal from '@/utils/formatVal';
import Amount from './Amount';
import fetchReq from '@/utils/fetchReq';

const AddWithdraw = ({
  buttonSource,
  setAddClicked,
  editTarget,
  setEditTarget,
}) => {
  const { pots, setPots } = useStateContext();
  const [amount, setAmount] = useState(0);

  const add = buttonSource === 'add' ? true : false;

  const potIndex = pots.findIndex((item) => item.name === editTarget);
  const pot = pots[potIndex];

  const percentage = (pot.total * 100) / pot.target;
  const newPercentage =
    ((pot.total + Number(`${add ? amount : -amount}`)) * 100) / pot.target;
  const newAmount = pot.total + (add ? amount : -amount);

  const rightWidth = add
    ? newPercentage > 100
      ? 100
      : newPercentage
    : percentage;
  const leftWidth = add ? percentage : newPercentage < 0 ? 0 : newPercentage;

  const headerText = add
    ? `Add to '${editTarget}'`
    : `Withdraw from '${editTarget}'`;
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const amountText = `Amount to ${add ? 'Add' : 'Withdraw'}`;

  const request = (location, obj, setter) => {
    setAddClicked(false);
    setEditTarget('');
    fetchReq(location, obj, setter);
  };

  const handleConfirm = () => {
    if (!isNaN(amount)) {
      const index = pots.findIndex((item) => item.name === editTarget);
      pots[index].total = newAmount;

      request('pots', pots, setPots);
    }
  };

  const handleExitClick = () => setAddClicked(false);

  const header = () => {
    return (
      <div className={styles.header}>
        <span className="text-1 bold">{headerText}</span>
        <button className={styles.exit} onClick={handleExitClick}>
          <img src="images/icon-close-modal.svg" alt="Exit Button" />
        </button>
      </div>
    );
  };

  return (
    <>
      <div className={styles.container}>
        {header()}
        <span className="text-4 gray">{text}</span>
        <div className={styles.flex}>
          <span className="text-4 gray">New Amount</span>
          <span className="text-1 bold">${formatVal(newAmount)}</span>
        </div>

        <div className={styles.bar}>
          <div className={styles['bar-bg']}></div>
          <div
            className={styles['bar-left']}
            style={{ width: leftWidth + '%' }}
          ></div>
          <div
            className={styles['bar-right']}
            style={{
              width: `${rightWidth}%`,
              backgroundColor: `${add ? pot.theme : '#c94736'}`,
            }}
          ></div>
        </div>

        <div className={styles.flex}>
          <span className="text-5 bold" style={{ color: pot.theme }}>
            {formatVal(newPercentage) + '%'}
          </span>
          <span className="text-4 gray">
            Target of ${formatVal(pot.target).slice(0, -3)}
          </span>
        </div>

        <Amount textObj={{ amount: amountText }} setAmount={setAmount} />

        <button
          className={`text-4 bold ${styles.submit}`}
          onClick={handleConfirm}
        >
          {add ? 'Confirm Addition' : 'Confirm Withdrawal'}
        </button>
      </div>

      <div className={styles.background} onClick={handleExitClick}></div>
    </>
  );
};

export default AddWithdraw;
