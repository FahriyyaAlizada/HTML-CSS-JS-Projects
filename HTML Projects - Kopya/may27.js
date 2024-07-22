let num = 0
function clicking() {
    let tableBody = document.getElementById("tableBody")
    let row = document.createElement("tr")
    let name = prompt("Enter your name...")
    let surname = prompt("Enter your surname...")
    let age = prompt("Enter your age...")
    if (isNaN(age)) {
        alert("You didn't enter a number...")
    } 
    else if(!isNaN(name) || !isNaN(surname)) {
        alert("You didn't enter a text...")
    }
    else {
        row.innerHTML = `<tr><th scope="row">${++num}</th><td>${name}</td><td>${surname}</td><td>${age}</td></tr>`
        tableBody.append(row)
    }
}