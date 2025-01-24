import styles from '@/styles/components/filters/TransactionDropdown.module.css';
import Image from 'next/image';
import DropdownRow from '../transactions/DropdownRow';
import { useStateContext } from '@/app/stateContext';

const SortFilter = ({
  sortValue,
  setSortValue,
  currentDropdown,
  setCurrentDropdown,
}) => {
  const sortList = [
    'Latest',
    'Oldest',
    'A to Z',
    'Z to A',
    'Highest',
    'Lowest',
  ];
  const { windowSize } = useStateContext();
  const handleButtonClick = () => {
    if (currentDropdown === 'sort') setCurrentDropdown('');
    else setCurrentDropdown('sort');
  };

  return (
    <div className={styles['dropdown-div-sort']}>
      {windowSize.width > 816 ? (
        <span className="text-4 gray">Sort by</span>
      ) : null}
      <div className={styles.dropdown}>
        <button
          className={`${styles['dropdown-button']} ${styles['dropdown-button-sort']} 
          ${currentDropdown === 'sort' ? styles['dropdown-button--active'] : null}`}
          onClick={handleButtonClick}
        >
          {windowSize.width > 816 ? (
            <>
              <span>{sortValue}</span>
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
              src="/images/icon-sort-mobile.svg"
              alt="Sort"
              width="20"
              height="20"
              className={styles.arrow}
            />
          )}
        </button>
        <ul
          className={`${styles['dropdown-menu']} ${styles['dropdown-menu-sort']} ${currentDropdown === 'sort' ? styles['dropdown-menu--open'] : styles['dropdown-menu--closed']}`}
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
                setCurrentDropdown={setCurrentDropdown}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SortFilter;
