import { useStateContext } from '@/app/stateContext';
import { useState } from 'react';
import styles from '@/styles/components/modal/Modal.module.css';
import modalText from '@/utils/modalText';
import Category from './Category';
import Amount from './Amount';
import Theme from './Theme';

const Modal = ({ buttonSource, setButtonClicked, editTarget }) => {
  const { budgets, setBudgets } = useStateContext();
  const [activeDropdown, setActiveDropdown] = useState('');
  const [formObj, setFormObj] = useState({
    theme: '',
    maximum: 0,
    category: '',
  });

  const textObj = modalText(buttonSource);

  const handleExitClick = () => setButtonClicked(false);
  const handleFormSubmit = () => {
    if (formObj.category && !isNaN(formObj.maximum) && formObj.theme) {
      if (formObj.maximum > 0) {
        if (buttonSource === 'Add Budget') {
          budgets.push(formObj);
        }
        if (buttonSource === 'Edit Budget') {
          const index = budgets.findIndex(
            (item) => item.category === editTarget,
          );
          budgets[index] = formObj;
        }

        setButtonClicked(false);

        fetch('api/budgets', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(budgets),
        })
          .then((res) => res.json())
          .then((data) => setBudgets(data))
          .catch((err) => console.error('Error fetching balance', err));
      }
    }
  };

  const header = () => {
    return (
      <div className={styles.header}>
        <span className="text-1 bold">{textObj.header}</span>
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
        <span className="text-4 gray">{textObj.text}</span>
        {buttonSource === 'Add Budget' || buttonSource === 'Edit Budget' ? (
          <Category
            budgets={budgets}
            formObj={formObj}
            setFormObj={setFormObj}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            editTarget={editTarget}
          />
        ) : null}
        <Amount
          textObj={textObj}
          formObj={formObj}
          setFormObj={setFormObj}
          editTarget={editTarget}
        />
        <Theme
          budgets={budgets}
          formObj={formObj}
          setFormObj={setFormObj}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          editTarget={editTarget}
        />
        <button
          className={`text-4 bold ${styles.submit}`}
          onClick={handleFormSubmit}
        >
          {textObj.submit}
        </button>
      </div>

      <div className={styles.background} onClick={handleExitClick}></div>
    </>
  );
};

export default Modal;
