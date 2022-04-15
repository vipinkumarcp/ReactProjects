

var numbers = [3,56,8,7,65,45]



//map-creates a new array by doing something with each item in an arry

// function double(x){
//     return x*2
// }


// const newnumbers = numbers.map(double)
// console.log(newnumbers)



//by for each-for each we have ato define a arry first



// var newnumbers = [];

// function double(x){
//     newnumbers.push(x*2);
// }

// numbers.forEach(double);

// console.log(newnumbers)


/////////////////////**********************************************/////////////////

// filter - creates a new array by keeping the items that return true

// const newnumb = numbers.filter((num)=>{
//     return num>10;
// })
// console.log(newnumb)

//by foreach

// var newnum = [];

// const check = numbers.forEach((num)=>{
//     if (num>10){
//         newnum.push(num)
//     }
// })

// console.log(newnum)

////////////////////////////***********************////////////////////////

//Reduce - Accumalate a value by doing somethimg to each item in a array

//to sum all number in a array ..ny foreach

// var newnumb = 0;

// numbers.forEach((num)=>{
//     newnumb += num
// })

// console.log(newnumb)


//by reduce

//acumaltor is intial value same as newnumb=0 mentioned below
// var newnumb = numbers.reduce((accumulator,currentNumber)=> {
//     return accumulator+currentNumber;
// })


// console.log(newnumb)



////////////////////////////**********************************/////////////////////

//find- find the first item that matches from ana arary

// const newnum = numbers.find((num)=>{
//     return num>10;
// })

// console.log(newnum)


//index - find index of the first item thata matches

// const newnum = numbers.findIndex((num)=>{
//     return num>50;
// })

// console.log(newnum)






