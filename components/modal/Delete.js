import { useStateContext } from '@/app/stateContext';
import styles from '@/styles/components/modal/Modal.module.css';
import fetchReq from '@/utils/fetchReq';

const Delete = ({
  buttonSource,
  editTarget,
  setEditTarget,
  setDeleteClicked,
}) => {
  const { budgets, setBudgets, pots, setPots } = useStateContext();

  const handleExitClick = () => setDeleteClicked(false);

  const request = (location, obj, setter) => {
    setDeleteClicked(false);
    setEditTarget('');

    fetchReq(location, obj, setter);
  };

  const handleDelete = () => {
    if (buttonSource === 'budget') {
      const index = budgets.findIndex((item) => item.category === editTarget);
      budgets.splice(index, 1);

      request(`${buttonSource}s`, budgets, setBudgets);
    }
    if (buttonSource === 'pot') {
      const index = pots.findIndex((item) => item.name === editTarget);
      pots.splice(index, 1);

      request(`${buttonSource}s`, pots, setPots);
    }
  };

  const header = () => {
    return (
      <div className={styles.header}>
        <span className="text-1 bold">{`Delete '${editTarget}'?`}</span>
        <button className={styles.exit} onClick={handleExitClick}>
          <img src="images/icon-close-modal.svg" alt="Exit Button" />
        </button>
      </div>
    );
  };

  const text = `Are you sure you want to delete this ${buttonSource}? This action cannot be reversed, and all the data inside it will be removed forever.`;

  return (
    <>
      <div className={styles.container}>
        {header()}
        <span className="text-4 gray">{text}</span>
        <button
          className={`${styles.delete} text-4 bold white`}
          onClick={handleDelete}
        >
          Yes, Confirm Deletion
        </button>
        <button
          className={`${styles.back} text-4 gray`}
          onClick={handleExitClick}
        >
          No, Go Back
        </button>
      </div>

      <div className={styles.background} onClick={handleExitClick}></div>
    </>
  );
};

export default Delete;
