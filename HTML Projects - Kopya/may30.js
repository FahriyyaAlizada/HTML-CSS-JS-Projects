// let classElements = document.querySelectorAll(".primary")
// classElements.forEach((element) => {
//     element.style.color = "navy"
//     element.style.backgroundColor = "whitesmoke"
// })

// let box = document.getElementById("box")
// console.log(box.parentElement);
// console.log(box.parentElement.innerHTML);
// console.log(box.previousElementSibling);
// console.log(box.previousElementSibling.innerHTML);
// console.log(box.children);
// let elements = box.children
// elements.forEach(element => {
//     console.log(element.innerHTML);
// });
// console.log(box.firstElementChild);
// console.log(elements[0]);

function creategreetingcard() {
    let color1 = prompt("Enter first color for the background...")
    let color2 = prompt("Enter second color for the background...")
    let box = document.getElementById("box")
    box.style.backgroundImage = `linear-gradient(${color1}, ${color2})`
    let cakeColor = prompt("Enter a color for the cake...")
    let cake = document.getElementById("icon1")
    cake.style.color = `${cakeColor}`
    let giftColor = prompt("Enter a color for the gifts...")
    let gift1 = document.getElementById("icon2");
    gift1.style.color = `${giftColor}`;
    let gift2 = document.getElementById("icon3");
    gift2.style.color = `${giftColor}`;
    let textColor = prompt("Enter a color for the text...")
    let h1 = document.getElementById("text1")
    h1.style.color = `${textColor}`;
    let text = prompt("Enter your name...")
    let textColor2 = prompt("Enter a color for the text name...")
    let textbox = document.getElementById("text2")
    textbox.style.color = `${textColor2}`;
    textbox.innerText = `${text} !!!`
    let button = document.getElementById("button")
    button.style.display = "none"
}

// ÇALIŞMA
// let classnaming = document.querySelectorAll('li');
// classnaming.forEach((element) => {
//     addClass = element.classList
//     addClass.add("item")
//     if (!addClass.contains("primary")) {
//         addClass.add("secondary")
//     }
// })
// let ulname = document.getElementById("box")
// console.log(ulname.innerHTML);