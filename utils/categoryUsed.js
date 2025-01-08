export default function categoryUsed(category, arr) {
  let used = false;
  arr.forEach((el) => {
    if (category === el.category) used = true;
  });
  return used;
}
