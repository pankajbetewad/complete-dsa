// write a function that return largest number in an array

function largestNum(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]
    }
  }
  return largest;
}

// const arr = [-1, -6, -8, 12, 17, 34, -3]
const arr = [-1, -4, -8]
console.log(largestNum(arr));
