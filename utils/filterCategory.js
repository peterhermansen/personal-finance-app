const filterCategory = (categoryValue, results) => {
  if (categoryValue !== 'All Transactions') {
    const filtered = results.filter((obj) => {
      return categoryValue === obj.category;
    });
    return filtered;
  } else {
    return results;
  }
};

export default filterCategory;
