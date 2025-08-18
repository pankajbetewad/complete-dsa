// let num = 23423

// console.log(String(num).length)

let count = 0;
let n = -12

n = Math.abs(n)
if(n == 0) count++;

while(n > 0){
    n = Math.trunc(n / 10)
    count++
}
console.log(count)