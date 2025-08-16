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

steps(3)