let newH1 = document.createElement("h1")
newH1.innerText = "GeForce 20 Series"
newH1.style.backgroundColor = "rgb(225, 183, 183)"
let element = document.getElementById("text1")
element.style.fontSize = "150%"
document.body.insertBefore(newH1,element)
const liElements = document.getElementsByClassName("primary");
console.log(liElements);
let i = 0
while (i<liElements.length) {
  liElements[i].style.backgroundColor = "#ebebeb";
  i++
}
// for (let i = 0; i < liElements.length; i++) {
//   liElements[i].style.backgroundColor = "#ebebeb";
// }