function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  let [left, right] = [[], []];

  for (let index = 1; index < arr.length; index++) {
    if (arr[index] < pivot) {
      left.push(arr[index]);
    } else {
      right.push(arr[index]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [10, 7, 8, 9, 1, 5];
console.log(quickSort(arr));
