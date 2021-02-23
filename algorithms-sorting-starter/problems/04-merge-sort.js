// Implement Merge Sort

function merge(array1, array2) {
  // your code here
  var result = [...array1, ...array2];
  console.log(result);
  while(array1.length > 0 && array2.length > 0){

    if(array1[0] > array2[0]){
      result.push(array2[0]);
      array2.splice(array2.indexOf(0), 1);
    } else {
      result.push(array1[0]);
      array1.splice(array1.indexOf(0), 1);
    }

  }

  while(array1.length !== 0){
    result.push(array1[0]);
    array1.splice(array1.indexOf(0), 1);
  }

  while(array2.length !== 0){
    result.push(array2[0]);
    array2.splice(array2.indexOf(0), 1);
  }

  return result;

}

//[4,3,2,1,9,3,0]

function mergeSort(array) {
  // your code here
  n = array.length;

  if (n === 1) return array;

  let midPoint = Math.floor(n/2);

  var l1 = array.slice(0, midPoint);

  var l2 = array.slice(midPoint);  

  //console.log(l1);
  //console.log(l2);

  l1 = mergeSort(l1);
  l2 = mergeSort(l2);

  return merge(l1, l2);
}

console.log(mergeSort([4,3,2,1,9,3,0]));

module.exports = {
  merge,
  mergeSort
};
