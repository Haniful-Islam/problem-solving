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
function incheToFeet(inche) {
    let feet = inche / 12;
    return feet;
}
const feetOutput = incheToFeet(156);
console.log(feetOutput);