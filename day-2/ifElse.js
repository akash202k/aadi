/*

   if(condition1 : true){
        do this 
    }else if(condtion-2 : true){
        do this 
    }else{
        do this 
    }
*/


let a = 10;
let b = 10;

let result1 = (a < b);   // 6 < 10 --> true
//  in this case result would have either value either true or false

let result2 = (a == b);
let result3 = (a > b);

// console.log("result1 ", result1);
// console.log("result2", result2);
// console.log("result3", result3);

if (a == b) {
    console.log("a is equal to b");
} else if (a < b) {
    console.log("a is less than b");
} else {
    console.log("a is greater than b");
}