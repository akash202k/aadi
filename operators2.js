// Logical Assignment Operators
// if else;
// switch
//  array


/**

# airthematic operator

+ , -, /, * 

# comparator operators

"<"" --> less than   example : a < b  ---> a is less than b

">" ---> greater than   example : a > b ---> a  is greater than b 

"===" | "==" --> is equal to  a === b

# logical operators 

&& --> logical and :  only true true are true oher are false

|| ---> logical or : only false false are false other are true



*/

//  Logical operators 


// let permission = if boy age is 21+  and gorl is 18+ then they get married 

// let boyAge = 22;
// let girlAge = 19;

//  problem statement 
// elligibility : girlAge > 18 and boyAge is greater > 21
// if boy age and girl age are elligible the print consgradulation u are elligible for marriage 
    
// let result = (girlAge > 18 && boyAge > 21);

// if(girlAge > 18 && boyAge > 21){
//     console.log("Congrats ! you are elligible for marriage .");
// }else{
//     console.log("Sorry , You are currently not elligible for marriage .");
// }



let iHavePass = false;
let iHaveTicket = false;

let canITravel ;  

            //  FALSE || FALSE ==> FALSE
            // 

// false = true :TRUE or false = true : FALSE
    // false         or       true  ====>> TRUE
if(iHavePass == true || iHaveTicket == true){ //  false == true
    canITravel = true;
}else{
    canITravel = false;
}

console.log("can i travell : ", canITravel);
