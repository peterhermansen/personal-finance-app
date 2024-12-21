import styles from '@/styles/components/filters/Dropdown.module.css';
import Image from 'next/image';
import DropdownRow from '../transactions/DropdownRow';
import { useState } from 'react';

const CategoryFilter = ({ data, categoryValue, setCategoryValue }) => {
  const allCategories = data.map((el) => el.category);
  const categoryList = ['All Transactions', ...new Set(allCategories)];

  const [buttonClicked, setButtonClicked] = useState(false);
  const handleDropdownClick = () => setButtonClicked(!buttonClicked);

  return (
    <div className={styles['dropdown-div']}>
      <span className="text-4 gray">Category</span>
      <div className={styles.dropdown}>
        <button
          className={`${styles['dropdown-button']} ${styles['dropdown-button-category']} ${buttonClicked ? styles['dropdown-button--active'] : null}`}
          onClick={handleDropdownClick}
        >
          <span>{categoryValue}</span>
          <Image
            src="/images/icon-caret-down.svg"
            alt="Finance Logo"
            width="12"
            height="12"
            className={styles.arrow}
          />
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
                value={categoryValue}
                setter={setCategoryValue}
                setButtonClicked={setButtonClicked}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilter;
