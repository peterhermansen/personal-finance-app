import styles from '@/styles/components/bills/Bills.module.css';
import SearchFilter from '../filters/SearchFilter';
import { useState, useEffect, useCallback } from 'react';
import filterSearch from '@/utils/filterSearch';
import BillRow from './BillRow';

const Bills = ({ bills }) => {
  const [filteredData, setFilteredData] = useState(bills.recurring);
  const [searchValue, setSearchValue] = useState('');

  console.log(bills);

  const searchFilter = useCallback(() => {
    return filterSearch(searchValue, bills.recurring);
  }, [searchValue, bills.recurring]);

  useEffect(() => {
    setFilteredData(searchFilter());
  }, [searchValue, searchFilter, setFilteredData]);

  return (
    <div className={styles.div}>
      <div className={styles.filters}>
        <SearchFilter setSearchValue={setSearchValue} />
      </div>

      <div>
        <div className={`${styles.headers} text-5 gray`}>
          <span>Bill Title</span>
          <span>Due Date</span>
          <span className={styles['headers-amount']}>Amount</span>
        </div>
        <div className="divider"></div>

        <ul className={styles['bills-list']}>
          {filteredData.map((el, i) => {
            return (
              <BillRow
                bill={el}
                bills={bills}
                i={i}
                totalRows={filteredData.length}
                key={el.name}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Bills;
