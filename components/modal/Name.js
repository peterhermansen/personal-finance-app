import styles from '@/styles/components/modal/Amount.module.css';
import { useState, useEffect } from 'react';

const Name = ({ formObj, setFormObj, editTarget }) => {
  const [input, setInput] = useState('');
  const handleInputChange = (e) => setInput(e.target.value);

  useEffect(() => {
    if (editTarget) {
      setInput(editTarget);
    }
  }, []);

  useEffect(() => {
    formObj.name = input;
    setFormObj(formObj);
  }, [input, formObj, setFormObj]);

  return (
    <div className={styles.container}>
      <span className="text-5 bold dark-gray">Pot Name</span>
      <div className={styles.amount}>
        <input
          className={`${styles.input} text-4`}
          placeholder="e.g. Rainy Days"
          value={input}
          onChange={handleInputChange}
        ></input>
        <span className={`text-4 gray ${styles.dollar}`}>$</span>

        <div className={styles.characters}>
          {input.length > 30 ? (
            <span className={`text-5 bold red ${styles.warning}`}>
              Name must be under 30 characters
            </span>
          ) : (
            <div></div>
          )}
          <span
            className={`text-5 gray`}
          >{`${30 - input.length > 0 ? 30 - input.length : '0'} characters left`}</span>
        </div>
      </div>
    </div>
  );
};

export default Name;
