// Implement Quick Sort

function quickSort(array) {
  // your code here
  if (array.length === 0 || array.length === 1) return array;
  let pivot = array[0];
  array.shift();
  let left = [];
  let right = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return [...leftSorted, pivot,...rightSorted];
}

console.log(quickSort([4,3,2,1,9,3,0]));

module.exports = {
  quickSort
};
