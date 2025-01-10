import styles from '@/styles/components/general/EditMenu.module.css';

const EditMenu = ({
  setButtonClicked,
  setButtonSource,
  setEditTarget,
  category,
}) => {
  const handleEditClick = (target) => {
    setButtonClicked(true);
    setButtonSource('Edit Budget');
    setEditTarget(target);
  };

  return (
    <div className={styles.container}>
      <button className={styles.edit} onClick={() => handleEditClick(category)}>
        Edit Budget
      </button>
      <div className="divider"></div>
      <button className={`${styles.delete} red`}>Delete Budget</button>
    </div>
  );
};

export default EditMenu;
