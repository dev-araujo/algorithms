function findSmaller(arr) {
  let [smaller, smallerIndex] = [arr[0], 0];

  for (let index = 1; index < arr.length; index++) {
    if (arr[index] < smaller) {
      smaller = arr[index];
      smallerIndex = index;
    }
  }
  return smallerIndex;
}

function selectionSort(arr) {
  const sorted = [];
  const copiedArr = [...arr];

  while (copiedArr.length > 0) {
    let smallerPosition = findSmaller(copiedArr);
    let removed = copiedArr.splice(smallerPosition, 1)[0];
    sorted.push(removed);
  }

  return sorted;
}

const testing = [5, 3, 6, 2, 10];
console.log(selectionSort(testing)); // Saída esperada: [2, 3, 5, 6, 10]
