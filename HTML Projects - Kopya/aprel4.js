// let x=+prompt("Enter a number with 2 digits...")
// if (x>9 && x<100) {
//     while (x<100) {
//         x+=7
//         console.log(x);
//     }
// }
// else {
//     let x=prompt("Please enter a number with 2 digits...")
// }

// let x=+prompt("Enter a number...")
// let i = 0
// while (i<x) {
//     i++
//     console.log("I know how to use cycles");
// }

// Çalışma 1
let x=100
while (x<1000) {
    console.log(x);
    x+=10
}

// Çalışma 2
let a=10
let sum=0
while (a<100) {
    if (a%2==1) {
        sum=sum+a
    }
    a++
}
console.log(sum);