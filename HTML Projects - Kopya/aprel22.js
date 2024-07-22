// const originalArr = [1, 2, 3, 4, 5]
// const newArr = [...originalArr]
// const newArr2 = []
// for (const i of newArr) {
//     newArr2.push(i*2)
// }
// console.log(originalArr);
// console.log(newArr2);

// reminder :)))
// const arr = [1, 2, 3, 4, 5]
// arr.forEach((item,index) => {
//     console.log(index + " : " + item);
// });

// const findNegative = [2, 3, -2, 0, -1]
// findNegative.forEach((item,index) => {
//     if (item<0) {
//         console.log(item);
//     }
// });

const findNegative = [2, 3, -2, 0, -1]
findNegative.forEach((item,index) => {
    if (item>0) {
        console.log(item);
    }
});