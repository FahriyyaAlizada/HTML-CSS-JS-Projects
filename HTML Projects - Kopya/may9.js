// let arr = [2,45,71,35,86,71,2,35,71]
// let creatingSet = new Set([2,45,71,35,86,71,2,35,71])
// console.log(arr);
// console.log(creatingSet);

// let creatingSets = new Set([2,45,71,35,86,71,2,35,71])
// creatingSets.add(32)
// creatingSets.values()
// creatingSets.keys()
// creatingSets.entries()
// console.log(creatingSets);

// SET
const ages = new Set([23,16,48])
console.log(ages);
ages.add(61)
console.log(ages);
ages.forEach(function (value) {
    console.log(value)
})
ages.values()
console.log(ages);
ages.keys()
console.log(ages);
ages.entries()
console.log(ages);

// MAP
const prices = new Map( [
    ["Ferrari", "64k"],
    ["Mercedes", "32k"],
    ["BMW", "25k"]
] )
console.log(prices);
console.log(prices.get("Mercedes"));
const pricess = new Map()
    pricess.set("Ferrari", "64k"),
    pricess.set("Mercedes", "32k"),
    pricess.set("BMW", "25k")
console.log(pricess.get("Ferrari"));
console.log(pricess.size);
pricess.delete("BMW")
console.log(pricess);
//pricess.clear()
//console.log(pricess)
console.log(pricess.has("Mercedes"));