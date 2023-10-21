// find the maximum and minimum element in the array

const arr = [54, 7, -4, 8, 21, 2, 0, -2];

function findMinMax(arr) {
  let max = -Infinity;
  let min = Infinity;
  for (let ele of arr) {
    if (max < ele) {
      max = ele;
    }
    if (min > ele) {
      min = ele;
    }
  }
  console.log(max + "\n" + min);
}
findMinMax(arr);

function checkMinMax(arr) {
  //sorting array in ascending order
  arr.sort((a, b) => {
    return a - b;
  });
  let max = arr[arr.length - 1];
  let min = arr[0];
  console.log(max + "\n" + min);
}
checkMinMax(arr);
