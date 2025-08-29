/*
write a function to check if the number palindrome 
eg. 121 - true
12 - false
-121 - false
*/

function palindromeCheck(n){
//   let rev = '';
//   let rem = "";
//  while(n > 0){
//   rem = n % 10
//   rev = rev + rem
//   n = Math.floor(n / 10)
//  }
//   console.log(rev)


// /////////////////////////////////////////////////////////

// const rev = String(n).split("").reverse().join("")
// console.log(rev);
// return rev == n


///////////////////////////////////////////////////////////

let rev = 0;
let num = n
while(n > 0){
  let rem = n % 10;  
  rev = (rev * 10) + rem;
  n = Math.floor(n / 10)
}
return rev == num
}

console.log(palindromeCheck(121))