const numbers = [23,34,35,45,465,6]
for (number of numbers) {
    console.log(number);
}


//for of
// const bottle = { color: 'blue', price: '435', isCleaned : true }
// const keys = Object.keys(bottle)
// for (const key of keys){
//     console.log(key);
// }


//for in loop
const bottle = { color: 'blue', price: '435', isCleaned : true }
for (const key in bottle){
    console.log(key, bottle[key]);
}
