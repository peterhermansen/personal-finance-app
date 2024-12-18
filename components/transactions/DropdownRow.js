import styles from '@/styles/components/transactions/DropdownRow.module.css';

const DropdownRow = ({ name, i, arr, value, setter, setButtonClicked }) => {
  const handleButtonClick = () => {
    setter(name);
    setButtonClicked();
  };

  return (
    <li key={name}>
      <button
        href="#"
        data-value={name}
        className={`${styles.button} ${name === value ? 'bold' : null}`}
        onClick={handleButtonClick}
      >
        {name}
      </button>
      {i < arr.length - 1 ? <div className={`divider`}></div> : null}
    </li>
  );
};

export default DropdownRow;
