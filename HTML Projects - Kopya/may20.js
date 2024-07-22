// class Person {
//     constructor(surname,name,age,gender) {
//         this.surname = surname
//         this.name = name
//         this.age = age
//         this.gender = gender
//     }
// }
// class Admin extends Person{
//     constructor(surname,name,age,gender,role,id) {
//         super(surname,name,age,gender)
//         this.role = role
//         this.id = id
//     }
// }
// class Player extends Person{
//     constructor(surname,name,age,gender,level) {
//         super(surname,name,age,gender)
//         this.level = level
//     }
// }

// ÇALIŞMA 1
class Sport {
    constructor(running,doingExercises,specialDrinks) {
        this.running = running
        this.doingExercises = doingExercises
        this.specialDrinks = specialDrinks
    }
}
class Tennis extends Sport {
    constructor(running,doingExercises,specialDrinks,tennisBall,tennisracket) {
        super(running,doingExercises,specialDrinks)
        this.tennisBall = tennisBall
        this.tennisracket = tennisracket
    }
}
class Horseriding extends Sport {
    constructor(running,doingExercises,specialDrinks,horse,specialPlace){
        super(running,doingExercises,specialDrinks)
        this.horse = horse
        this.specialPlace = specialPlace
    }
}

//ÇALIŞMA 2
class Person {
    constructor(surname,name,age,gender) {
        this.surname = surname
        this.name = name
        this.age = age
        this.gender = gender
    }
    rename(newName) {
        this.name = newName
    }
}
class Admin extends Person{
    constructor(surname,name,age,gender,role,id) {
        super(surname,name,age,gender)
        this.role = role
        this.id = id
    }
}
class Player extends Person{
    constructor(surname,name,age,gender,level) {
        super(surname,name,age,gender)
        this.level = level
    }
}
const user1 = new Admin("Brown","Alice",11,"female","student","K21B4M8J")
user1.rename("Ruby")
console.log(user1);