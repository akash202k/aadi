// 

let a = 3;
let b = 4;

// let result = a  b;

function getSumOFSquare(value1, value2){  // function declaration : here value1 and value2 are called parameters
   const ans =  value1*value1 + value2*value2;
   return ans;
}

// let result = getSumOFSquare(a, b); // function call  : getSumOFSquare(a, b)  a and b are arguments 
// console.log(result);

// arrays

let myArray = [1, "aadi", true, false, {"name":"akash"}]


// console.log(typeof myArray);
// console.log("values from manually");

// console.log("0 : ", myArray[0]);
// console.log("1 : ", myArray[1]);
// console.log("2 : ", myArray[2]);
// console.log("3 : ", myArray[3]);
// console.log("4 : ", myArray[4]);

// // loops : forloop and whileloop
// console.log("Values from for loop")

// for(let i=0; i<5; i++){
//    console.log(`${i} : `, myArray[i]);
// }







/*
         console.log(i)
i = 0 : 0
i = 1 : 1



*/


// calculate sum of no' from 1 to 100

let sum = 0;
for(let i = 1; i <=5; i++){
   sum = sum + i ;
   console.log(`0 to ${i}`, sum);
}

