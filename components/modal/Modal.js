import { useStateContext } from '@/app/stateContext';
import styles from '@/styles/components/modal/Modal.module.css';
import modalText from '@/utils/modalText';
import Category from './Category';
import Amount from './Amount';
import Theme from './Theme';

const CreateEditMenu = ({ buttonSource, setButtonClicked }) => {
  const { budgets } = useStateContext();
  const textObj = modalText(buttonSource);

  const handleExitClick = () => setButtonClicked(false);

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
        {buttonSource === 'Add Budget' ? <Category budgets={budgets} /> : null}
        <Amount textObj={textObj} />
        <Theme budgets={budgets} />
        <button className={`text-4 bold ${styles.submit}`}>
          {textObj.submit}
        </button>
      </div>

      <div className={styles.background} onClick={handleExitClick}></div>
    </>
  );
};

export default CreateEditMenu;
