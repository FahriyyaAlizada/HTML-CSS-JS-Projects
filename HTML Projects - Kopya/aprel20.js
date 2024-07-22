// reminderrr :)
// let lst = ["hello", "hi", "hey"]
// for (let i of lst) {
//     console.log(i);
// }

/*let friends = ["Peter", "Gwen", "Norman"]
friends.push("Stan")
friends.shift()
for (const i of friends) {
    console.log(i);
}*/

/*let str = "32, 31, 34, 36, 31"
let arr = str.split(", ")
console.log(arr.join("; "));*/

// ÇALIŞMA 1
const arr1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
const [firstLetter, secondLetter, ...otherLetters] = arr1
console.log(firstLetter);
console.log(secondLetter);
console.log(...otherLetters);

// ÇALIŞMA 2
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(Math.max(...arr2));