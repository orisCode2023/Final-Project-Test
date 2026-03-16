function filetring(array, filterData) {
  return array.filter((value, index) => {
    if (filterData[index] !== "") {
      value.filterData === filterData[index];
    }
  });
}
export default filetring;

