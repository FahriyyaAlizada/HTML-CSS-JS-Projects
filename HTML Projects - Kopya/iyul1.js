// fetch("https://acb-api.algoritmika.org/api/transaction")
//     .then(res => res.json())
//     .then((data) => {
//         data.forEach(obj => {
//             console.log(`${obj.amount} of cash sent by ${obj.from} to ${obj.to}`);
//         });
//     })// 

const newObj = {
    from: "Jules Maigret",
    to: "Guido Brunetti",
    amount: 5000
}
fetch("https://acb-api.algoritmika.org/api/transaction", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(newObj)
})
fetch("https://acb-api.algoritmika.org/api/transaction")
    .then(res => res.json())
    .then((data) => {
        data.forEach(element => {
            console.log(`${element.amount} of cash sent by ${element.from} to ${element.to}`);
        });
    })