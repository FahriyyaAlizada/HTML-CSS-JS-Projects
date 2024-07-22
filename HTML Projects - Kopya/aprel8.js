// let multi = 1
// for (let i = 1; i <= 10; i++) {
//     multi = i * multi
// }
// console.log(multi);

// let txt = prompt("Enter some text")
// for (let i = 0; i < txt.length; i++) {
//     if (txt[i] == ".") {
//         console.log(i);
//         break
//     }
// }

// Çalışma 
let str = prompt("Enter some text...")
for (let i = str.length-1; i > -1; i--) {
    console.log(str[i]);      
}