import styles from '@/styles/components/filters/TransactionDropdown.module.css';
import Image from 'next/image';
import DropdownRow from '../transactions/DropdownRow';
import { useStateContext } from '@/app/stateContext';

const CategoryFilter = ({
  data,
  categoryValue,
  setCategoryValue,
  currentDropdown,
  setCurrentDropdown,
}) => {
  const { windowSize } = useStateContext();
  const allCategories = data.map((el) => el.category);
  const categoryList = ['All Transactions', ...new Set(allCategories)];

  const handleButtonClick = () => {
    if (currentDropdown === 'category') setCurrentDropdown('');
    else setCurrentDropdown('category');
  };

  return (
    <div className={styles['dropdown-div-category']}>
      {windowSize.width > 816 ? (
        <span className="text-4 gray">Category</span>
      ) : null}
      <div className={styles.dropdown}>
        <button
          className={`${styles['dropdown-button']} ${styles['dropdown-button-category']} ${currentDropdown === 'category' ? styles['dropdown-button--active'] : null}`}
          onClick={handleButtonClick}
        >
          {windowSize.width > 816 ? (
            <>
              <span>{categoryValue}</span>
              <Image
                src="/images/icon-caret-down.svg"
                alt="Dropdown Arrow"
                width="12"
                height="12"
                className={styles.arrow}
              />
            </>
          ) : (
            <Image
              src="/images/icon-filter-mobile.svg"
              alt="Category"
              width="20"
              height="20"
              className={styles.arrow}
            />
          )}
        </button>
        <ul
          className={`${styles['dropdown-menu']} ${styles['dropdown-menu-category']} ${currentDropdown === 'category' ? styles['dropdown-menu--open'] : styles['dropdown-menu--closed']}`}
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
                setCurrentDropdown={setCurrentDropdown}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilter;
