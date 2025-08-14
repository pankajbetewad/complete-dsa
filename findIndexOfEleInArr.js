// Write a function that searches for an element in an array and return the index of that element

function indexNum(arr, ele) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return `index of ${ele} is ${i}`
    }
  }
  return `element not found in the array`
}

const arr = [1, 2, 3, 4, 5, 6]


console.log(indexNum(arr, 7));
