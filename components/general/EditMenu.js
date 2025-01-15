import styles from '@/styles/components/general/EditMenu.module.css';

const EditMenu = ({
  setButtonClicked,
  setButtonSource,
  setEditTarget,
  category,
  name,
  setDeleteClicked,
}) => {
  const source = category ? 'Edit Budget' : 'Edit Pot';

  const handleEditClick = (target) => {
    setButtonClicked(true);
    setButtonSource(source);
    setEditTarget(target);
  };

  const handleDeleteClick = (target) => {
    setDeleteClicked(true);
    setButtonSource(category ? 'budget' : 'pot');
    setEditTarget(target);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.edit}
        onClick={() => handleEditClick(category ? category : name)}
      >
        {source}
      </button>
      <div className="divider"></div>
      <button
        className={`${styles.delete} red`}
        onClick={() => handleDeleteClick(category ? category : name)}
      >
        {category ? 'Delete Budget' : 'Delete Pot'}
      </button>
    </div>
  );
};

export default EditMenu;
