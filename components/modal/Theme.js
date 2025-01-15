import styles from '@/styles/components/modal/Category.module.css';
import { useState, useEffect } from 'react';
import DropdownRow from '../transactions/DropdownRow';
import colorUsed from '@/utils/colorUsed';
import { useStateContext } from '@/app/stateContext';

const Theme = ({
  formObj,
  setFormObj,
  activeDropdown,
  setActiveDropdown,
  editTarget,
  buttonSource,
}) => {
  const { budgets, pots } = useStateContext();
  const [theme, setTheme] = useState(['#277c78', 'Green']);
  const [themeList, setThemeList] = useState([
    ['#277C78', 'Green', false],
    ['#F2CDAC', 'Yellow', false],
    ['#82C9D7', 'Cyan', false],
    ['#626070', 'Navy', false],
    ['#C94736', 'Red', false],
    ['#826CB0', 'Purple', false],
    ['#AF81BA', 'Light Purple', false],
    ['#597C7C', 'Turquoise', false],
    ['#93674F', 'Brown', false],
    ['#934F6F', 'Magenta', false],
    ['#3F82B2', 'Blue', false],
    ['#97A0AC', 'Navy Gray', false],
    ['#7F9161', 'Army Green', false],
    ['#CAB361', 'Gold', false],
    ['#BE6C49', 'Orange', false],
  ]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleDropdownClick = () => {
    setActiveDropdown('theme');
    setButtonClicked(!buttonClicked);
  };

  const updatedThemeList = [...themeList];

  updatedThemeList.forEach((el, i, arr) => {
    if (buttonSource === 'Add Budget' || buttonSource === 'Edit Budget') {
      arr[i][2] = colorUsed(el[0], budgets);
    } else arr[i][2] = colorUsed(el[0], pots);
  });

  // Sort by true to bottom of list
  updatedThemeList.sort((a, b) => (a[2] === b[2] ? 0 : a[2] ? 1 : -1));

  const syncThemeList = (arr) => {
    let index;
    if (buttonSource === 'Edit Budget') {
      index = arr.findIndex((item) => item.category === editTarget);
    }
    if (buttonSource === 'Edit Pot') {
      index = arr.findIndex((item) => item.name === editTarget);
    }

    if (arr[index]) {
      const targetColor = arr[index].theme;
      const indexColor = updatedThemeList.findIndex(
        (item) => item[0] === targetColor,
      );
      updatedThemeList[indexColor][2] = false;
      const [target] = updatedThemeList.splice(indexColor, 1);
      updatedThemeList.unshift(target);
    }
  };

  if (editTarget) {
    if (buttonSource === 'Add Budget' || buttonSource === 'Edit Budget') {
      syncThemeList(budgets);
    } else syncThemeList(pots);
  }

  const arraysAreEqual = (arr1, arr2) =>
    JSON.stringify(arr1) === JSON.stringify(arr2);

  if (!arraysAreEqual(themeList, updatedThemeList))
    setThemeList(updatedThemeList);

  useEffect(() => {
    setTheme(themeList[0].slice(0, 2));
  }, [themeList]);

  useEffect(() => {
    formObj.theme = theme[0].toUpperCase();
    setFormObj(formObj);
  }, [theme, formObj, setFormObj]);

  useEffect(() => {
    if (activeDropdown !== 'theme') setButtonClicked(false);
  }, [activeDropdown]);

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
