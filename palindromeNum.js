/**
 * check if the number is palindrome
 * eg. 121 - true
 * 122 - false
 */
let n = 122;
let rev = 0;

while(n > 0){
    let rem = n % 10
    rev = (rev * 10) + rem;
    console.log('check ', rev);
    
    n = Math.floor(n / 10);
}

console.log(rev)
