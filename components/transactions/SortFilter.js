import styles from '@/styles/components/transactions/TransactionFilters.module.css';
import Image from 'next/image';
import DropdownRow from './DropdownRow';
import { useState } from 'react';

const SortFilter = ({
  data,
  sortValue,
  setSortValue,
  filteredData,
  setFilteredData,
}) => {
  const sortList = [
    'Latest',
    'Oldest',
    'A to Z',
    'Z to A',
    'Highest',
    'Lowest',
  ];

  const [buttonClicked, setButtonClicked] = useState(false);
  const handleButtonClick = () => setButtonClicked(!buttonClicked);

  return (
    <div className={styles['dropdown-div']}>
      <span className="text-4 gray">Sort by</span>
      <div className={styles.dropdown}>
        <button
          className={`${styles['dropdown-button']} ${styles['dropdown-button-sort']}`}
          onClick={handleButtonClick}
        >
          <span>{sortValue}</span>
          <Image
            src="/images/icon-caret-down.svg"
            alt="Finance Logo"
            width="12"
            height="12"
            className={styles.arrow}
          />
        </button>
        <ul
          className={`${styles['dropdown-menu']} ${styles['dropdown-menu-sort']} ${buttonClicked ? styles['dropdown-menu--open'] : styles['dropdown-menu--closed']}`}
        >
          {sortList.map((el, i, arr) => {
            return (
              <DropdownRow
                key={el}
                name={el}
                i={i}
                arr={arr}
                value={sortValue}
                setter={setSortValue}
                setButtonClicked={setButtonClicked}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SortFilter;
