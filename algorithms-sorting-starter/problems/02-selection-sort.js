// Implement Selection Sort

// Implement swap without looking at bubble sort
function swap(array, idx1, idx2) {
  // your code here
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function selectionSort(list) {
  // your code here
  let n = list.length;

  for(i = 0; i <= n - 1; i++){
    console.log(list);
    let min = i;

    for(j = i + 1; j <= n; j++){
      if(list[j] < list[min]){
        min = j;
      }
    }

    if(min !== i){
      swap(list, min, i);
    }

    //console.log(list);
  }

  return list;
}

console.log(selectionSort([4,3,2,1]));

module.exports = {
  selectionSort,
  swap
};
