// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/
function calculateDogAge(age=0,conversion=0){
let dogage=age*conversion
return dogage
}
console.log(calculateDogAge(10,5))



/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age=0,numberofmovieyouwatcheveryweek=0){
const maxage=60
 let total= (maxage-age)*12*4*numberofmovieyouwatcheveryweek
return total
}
console.log(calculateMoviesToWatch(50,10))

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/
function celsiusToFahrenheit(tem){
let fahrenheit=9/5*tem+32
return fahrenheit
}
console.log(celsiusToFahrenheit(36))
/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function fahrenheitToCelsius(tem){
    let celsius=5/9*(tem-32)
    return celsius
}
console.log(fahrenheitToCelsius(96.8))
/*
5. 🎖 Write a function pow(n, x) that returns x in power n.
  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/
function pow(n=0,x=0){
    if(n<0){
        return "the number below 1 is not allowed"
    }else{
        return n**x
    }
}
console.log(pow(-2,3))

// Test


/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/
function sumorproduct(n,a=" "){
if(a==0){return "not a valid input"
}else{
    switch(a){
        case "sum":
            let sum=0
            for(let i=0;i<=n;i++){sum+=i}
            return sum 
            // break
            case  "product":
                let total=1
                for(let i=1;i<=n;i++){total*=i}
                return total 
                break;
                default:  
    }
}
}
console.log(sumorproduct(4,0))
/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/
function sum(n){
    let sum=0
    for(let i=0;i<=n;i++){sum+=i}
    return sum

}
console.log(sum(10))

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/
function multiples(n){
    let sum=0
    for(let i=1;i<=n;i++){
        if(i%5==0 || i%7==0){
            sum+=i
        }
    }
    return sum

}
console.log(multiples(20))
// Your code goes here

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/
function min(a,b){
    if(a<b) return a
    if(a>b)  return b
}
console.log(min(5,2))
/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/
function valuetype(a){return typeof a}
console.log(valuetype("ajay"))
