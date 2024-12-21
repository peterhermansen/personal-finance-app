const filterSort = (sortValue, results) => {
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
};

export default filterSort;
