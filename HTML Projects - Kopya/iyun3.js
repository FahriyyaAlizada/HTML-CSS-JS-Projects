// function changeColor(event) {
//    event.target.style.color = "grey"
// }
// const elements = document.querySelectorAll("button")
// elements.forEach((element) => {
//     element.addEventListener("click", changeColor)
// })

// ÇALIŞMA
// function changeColor(event) {
//     event.target.style.textDecorationLine = "line-through";
//     event.target.removeEventListener("click", changeColor);
// }
// const elements = document.querySelectorAll("button");
// elements.forEach((element) => {
//     element.addEventListener("click", changeColor);
// });

let num = 0
function clicking1() {
    let tableBody = document.getElementById("tableBody")
    let row = document.createElement("tr")
    let username = prompt("Enter your username...")
    let age = prompt("Enter your age...")
    let id = prompt("Enter your id...")
    row.innerHTML = `<th scope="row">${++num}</th><td>${username}</td><td>${age}</td><td>${id}</td>`
    tableBody.append(row)
}
function clicking2() {
    let color = prompt("Enter a color for the background...")
    let body = document.querySelector("body")
    body.style.backgroundColor = `${color}`
}
const button1 = document.getElementById("button1")
button1.addEventListener("click", clicking1)
const button2 = document.getElementById("button2")
button2.addEventListener("click", clicking2)