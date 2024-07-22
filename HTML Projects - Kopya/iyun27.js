let text = document.createElement("h2")
document.getElementById("footer").append(text)
let button = document.getElementById("button")
button.addEventListener("click", () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        text.innerHTML = data.value
        text.style.textAlign = "center"
        text.style.fontSize = "80%"
    })
})
