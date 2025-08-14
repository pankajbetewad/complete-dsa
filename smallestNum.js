// write a function that return smallest number in an array

function smallestNum(arr) {
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
    }
  }
  return smallest;
}

// const arr = [-1, -6, -8, 12, 17, 34, -3]
const arr = [-1, -4, -8]
console.log(smallestNum(arr));
