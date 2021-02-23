// Implement Bubble Sort

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  // your code here
  let n = array.length;
  let swapped = true;
  while(swapped) {
    swapped = false;
    for (let i = 1; i <= n - 1; i++) {
      if (array[i - 1] > array[i]) {
        swap(array, i - 1, i);
        console.log(array);
        swapped = true;
      }
    }
  }
  return array;
}

console.log(bubbleSort([4,3,2,1]));

module.exports = {
  bubbleSort,
  swap
};
