let button = document.getElementById("button")
let num = 0
button.addEventListener("mouseover", () => {
    let row = document.createElement("tr")
    let user = {}
    user.name = prompt("Enter your name...")
    user.surname = prompt("Enter your surname...")
    user.age = prompt("Enter your age...")
    row.innerHTML = `<th scope="row">${++num}</th><td>${user.name}</td><td>${user.surname}</td><td>${user.age}</td>`
    let tableBody = document.getElementById("tableBody")
    tableBody.append(row)
})
document.addEventListener("keyup", (event) => {
    if (event.key == " ") {
        console.log("ENTER");
    }
})