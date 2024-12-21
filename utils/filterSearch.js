const filterSearch = (searchValue, data) => {
  if (searchValue) {
    const filtered = data.filter((obj) => {
      return new RegExp(searchValue, 'i').test(obj.name);
    });
    return filtered;
  } else return data;
};

export default filterSearch;
