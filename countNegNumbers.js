// write a function that returns the number of negative in an array

function countNegNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.sign(arr[i]) === -1 || Math.sign(arr[i]) === -0) {
      count++
    }
  }
  return count;
}

const arr = [-1, -6, -8, 12, 17, 34, -3]

console.log(countNegNumbers(arr));
