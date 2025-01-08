export default function colorUsed(color, arr) {
  let used = false;
  arr.forEach((el) => {
    if (color.toUpperCase() === el.theme) used = true;
  });
  return used;
}
