/*

let myArray =[ 34,55,3,9];


for(let number of myArray){
    console.log(number);
}

*/


function myArray(numbers){
    let output =[];
    for(let number of numbers){
        output.push(number);
    }
    return output;
    

}



let arr= [1,23,4,5];

let result = myArray(arr);
console.log(result);
