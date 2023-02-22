/*

let array =[23,4,5,6,12,6,7,4];

let myNum = array.filter(number => number>20);

console.log(myNum);
*/
/*

let arr =[200,3000,4000, 13,7,9]

let result = arr.filter(num => num%2 ===0);
console.log(result);
*/

let products =[
    {id:1,name:'laptop', price:50000},
    {id:2,name:'mobile', price:40000},
    {id:3,name:'Tab', price:10000},
]

let highestPrice = products.filter(item => item.price > 40000)

console.log(highestPrice);

