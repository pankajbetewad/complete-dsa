/**
 * reverse the integer 
 * eg. 123 => 321
 * -123 => -321
 */

function revInt(n){
  let rev = 0;
  let MathSign = Math.sign(n);
  n = Math.abs(n)
  while(n > 0){
    let rem = n % 10;
    rev = (rev * 10) + rem
    n = Math.floor(n / 10)
  }
  return rev * MathSign;
}

console.log(revInt(-23));
