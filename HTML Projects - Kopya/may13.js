// let d = new Date()
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMilliseconds());
// console.log(d.getMinutes());
// console.log(d.getMonth());
// console.log(d.getSeconds());
// console.log(d.getTime());
// console.log(Date.now());

// const element = document.querySelector('.primary');
// console.log(element);

const header = document.querySelector('#headertext')
header.remove()
let newText = document.createElement('li')
newText.innerText = "TITAN RTX"
const listElement = document.querySelector('#list')
listElement.append(newText)