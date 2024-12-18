import styles from '@/styles/components/transactions/TransactionFilters.module.css';
import { useState } from 'react';
import SearchFilter from './SearchFilter';
import SortFilter from './SortFilter';
import CategoryFilter from './CategoryFilter';

const TransactionsFilters = ({ data, filteredData, setFilteredData }) => {
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('Latest');
  const [categoryValue, setCategoryValue] = useState('All Transactions');

  return (
    <div className={styles.filters}>
      <SearchFilter
        data={data}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <SortFilter
        data={data}
        sortValue={sortValue}
        setSortValue={setSortValue}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <CategoryFilter
        data={data}
        categoryValue={categoryValue}
        setCategoryValue={setCategoryValue}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
    </div>
  );
};

export default TransactionsFilters;
