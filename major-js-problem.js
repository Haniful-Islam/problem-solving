// // #how to check prime Number or not prime Number
// function primeNumber(number) {
//     for (let i = 1; i < number; i++) {
//         if (number % i == 0) {
//             return 'prime number';
//         }
//         else {
//             return 'Not Prime';
//         }
//     }
// }
// const primeOutput = primeNumber(7);
// // console.log(primeOutput);


// #alternative way to prime number check
// let primeNumber = 10;
// let check = true;
// for( let i = 2; i < primeNumber; i++){
//     if(primeNumber % i == 0){
//         check = false;
//         break;
//     }

// }
// if(check){
//     console.log("Prime");
// }
// else{
//     console.log("Not Prime");
// }

// ##odd and Even number number
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 1) {
//         continue;
//     }
//     else {
//         console.log(i);
//     }
// }


// ##inche to feet
// function incheToFeet(inche) {
//     let feet = inche / 12;
//     return feet;
// }
// const feetOutput = incheToFeet(156);
// console.log(feetOutput);

// ##fahrenheit to celsius program

// function cTof(fahrenhiet){
//     let celsius = (5/9) * (fahrenhiet - 32);
//     return celsius;
// }
// const cTofOutput = cTof(98);
// console.log(cTofOutput);

// function fToC(celsius){
//     let fahrenhiet = celsius * 9 / 5 + 32;
//     return fahrenhiet;
// }
// const ftoCOutput = fToC(36.66666667);
// console.log(ftoCOutput);


// // ##factorial number
// 4! = 1 * 2 * 3 * 4
// 5! = 1 * 2 * 3 * 4 * 5
// function factorial(number){
//     let fact = 1;
//     for(let i = 1; i <=number; i++){
//         fact = fact * i;
//     }
//     console.log(fact);
// }
// const factOutput = factorial(6);


// ##leap Year

// function leapyear(year) {
//     for (let i = 1; i <= year; i++) {
//         if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
//             return 'leap Year';
//         }
//         return 'Not Leap Year';
//     }
// }
// const leapyearOutput = leapyear(2100);
// console.log(leapyearOutput);


// ## fibonacci series
// 3th = 2th + 1th;
// 4th = 3th + 2th;
// nth = (n-1)th + (n-2);
// function fibonacciSeries(number) {
//     let fibo = [0, 1];
//     for (let i = 2; i <= number; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//         console.log(fibo[i]);
//     }
    

// }
// const fiboOutput = fibonacciSeries(10);
// // console.log(fiboOutput)

// #use function total array element addition
const array = [3,5,78,23,43,56,32];
function totalArray(numbers){
    let sum = 0;
    for(const element of numbers){
        // console.log(element)
        sum = sum + element;
    }
    return sum;
}

const output = totalArray(array);
console.log(output);