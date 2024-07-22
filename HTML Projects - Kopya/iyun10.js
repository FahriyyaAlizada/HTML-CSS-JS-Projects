// document.getElementById("inputElement").addEventListener("change", (event) => {
//     console.log(event.target.value);
// })

// function onchangeFunc(event) {
//     event.style.backgroundColor = "yellow"
// }
// function onfocusFunc(event) {
//     event.style.backgroundColor = "grey"
// }
// function onblurFunc(event) {
//     event.style.backgroundColor = "pink"
// }
// function ondblclickFunc(event) {
//     event.style.backgroundColor = "red"
// }
// function onmouseoverFunc(event) {
//     event.style.fontWeight = "bold"
// }

document.getElementById("button1").innerText = "Submit form"
let user = {}
document.getElementById("inputElement1").addEventListener("change", (event) => {
    let element1 = event.target.value
    user.name = `${element1}`
})
document.getElementById("inputElement2").addEventListener("change", (event) => {
    let element2 = event.target.value
    user.surname = `${element2}`
})
document.getElementById("inputElement3").addEventListener("change", (event) => {
    let element3 = event.target.value
    user.username = `${element3}`
})
document.getElementById("inputElement4").addEventListener("change", (event) => {
    let element4 = event.target.value
    user.city = `${element4}`
})
document.getElementById("inputElement5").addEventListener("change", (event) => {
    let element5 = event.target.value
    user.state = `${element5}`
})
function gettinginfo() {
    console.log(user);
    document.getElementById("card").style.visibility = "visible";
    document.getElementById("text").innerHTML = `Name : ${user.name} <br> Surname : ${user.surname} <br> Username : ${user.username} <br> City : ${user.city} <br> State : ${user.state}`
}