// class Person {
//     constructor(surname,name,age,gender) {
//         this.surname=surname
//         this.name=name
//         this.age=age
//         this.gender=gender
//     }
// }
// const person1 = new Person("John", "Smith",32,"male")
// console.log(person1);
// const person2 = new Person("Lucie", "Greens",21,"female")
// console.log(person2);
// const person3 = new Person("Marc", "Browns",46,"male")
// console.log(person3);

class Person {
    constructor(name,age){
        this.name = name
        this.age=age
    }
    celebrateBirthday(){
        this.age++
    }
}
const person1 = new Person("Marc",17)
person1.celebrateBirthday()
console.log(person1);