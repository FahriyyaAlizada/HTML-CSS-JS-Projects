const newObj = {
    counter: 0,
}
Object.defineProperty(newObj, "reset",
    {
        get: function () {
            this.counter = 0
        }
    }
)
Object.defineProperty(newObj, "increment",
    {
        get: function () {
            this.counter++
        }
    }
)
Object.defineProperty(newObj, "decrement",
    {
        set: function (value) {
            this.counter -= value     
        }
    }
)
newObj.reset
newObj.increment
newObj.decrement = prompt()
console.log(newObj.counter);