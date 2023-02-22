let numbers =[12,3,4,5];

let total = numbers.reduce((previous,current)=>{
    return previous+ current;

},0);

console.log(total);