// start pattern 2d
// * * * *
// * * * *
// * * * *
// * * * *

function printStar(n){
    for(let i = 0; i < n; i++){
        let row = ""
        for(j = 0; j < n; j++){
            row = row + "* ";
        }
        console.log(row);
    }
}
// printStar(5);

// *
// * *
// * * *
// * * * *
function steps(n){
    for(let i = 0; i < n; i++){
        let step = ""
        for(let j = 0; j <= i; j++){
            step = step + "* "
        }
        console.log(step)
    }
    // for(let i = 0; i < n; i++){
    //     let step = ""
    //     for(let j = 0; j < n; j++){
    //         if(j <= i){
    //             step = step + "* "
    //         }
    //     }
    //     console.log(step)
    // }
}

// steps(3)


/*
12345
1234
123
12
1
*/

function printNum(n){
    for(let i = 0; i < n; i++){
        let row = "";
        for(let j = 0; j < n - i; j++){
            row += j + 1
        }
        console.log(row);
    }
}
// printNum(5)

/*
print numbers in below format
1
22
333
4444
55555
*/

function printNum1(n){
    for (let i = 0; i < n; i++) {
        row = "";
        for(let j = 0; j <= i; j++){
            row += i + 1
        }
        console.log(row)
        
    }
}
// printNum1(4)


/* 
    *
   **
  ***
 ****
*****

*/

function starPattern(n){
    for(let i = 0; i < n; i++){
        row = "";
        // star = "";
        // empty = "";
         for(let k = 0; k < n - (i + 1); k++){
            row = row + "." 
        }
        for(let j = 0; j <= i; j ++){
            row = row + "*"
        }
       
        console.log(row)
    }
}
// starPattern(5)


/*
1
10
101
1010
10101
*/

let n = 5

for(let i = 0; i < n; i++){
    let row = ""
    for(j = 0; j <= i; j++){
        row = row + (j % 2 === 0 ? "1" : "0")
    }
    // console.log(row)
}

/*
1
01
010
1010
10101
010101

*/

let toggle = 1
for(let i = 0; i < n; i++){
    let row = ""
    for(let j = 0; j <= i; j++){
        row = row + toggle
        if(toggle == 1){
            toggle = 0
        } else {
            toggle = 1
        }
    }
    console.log(row)
}