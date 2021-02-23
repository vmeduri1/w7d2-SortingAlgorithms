// Implement Insertion Sort

function insertionSort(list) {
  // your code here
  let holePosition;
  let valueToInsert;

  for (let i = 1; i < list.length; i++) {
    valueToInsert = list[i];
    holePosition = i;

    while(holePosition > 0 && list[holePosition - 1] > valueToInsert) {
      list[holePosition] = list[holePosition - 1];
      holePosition = holePosition - 1;
    }

    list[holePosition] = valueToInsert;
  }
  return list;
}

console.log(insertionSort([4,3,2,1]));

module.exports = {
  insertionSort
};
