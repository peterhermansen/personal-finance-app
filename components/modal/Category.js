import styles from '@/styles/components/modal/Category.module.css';
import { useState, useEffect } from 'react';
import DropdownRow from '../transactions/DropdownRow';
import categoryUsed from '@/utils/categoryUsed';

const Category = ({ budgets, formObj, setFormObj }) => {
  const [category, setCategory] = useState(['Entertainment', false]);

  const [categoryList, setCategoryList] = useState([
    ['Entertainment', false],
    ['Bills', false],
    ['Groceries', false],
    ['Dining Out', false],
    ['Transportation', false],
    ['Personal Care', false],
    ['Education', false],
    ['Lifestyle', false],
    ['Shopping', false],
    ['General', false],
  ]);

  const [buttonClicked, setButtonClicked] = useState(false);
  const handleDropdownClick = () => setButtonClicked(!buttonClicked);

  const updatedCategoryList = [...categoryList];

  updatedCategoryList.forEach((el, i, arr) => {
    arr[i][1] = categoryUsed(el[0], budgets);
  });

  // Sort by false to bottom of list
  updatedCategoryList.sort((a, b) => (a[1] === b[1] ? 0 : a[1] ? 1 : -1));

  const arraysAreEqual = (arr1, arr2) =>
    JSON.stringify(arr1) === JSON.stringify(arr2);

  if (!arraysAreEqual(categoryList, updatedCategoryList))
    setCategoryList(updatedCategoryList);

  useEffect(() => {
    setCategory(categoryList[0].slice(0, 1));
  }, [categoryList]);

  useEffect(() => {
    formObj.category = category[0];
    setFormObj(formObj);
  }, [category, formObj, setFormObj]);

  return (
    <div className={styles.container}>
      <span className="text-5 bold dark-gray">Budget Category</span>
      <button
        className={`${styles.button} ${buttonClicked ? styles['button--active'] : null}`}
        onClick={handleDropdownClick}
      >
        <span className="text-4">{category}</span>
        <img src="images/icon-caret-down.svg" alt="Down Arrow" />
      </button>

      <ul
        className={`${styles['dropdown-menu']} ${styles['dropdown-menu-category']} ${buttonClicked ? styles['dropdown-menu--open'] : styles['dropdown-menu--closed']}`}
      >
        {categoryList.map((el, i, arr) => {
          return (
            <DropdownRow
              key={el}
              name={el}
              i={i}
              arr={arr}
              value={category}
              isUsed={el[1]}
              setter={setCategory}
              setButtonClicked={setButtonClicked}
              size="tall"
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
