let arr = [31, 10, 'chicken', 9, 'fish', 10]
console.log(arr)
// let mas = arr.filter(function (item) {
//     return typeof item === 'string'
// });*/

const result = arr.filter((item) => typeof item === 'string')
console.log(result)

//const mas = arr.filter((item2) => typeof (item2) === typeof(1))
const mas = arr.filter((item2) => item2 === 10 )

console.log(mas)
