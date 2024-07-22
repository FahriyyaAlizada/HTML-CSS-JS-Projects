// let num = prompt("Enter your age...")
// if (Number(num)==String(num)){
//     if (num < 18){
//         alert("Access denied!")
//     }
//     else {
//         alert("Access granted!")
//     }
// }
// else {
//     num = prompt("Please enter a number...")
// }

// ÇALIŞMA 1
let num = prompt("Enter a number between 0-10:")
switch (num) {
    case "0":
        alert("zero");
        break;
    case "1":
        alert("one");
        break;
    case "2":
        alert("two");
        break;
    case "3":
        alert("three");
        break;
    case "4":
        alert("four");
        break;
    case "5":
        alert("five");
        break;
    case "6":
        alert("six");
        break;
    case "7":
        alert("seven");
        break;
    case "8":
        alert("eight");
        break;
    case "9":
        alert("nine");
        break;
    case "10":
        alert("ten");
        break;
    default:
        alert("The number is not between 0-10")
        break;
}

//ÇALIŞMA 2
let id = prompt("Enter the ID of the item:");
switch (id) {
    case "1":
        alert("10 available item");
        break;
    case "2":
        alert("256 available item");
        break;
    case "3":
        alert("53 available item");
        break;
    case "4":
        alert("3 available item");
        break;
    default:
        alert("There is no available item...");
        break;
}

//ÇALIŞMA 3
let gender = prompt("Please enter your gender (type 'M' or 'F')")
if (gender=="M" || gender=="m") {
    alert("male");
}
else if(gender=="F" || gender=="f"){
    alert("female");
}
else {
    alert("There is no that kind of gender...");
}