// find second largest number in an array

function secondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i]
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i]
    }
  }
  // console.log(largest, secondLargest);
  return secondLargest;

}

const arr = [20, 25, 0, 1, 3, 50]

const arr1 = [4, 9, 0, 2, 8, 7, 1,9]

console.log(secondLargest(arr1))