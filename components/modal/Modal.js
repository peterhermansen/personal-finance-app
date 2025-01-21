import { useStateContext } from '@/app/stateContext';
import { useState } from 'react';
import styles from '@/styles/components/modal/Modal.module.css';
import modalText from '@/utils/modalText';
import Category from './Category';
import Amount from './Amount';
import Theme from './Theme';
import Name from './Name';
import fetchReq from '@/utils/fetchReq';

const Modal = ({
  buttonSource,
  setButtonClicked,
  editTarget,
  setEditTarget,
}) => {
  const { budgets, setBudgets, pots, setPots } = useStateContext();
  const [activeDropdown, setActiveDropdown] = useState('');
  const [formObj, setFormObj] = useState({});

  const textObj = modalText(buttonSource);

  const handleExitClick = () => setButtonClicked(false);

  const request = (location, obj, setter) => {
    setButtonClicked(false);
    setEditTarget('');
    fetchReq(location, obj, setter);
  };

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

        request('budgets', budgets, setBudgets);
      }
    }

    if (
      formObj.name &&
      formObj.name.length < 31 &&
      !isNaN(formObj.target) &&
      formObj.target > 0 &&
      formObj.theme
    ) {
      if (buttonSource === 'Add Pot') {
        formObj.total = 0;
        pots.push(formObj);
      }
      if (buttonSource === 'Edit Pot') {
        const index = pots.findIndex((item) => item.name === editTarget);
        formObj.total = pots[index].total;
        pots[index] = formObj;
      }

      request('pots', pots, setPots);
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
        {buttonSource === 'Add Pot' || buttonSource === 'Edit Pot' ? (
          <Name
            formObj={formObj}
            setFormObj={setFormObj}
            editTarget={editTarget}
          />
        ) : null}
        <Amount
          textObj={textObj}
          formObj={formObj}
          setFormObj={setFormObj}
          editTarget={editTarget}
          buttonSource={buttonSource}
        />
        <Theme
          budgets={budgets}
          formObj={formObj}
          setFormObj={setFormObj}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          editTarget={editTarget}
          buttonSource={buttonSource}
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
