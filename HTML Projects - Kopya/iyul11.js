// const getCharacterId = async (id) => {
//     if (id == 0) {
//         throw "Incorrect id!";
//     }
//     let data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
//     return data
// }
// getCharacterId(1).then((res) => res.json()).then((data) => {    console.log(data.name);})
// getCharacterId(2).then((res) => res.json()).then((data) => {    console.log(data.name);})
// getCharacterId(3).then((res) => res.json()).then((data) => {    console.log(data.name);})

// const getCharacterId = async (id) => {
//     if (id == 0) {
//         throw "Incorrect id!";
//     }
//     let res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
//     let data = await res.json()
//     return data.name
// }
// Promise.all([getCharacterId("1"),getCharacterId("2"),getCharacterId("3")])
//     .then(data => {
//         data.forEach(element => {
//             console.log(element)})})
//     .catch(error => {
//         console.log(error);})
