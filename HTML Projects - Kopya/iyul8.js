// let random_number = Math.floor(Math.random() * 100) + 1;
// while (true) {
//     let input_value = prompt("Guess the number between 1-100")
//     if (input_value < random_number) {
//         alert("Enter bigger number...")
//     }
//     else if (input_value > random_number) {
//         alert("Enter smaller number...")
//     }
//     else {
//         alert("You guessed correct!")
//         break
//     }
// }

// let h1 = document.createElement("h1")
// document.body.append(h1)
// h1.style.textAlign = "center"
// h1.style.width = "10%"
// h1.style.border = "1px solid"
// h1.style.borderRadius = "50%"
// let time = 6
// let timer = setInterval(() => {
//     time -= 1
//     h1.innerHTML = time
//     if (time == 0) {
//         clearInterval(timer)
//     }
// }, 1000);

//ÇALIŞMA 1
const getCharacterId = (id) => {
    if (id == 0) {
        return Promise.reject("Incorrect id!")
    }
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
}
getCharacterId(0)
.then((res) => res.json())
.then((data) => {
    console.log(data);
})
getCharacterId(1)
.then((res) => res.json())
.then((data) => {
    console.log(data.name);
})

//ÇALIŞMA 2
const h1 = document.createElement("h1")
document.body.append(h1)
h1.style.textAlign = "center"
let hour = 0
let min = 0
let sec = 0
let timer = setInterval(() => {
    sec++;
    if (sec === 60) {
        sec = 0;
        min++;
    }
    if (min === 60) {
        min = 0;
        hour++;
    }
    h1.innerHTML = `${hour.toString().padStart(2, '0')} : ${min.toString().padStart(2, '0')} : ${sec.toString().padStart(2, '0')}`;
}, 1000);