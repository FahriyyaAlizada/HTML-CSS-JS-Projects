// const information = {
//    name: "John Smith",
//     logName() {
//         console.log(information.name);
//     }
// }
// information.logName()

// const person = {
//     age: 45,
//     setAge(newAge) {
//         this.age=newAge;
//     },
//     getYearsBeforeRetirement(){
//         console.log(65-this.age);
//     }
// }
// person.setAge(52)
// person.getYearsBeforeRetirement()

const personalInfo = {
    name: "Violette",
    age: 24,
    changeName(newName) {
        this.name = newName
    },
    changeAge() {
        this.age++
    }
}
personalInfo.changeName("Molie")
personalInfo.changeAge()
console.log(personalInfo)