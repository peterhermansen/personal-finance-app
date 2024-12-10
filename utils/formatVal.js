export default function formatVal(val) {
  // Keep 2 decimal places and add commas
  return val.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
