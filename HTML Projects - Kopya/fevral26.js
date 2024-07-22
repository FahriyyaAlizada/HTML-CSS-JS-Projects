let name="Faxriyya";
let surname="Alizada";
console.log("Sizin adınız" + " " + name + " " + surname + ". " + "Tanışlığımıza çox şadam!")
console.log(`Sizi bir daha görmeyimize şadıq, ${name} ${surname}.`)

let fullName = "Faxriyya Alizada";
let say = 0;
for (let i = 0; i < fullName.length; i++) {
    if (fullName[i] === " ") {
        say++;
    }
}
console.log(fullName.length - say);
