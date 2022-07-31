// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.
Do the following for the given problem:
*/
// function convertToString(n){
//     return String(n)
// }


// - Write a Function Decleration
function convertToString(n){
    return String(n)
}

  // - Write a Function Expression
const convertToString=function(n){
    return String(n)
}

  // - Write an Arrow Function without curly brackets (if possible)
 const convertToString=n=>String(n)
  
  // - Write an Arrow Function with curly brackets
  const convertToString=n=>{return String(n)}
  const returnvalue=convertToString(23)
  
  // - Execute the function
//  converttostring(23)
  
  // - Execute the function and store the return value in a variable.
//   const returnvalue=convertToString(23)
  
  // - What is the typeof returnValue
  // typeof returnValue is "string"
//   string

  /* 1. Add one to the given value
  Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).
  Do the following with above problem.
  */
  
  // - Write a Function Declaration
//   function addone(a){return a+1}
  
  // - Write a Function Expression
//  const addone=function(a){return a+1}
  
  // - Write an Arrow Function without curly brackets(if possible)
//  const addone=a=>a+1;
  
  // - Write an Arrow Function with curly brackets
// const addone=a=>{return a+1}
  // - Execute the function
//  addone(4)
  
  // - Execute the function and store the return value in a variable.
//  let returnvalue= addone(4)
  
  // - What is the typeof returnValue
// number
  
  /* 2. Subtract one
  Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)
  Do the following with above problem.
  */
  
  // - Write a Function Declaration
// function substractOne(a){return a-1}

  // - Write a Function Expression
//   const substractOne=function (a){return a-1}
  
  // - Write an Arrow Function without curly brackets(if possible)
//   const substractOne= (a)=>a-1;
  
  // - Write an Arrow Function with curly brackets
//   const substractOne= (a)=>{return a-1}
 
  // - Execute the function
// substractOne(3)
// - Execute the function and store the return value in a variable.
// let returnvalue=substractOne(3)
 
  // - What is the typeof returnValue
//   Number

  /* 3. Add two numbers
  Write a function named `sum` that accepts two numbers and returns the sum of them.
  Do the following with above problem.
  */
  
  // - Write a Function Declaration
//   function sum(a,b){return a+b}

  // - Write a Function Expression
//  const sum =function (a,b){return a+b}
 
 // - Write an Arrow Function without curly brackets(if possible)
//  const sum = (a,b)=> a+b;
 
 // - Write an Arrow Function with curly brackets
//  const sum = (a,b)=> {return a+b};

  // - Execute the function
// sum(2,4)

// - Execute the function and store the return value in a variable
// let returnvalue=sum(2,4)

  // - What is the typeof returnValue
// Number

  /* 4. Square of the given value
  Write a function named `square` that accepts a number and returns the square of the number.
  Do the following with above problem.
  */
  
  // - Write a Function Declaration
// function square(n){return n*n}

  // - Write a Function Expression
//   const  square=function (n){return n*n}
  
  // - Write an Arrow Function without curly brackets(if possible)
//   const square=(n)=>n*n
  
  // - Write an Arrow Function with curly brackets
//   const square=(n)=>{return n*n}

  // - Execute the function
// square(3)

// - Execute the function and store the return value in a variable
// let returnvalue=square(3)
 
  // - What is the typeof returnValue
// number

  /* 5. Find isGreater
  Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.
  Do the following with above problem.
  */
  
  // - Write a Function Declaration
// function isGreater(a,b){return a>b?true:false}

  // - Write a Function Expression
//   const isGreater=function(a,b){return a>b?true:false}

  // - Write an Arrow Function without curly brackets(if possible)
//   const isGreater=(a,b)=>a>b?true:false;

  // - Write an Arrow Function with curly brackets
//   const isGreater=(a,b)=>{return a>b?true:false}

  // - Execute the function
//   isGreater(2,3)
  // - Execute the function and store the return value in a variable
//   const returnvalue=isGreater(2,3)
 
  // - What is the typeof returnValue
//   boolean

  /* 6.
  Write a function named `oddOrEven` that accepts a`number` and returns
    - `Number is odd` for odd number
    - `Number is even` for even number.
  Do the following with above problem.
  */
  
  // - Write a Function Declaration
  
  
  // - Write an anonymous Function Expression
  
  // - Write an named Function Expression
 
  
  // - Write an Arrow Function without curly brackets (hint: use ternary operator)
  // - Write an Arrow Function with curly brackets
//   const oddOrEven=n=>{return (n%2==0)?"number is even":"number is odd";}
 
  // - Execute the function
//   oddOrEven(5)
  // - Execute the function and store the return value in a variable
//  const returnvalue=oddOrEven(5)
  // - What is the typeof returnValue
 


//  unction Expression
//   Why you can store function as a value in a variable? Explain with example.
// you can store function as value in a variable . funcrtion is like as object so object can store as a value
// for ex=
// function hello(){console.log("hello world")}
// 

//   What will be the output in alert (for code below) and explain with reason.
//   function hello() {
//     console.log('Hello World!');
//   }
//   let message = hello();
//   alert(typeof message);  // 'undefined'
// because messsage is return function who gives  return value is undefined

//   What will be the output in alert (for code below) and explain with reason.
//   function hello() {
//     return 'Hello World!';
//   }
//   let message = hello();
//   alert(typeof typeof message); // 

// string
//   because typeof "undefined"  is string






// For each code snippet given below check if it's valid or not. Explain with your reason.
// 1.

// function add(let a = 0, let b = 0){
//   return a + b;
// }  // invalid because b is not default parameter it is statement

// add(21, 23);

// What is the output of the above code write error if invalid?   //syntax error unexpected token
// Is the code above valid or not?  //invali
// Explain the reason  // we can not pass statement to function
// 2.

// function add(a = 0; b = 0) {
//   return a + b;
// }

// add(21, 23);
// What is the output of the above code write error if invalid? //44
// Is the code above valid or not?  //valid
// Explain the reason//we can pass expression
// 3.

// function add(a = 0, b) {
//   return a + b;
// }
// add(21);
// What is the output of the above code write error if invalid? //NaN
// Is the code above valid or not?//valid
// Explain the reason //we can default parameter
// 4.

// function add(a = 0, b = 0) {
//   return a + b;
// }

// add(undefined, 21);
// What is the output of the above code write error if invalid?//21
// Is the code above valid or not? //valid
// Explain the reason//we can default parameter
// 5.

// function knowWhy(value) {
//  return if(value === 21){
//       console.log("Yes");
//     } else {
//      console.log("No");
//     }
// }
// knowWhy(211);
// What is the output of the above code write error if invalid?//syntaxerror:unexpected token "if"
// Is the code above valid or not?//invalid
// Explain the reason//we can not passed statement
// 6.

// function knowWhy(value) {
//  return if(value === 21){
//       console.log("Yes");
//     } else {
//      console.log("No");
//     }
// }
// knowWhy(21);
// What is the output of the above code write error if invalid?//yntaxerror:unexpected token "if"
// Is the code above valid or not?//invalid
// Explain the reason//we can not pass statement
// 7.

// function isItIf(ifElse) {
//   return ifElse;
// }
// isItIf(if(true){console.log('Testing')});

// What is the output of the above code write error if invalid?//syntaxerror:unexpected token "if"
// Is the code above valid or not?//invalid
// Explain the reason//ifelse is statement

// 8.

// function add(a = 0, b = 0) {
//   return a + b;
// }

// add(null, 21);
// What is the output of the above code write error if invalid?//21
// Is the code above valid or not?//valid
// Explain the reason//we can default parameter

