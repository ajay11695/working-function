/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
function sayHello(name){
    alert(`hello ${name}`)
}
sayHello("ajay")
/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.
Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
function getFullName(firstName,lastName){
    let fullname= firstName+" "+lastName
    return fullname
}
let full=getFullName("john","snow")
alert(full
    )
/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
// the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`
// Example:
// addTwoNumbers(10, 22); // 32
// addTwoNumbers(20, 32); // 32
// addTwoNumbers(10, "100"); // Alert Enter Valid Input
// */
// function addTwoNumbers(firstNum,secondNum){
//     return firstNum+secondNum
// }
// let sum=addTwoNumbers(+prompt("firstnum"),+prompt("secondnum")) 
// if(sum){
//     alert(sum)
// }else{
//     alert("enter valid input")
// }
// /*
// 4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
// can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
// is of any other data type alert `Enter Valid Input`
// Example:
// calc(10, 20, 'add'); // 30
// calc(20, 10, 'sub'); // 10
// calc(20, 10, 'mul'); // 200
// */

// function calc(numA,numB,operation){
    
//     switch(operation){
//         case "add":
//             alert(numA+numB)
//             break;
//         case "sub":
//             alert(numA-numB)
//             break;
//         case "mul":
//             alert(numA*numB)
//             break;
//             default:
//                 alert("enter valid input")
            
//     }
//     return operation
// }
// let calculate=calc(2,3,"add")
// console.log(calculate)
// /*
// 5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
// on if the year id leap year or not.
// isLeapYear(2000); // true
// isLeapYear(2001); // false
// */
// function isLeapYear(year){
    
//     if(year%4==0){
//        return ("true")
//     }else{
//         return ('false')
//     }
// }
// let leapyear=isLeapYear(2000)
// console.log(leapyear)
// /*
// 6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
// */
// function getFactorial(number){
    
//     let total=1
//     for(let i=number;i>=1;i--){
//         total*=i
        
//     }
//     return total
// }
// let factorial=getFactorial(5)
// console.log(factorial)

// What would the following function return (not output) when called? Write the output next to function call.

// function test() {
//     // alert('Hello');
//     console.log("hello")
//   }
//   test(); // output  //undefined
//   -
  
//   function test() {
//     return;
//   }
//   test(); // output //undefined
//   -
  
//   function test() {
//     return 21;
//   }
//   test(); // 21
//   -
  
//   function test() {
//     return null;
//   }
//   test(); // null
//   -
  
//   function test() {
//     console.log('hello');
//   }
//   test(); // undefined
//   -
  
//   function test() {
//     prompt('Enter your age?');
//   }
//   test(); // output//undefined
//   -
  
//   function test() {
//     return prompt('Enter you age');
//   }
//   test(); // output// enter you age
//   - 
  
//   function test() {
//     return function second() {};
//   }
//   test(); // output// f

//   What will be the value of test variable in the snippet below
//   function sayHello() {
//     let username = 'John';
//     return `Hello ${username}`;
//   }
//   let test = sayHello();  // hello john

//   What will be the value of test variable and output of console.log() in the snippet below
//   let username = 'Sam';
//   function sayHello() {
//     // let username = 'John';
//     return `Hello ${username}`;
//   }
//   let test = sayHello();  //hello john
//   console.log(username);  //sam
//   What will be the value of test and output of console.log() variable in the snippet below
//   let username = 'Sam';
//   function sayHello() {
//     return `Hello ${username}`;
//   }
//   let test = sayHello();  //hello sam
//   console.log(username);  //sam