import styles from '@/styles/components/transactions/TransactionFilters.module.css';
import Image from 'next/image';
import DropdownRow from './DropdownRow';

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

  return (
    <div className={styles['dropdown-div']}>
      <span className="text-4 gray">Sort by</span>
      <div className={styles.dropdown}>
        <button
          className={`${styles['dropdown-button']} ${styles['dropdown-button-sort']}`}
        >
          <span>Latest</span>
          <Image
            src="/images/icon-caret-down.svg"
            alt="Finance Logo"
            width="12"
            height="12"
            className={styles.arrow}
          />
        </button>
        <ul
          className={`${styles['dropdown-menu']} ${styles['dropdown-menu-sort']}`}
        >
          {sortList.map((el, i, arr) => {
            return DropdownRow(el, i, arr);
          })}
        </ul>
      </div>
    </div>
  );
};

export default SortFilter;
