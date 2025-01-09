import styles from '@/styles/components/transactions/DropdownRow.module.css';

const DropdownRow = ({
  name,
  i,
  arr,
  value,
  color,
  isUsed,
  setter,
  setButtonClicked,
  size,
}) => {
  const handleButtonClick = () => {
    color ? setter([color, name]) : setter(name);
    setButtonClicked();
  };

  let colorMatch = false;
  if (name === value[1]) colorMatch = true;

  const colorString = isUsed ? color + '40' : color;

  return (
    <li key={name}>
      <button
        href="#"
        data-value={name}
        className={`${styles.button} ${size === 'tall' ? styles['button-tall'] : styles['button-short']} ${name === value ? 'bold' : null}`}
        onClick={isUsed ? null : handleButtonClick}
      >
        <div className={styles['button-div']}>
          <div className={styles['button-left']}>
            {color ? (
              <div
                className={styles.color}
                style={{ backgroundColor: colorString }}
              ></div>
            ) : null}
            <span
              className={`${colorMatch ? 'bold' : null} ${isUsed ? 'gray' : null} ${name[0] === value[0] && !name[1] ? 'bold' : null}`}
            >
              {name}
            </span>
          </div>
          {isUsed ? <span className="gray">Already Used</span> : null}
        </div>
      </button>
      {i < arr.length - 1 ? <div className={`divider`}></div> : null}
    </li>
  );
};

export default DropdownRow;
