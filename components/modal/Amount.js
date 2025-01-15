import styles from '@/styles/components/modal/Amount.module.css';
import { useState, useEffect } from 'react';
import { useStateContext } from '@/app/stateContext';

const Amount = ({ textObj, formObj, setFormObj, editTarget, buttonSource }) => {
  const { budgets, pots } = useStateContext();
  const [input, setInput] = useState('');
  const [isNumber, setIsNumber] = useState(true);
  const handleInputChange = (e) => setInput(e.target.value);

  const isNumeric = (str) => {
    if (str === '') return true;
    return !Number.isNaN(Number(str));
  };

  useEffect(() => {
    if (editTarget) {
      if (buttonSource === 'Edit Budget') {
        const indexBudget = budgets.findIndex(
          (item) => item.category === editTarget,
        );
        const targetValue = budgets[indexBudget].maximum;
        if (targetValue !== input) setInput(targetValue);
      }
      if (buttonSource === 'Edit Pot') {
        const indexPot = pots.findIndex((item) => item.name === editTarget);
        const targetValue = pots[indexPot].target;
        if (targetValue !== input) setInput(targetValue);
      }
    }
  }, []);

  useEffect(() => {
    setIsNumber(isNumeric(input));
  }, [input]);

  useEffect(() => {
    if (buttonSource === 'Add Budget' || buttonSource === 'Edit Budget') {
      formObj.maximum = Number(Number(input).toFixed(2));
    } else formObj.target = Number(Number(input).toFixed(2));

    setFormObj(formObj);
  }, [input, formObj, setFormObj, buttonSource]);

  return (
    <div className={styles.container}>
      <span className="text-5 bold dark-gray">{textObj.amount}</span>
      <div className={styles.amount}>
        <input
          className={`${styles.input} text-4`}
          placeholder="e.g. 2000"
          value={input}
          onChange={handleInputChange}
        ></input>
        <span className={`text-4 gray ${styles.dollar}`}>$</span>
        {!isNumber ? (
          <span className={`text-5 bold red ${styles.warning}`}>
            Value must be a valid number
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Amount;
