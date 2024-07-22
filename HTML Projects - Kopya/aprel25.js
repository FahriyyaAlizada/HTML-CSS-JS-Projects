// const arr = [1, -4, 2, 5, -6, -3]
// const newArr = arr.map((item) => {
//     if (item<0) {
//         return item*-1
//     } else {
//         return item*2
//     }
// })
// console.log(newArr);

// const arr = ["Green", "Red", "Blue"]
// const result = arr.find((item) => {
//     if (item.length == 3) {
//         return item
//     }
// })
// console.log(result);

// ÇALIŞMA 1
const arr = ["Alice", "Dorota", "Alex", "Marc"]
const result = arr.filter((item,index) => {
    if (item[0] == "A" || item[0] == "a") {
         return item
    }
})
console.log(result);

// ÇALIŞMA 2
const names = ["Hofstadter", "Cooper", "Wolowitz", "Koothrappali"]
names.sort();
names.reverse();
console.log(names);