import styles from '@/styles/components/transactions/TransactionFilters.module.css';
import { useState, useEffect, useCallback } from 'react';
import SearchFilter from './SearchFilter';
import SortFilter from './SortFilter';
import CategoryFilter from './CategoryFilter';

const TransactionsFilters = ({ data, setFilteredData }) => {
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('Latest');
  const [categoryValue, setCategoryValue] = useState('All Transactions');

  const searchFilter = useCallback(() => {
    if (searchValue) {
      const filtered = data.filter((obj) => {
        return new RegExp(searchValue, 'i').test(obj.name);
      });
      return filtered;
    } else return data;
  }, [searchValue, data]);

  const categoryFilter = useCallback(
    (results) => {
      if (categoryValue !== 'All Transactions') {
        const filtered = results.filter((obj) => {
          return categoryValue === obj.category;
        });
        return filtered;
      } else {
        return results;
      }
    },
    [categoryValue],
  );

  const sortResults = useCallback(
    (results) => {
      if (sortValue === 'Oldest') {
        return [...results].sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA - dateB;
        });
      }
      if (sortValue === 'A to Z') {
        return [...results].sort((a, b) => a.name.localeCompare(b.name));
      }
      if (sortValue === 'Z to A') {
        return [...results].sort((a, b) => b.name.localeCompare(a.name));
      }
      if (sortValue === 'Highest') {
        return [...results].sort((a, b) => b.amount - a.amount);
      }
      if (sortValue === 'Lowest') {
        return [...results].sort((a, b) => a.amount - b.amount);
      }
      return results;
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

export default TransactionsFilters;
