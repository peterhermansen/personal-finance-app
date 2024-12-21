import styles from '@/styles/components/transactions/TransactionFilters.module.css';
import { useState, useEffect, useCallback } from 'react';
import SearchFilter from '../filters/SearchFilter';
import SortFilter from '../filters/SortFilter';
import CategoryFilter from '../filters/CategoryFilter';
import filterSearch from '@/utils/filterSearch';
import filterCategory from '@/utils/filterCategory';
import filterSort from '@/utils/filterSort';

const TransactionFilters = ({ data, setFilteredData }) => {
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('Latest');
  const [categoryValue, setCategoryValue] = useState('All Transactions');

  const searchFilter = useCallback(() => {
    return filterSearch(searchValue, data);
  }, [searchValue, data]);

  const categoryFilter = useCallback(
    (results) => {
      return filterCategory(categoryValue, results);
    },
    [categoryValue],
  );

  const sortResults = useCallback(
    (results) => {
      return filterSort(sortValue, results);
    },
    [sortValue],
  );

  useEffect(() => {
    let results;
    results = searchFilter();
    results = categoryFilter(results);
    results = sortResults(results);
    setFilteredData(results);
  }, [
    searchValue,
    searchFilter,
    sortValue,
    sortResults,
    categoryValue,
    categoryFilter,
    setFilteredData,
  ]);

  return (
    <div className={styles.filters}>
      <SearchFilter setSearchValue={setSearchValue} />
      <SortFilter sortValue={sortValue} setSortValue={setSortValue} />
      <CategoryFilter
        data={data}
        categoryValue={categoryValue}
        setCategoryValue={setCategoryValue}
      />
    </div>
  );
};

export default TransactionFilters;
