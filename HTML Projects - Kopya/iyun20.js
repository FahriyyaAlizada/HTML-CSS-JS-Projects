const signupform = document.querySelector(".signupform")
const signinform = document.querySelector(".signinform")
const signupbutton = document.getElementById("signupbutton")
const signinbutton = document.getElementById("signinbutton")
signupbutton.addEventListener("click", () =>
    signupform.style.visibility = "visible"
)
signinbutton.addEventListener("click", () =>
    signinform.style.visibility = "visible"
)
signupform.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const user = {};
    for (const [key,value] of data) {
        user[key] = value;
    }
    let users = localStorage.getItem("users")? JSON.parse(localStorage.getItem("users")) : []
    let isSame = users.find((obj) => {
        return obj.name === user.name && obj.password === user.password
    })
    if (isSame) {
        alert("Please sign in...")
        signupform.style.visibility = "hidden"
        signinform.style.visibility = "visible"

    }
    else {
        users.push(user)
        localStorage.setItem("users",JSON.stringify(users))
        signupform.style.visibility = "hidden"
    }
})