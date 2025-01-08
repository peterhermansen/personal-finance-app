import styles from '@/styles/components/modal/Category.module.css';
import { useState, useEffect } from 'react';
import DropdownRow from '../transactions/DropdownRow';
import colorUsed from '@/utils/colorUsed';

const Theme = ({ budgets }) => {
  const [theme, setTheme] = useState(['#277c78', 'Green']);
  const [themeList, setThemeList] = useState([
    ['#277c78', 'Green', false],
    ['#f2cdac', 'Yellow', false],
    ['#82c9d7', 'Cyan', false],
    ['#626070', 'Navy', false],
    ['#c94736', 'Red', false],
    ['#826cb0', 'Purple', false],
    ['#af81ba', 'Light Purple', false],
    ['#597c7c', 'Turquoise', false],
    ['#93674f', 'Brown', false],
    ['#934f6f', 'Magenta', false],
    ['#3f82b2', 'Blue', false],
    ['#97a0ac', 'Navy Gray', false],
    ['#7f9161', 'Army Green', false],
    ['#cab361', 'Gold', false],
    ['#be6c49', 'Orange', false],
  ]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleDropdownClick = () => setButtonClicked(!buttonClicked);

  const updatedThemeList = [...themeList];

  updatedThemeList.forEach((el, i, arr) => {
    arr[i][2] = colorUsed(el[0], budgets);
  });

  // Sort by false to bottom of list
  updatedThemeList.sort((a, b) => (a[2] === b[2] ? 0 : a[2] ? 1 : -1));

  const arraysAreEqual = (arr1, arr2) =>
    JSON.stringify(arr1) === JSON.stringify(arr2);

  if (!arraysAreEqual(themeList, updatedThemeList))
    setThemeList(updatedThemeList);

  useEffect(() => {
    setTheme(themeList[0].slice(0, 2));
  }, [themeList]);

  return (
    <div className={styles.container}>
      <span className="text-5 bold dark-gray">Theme</span>
      <button
        className={`${styles.button} ${buttonClicked ? styles['button--active'] : null}`}
        onClick={handleDropdownClick}
      >
        <div className={styles['button-left']}>
          <div
            className={styles.color}
            style={{ backgroundColor: theme[0] }}
          ></div>
          <span className="text-4">{theme[1]}</span>
        </div>
        <img src="images/icon-caret-down.svg" alt="Down Arrow" />
      </button>

      <ul
        className={`${styles['dropdown-menu']} ${styles['dropdown-menu-category']} ${buttonClicked ? styles['dropdown-menu--open'] : styles['dropdown-menu--closed']}`}
      >
        {themeList.map((el, i, arr) => {
          return (
            <DropdownRow
              key={el}
              name={el[1]}
              i={i}
              arr={arr}
              value={theme}
              color={el[0]}
              isUsed={el[2]}
              setter={setTheme}
              setButtonClicked={setButtonClicked}
              size="tall"
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Theme;
