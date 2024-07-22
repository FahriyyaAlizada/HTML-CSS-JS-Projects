const formbox1 = document.querySelector(".formBox1")
formbox1.addEventListener("submit", (event) => {
    event.preventDefault();
    const data1 = new FormData(event.target);
    console.log(data1.get("ageinput"));
    console.log(data1.get("emailinput"));
    console.log(data1.get("passwordinput"));
    if (data1.get("passwordinput").length > 5) {
        console.log("Icaze verildi...");
    } else {
        console.log("Giriş qadağandir...");
    }
})
const formbox2 = document.querySelector(".formBox2")
formbox2.addEventListener("submit", (event) => {
    event.preventDefault();
    const data2 = new FormData(event.target);
    console.log(data2.get("nameinput"));
    console.log(data2.get("surnameinput"));
    console.log(data2.get("ageInput"));
})