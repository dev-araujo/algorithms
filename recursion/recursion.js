function sumRecursive(arr) {
  if (arr.length === 0) {
    //base case
    return 0;
  }
  return arr[0] + sumRecursive(arr.slice(1));
}

function counterRecursive(arr) {
  if (arr.length === 0) {
    //base case
    return 0;
  }
  return 1 + counterRecursive(arr.slice(1));
}

function largestRecursive(arr) {
  if (arr.length === 1) {
    //base case
    return arr[0];
  }

  let largest = largestRecursive(arr.slice(1));
  return arr[0] > largest ? arr[0] : largest;
}
const test = [2, 4, 6];

console.log(`Recursive SUM for [${test}]=> ${sumRecursive(test)}`);
console.log(`Recursive COUNTER for [${test}]=> ${counterRecursive(test)}`);
console.log(
  `Recusive LARGEST NUMBER for [${test}]=> ${largestRecursive(test)}`
);
