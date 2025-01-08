import styles from '@/styles/components/modal/Amount.module.css';
import { useState, useEffect } from 'react';

const Amount = ({ textObj }) => {
  const [input, setInput] = useState('');
  const [isNumber, setIsNumber] = useState(true);
  const handleInputChange = (e) => setInput(e.target.value);

  const isNumeric = (str) => {
    if (str === '') return true;
    return !Number.isNaN(Number(str));
  };

  useEffect(() => {
    setIsNumber(isNumeric(input));
  }, [input]);

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
