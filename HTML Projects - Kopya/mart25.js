// EXERCISE 1
// function findingMax(a,b,c) {
//     let maxi = a
//     if (b>maxi) {
//         maxi = b
//     }
//     else if (c>maxi){
//         maxi = c
//     }
//     console.log(maxi);
// }
// findingMax(prompt(),prompt(),prompt())

// EXERCISE 2
// function findingMin(a,b) {
//     return Math.min(a,b)
// }
// console.log(findingMin(prompt(),prompt()));

function multiplicateNums(x,y) {
    if (isNaN(x) || isNaN(y)) {
        return null
    }
    return x*y
}
console.log(multiplicateNums(prompt(),prompt()));