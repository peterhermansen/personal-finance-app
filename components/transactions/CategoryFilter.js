import styles from '@/styles/components/transactions/TransactionFilters.module.css';
import Image from 'next/image';
import DropdownRow from './DropdownRow';

const CategoryFilter = ({
  data,
  categoryValue,
  setCategoryValue,
  filteredData,
  setFilteredData,
}) => {
  const allCategories = data.map((el) => el.category);
  const categoryList = ['All Transactions', ...new Set(allCategories)];

  return (
    <div className={styles['dropdown-div']}>
      <span className="text-4 gray">Category</span>
      <div className={styles.dropdown}>
        <button className={styles['dropdown-button']}>
          <span>All Transactions</span>
          <Image
            src="/images/icon-caret-down.svg"
            alt="Finance Logo"
            width="12"
            height="12"
            className={styles.arrow}
          />
        </button>
        <ul
          className={`${styles['dropdown-menu']} ${styles['dropdown-menu-category']}`}
        >
          {categoryList.map((el, i, arr) => {
            return DropdownRow(el, i, arr);
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilter;
