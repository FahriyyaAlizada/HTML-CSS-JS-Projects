// const newObj = {
//     from: "Jules Maigret",
//     to: "Guido Brunetti",
//      amount: 9999
// }
// fetch("https://acb-api.algoritmika.org/api/transaction", {
//    method: "POST",
//    headers: {
//        "Content-type": "application/json"
//    },
//    body: JSON.stringify(newObj)
// })
// fetch("https://acb-api.algoritmika.org/api/transaction/18969", {
//     method: "PUT",
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify(newObj)
// })
// fetch("https://acb-api.algoritmika.org/api/transaction/18969", {
//     method: "DELETE"})
// fetch("https://acb-api.algoritmika.org/api/transaction")
//     .then(res => res.json())
//     .then((data) => {
//         data.forEach(element => {
//             console.log(`${element.amount} of cash sent by ${element.from} to ${element.to} with the id ${element.id}`);
//         });
//     })

function myFunction(){
    result = document.getElementById("result");
    result.innerHTML = "";
    inputValue = document.getElementById("input").value;
    try {
        if(inputValue == "") throw "Do not keep it empty...";
        if(isNaN(inputValue)) throw "Enter a number...";
        inputValue = Number(inputValue);
        if(inputValue < 1) throw "The number should be higher than 1";
        if(inputValue > 10) throw "The number should be smaller than 10";
        result.innerHTML = "Your chosen number : "+inputValue;
    }
    catch(error){
    result.innerHTML = error;
    }
}           