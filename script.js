// prime Number check
let prime = 101;
let check = true;

for (let i = 2; i < prime; i++) {
    if (prime % i == 0) {
        check = false;
        break;
    }
}
if (check) {
    // console.log("prime")
}
else {
    console.log("not prime")
}
let sum = "";
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
    // console.log(sum);
}
// pattern
var n = 10;
var string = "";

for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= i; j++) {
        string += j;
    }

    string += "\n";
}

// console.log(string);

// inche to feet
let inche = 156;
let feet = inche / 12;
// console.log(feet);

function inchetoFeet(inche) {
    let feet = inche / 12;
    return feet;
}
const result = inchetoFeet(132);
// console.log(result)

var String = "";
for (var i = 1; i < 6; i++) {
    String += i;
    //   console.log(String)
}
// odd and even numbers
for (let i = 10; i <= 50; i++) {
    if (i % 2 == 1) {
        continue;
    }
    else {
        // console.log(i);
    }
}
// 1-100 prime number
for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        // console.log(counter);
    }
}

let km = 4;
let miles = km / 1.60934;
// console.log(miles);



// const number = 145;
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const mynumbers = isEven(26585);
// console.log(mynumbers);
function leapyear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}
const myYear = 2100;
const result4 = leapyear(myYear);
// console.log(result4);

// factorial number
let factorial = 1;
for (let i = 1; i <= 6; i++) {
    factorial = factorial * i;
}
// console.log(factorial);

// fibonacci sequence

// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
// 5th = 4th+3th 
// 6th = 5th+4th
// nth= (n-1)th + (n-2)th
// ith = (i-1)th + (i-2)th
let fibo = [0,1];
for( let i = 2; i<=5; i++){
    fibo[i] = fibo[i-1] + fibo[i-2]
    // console.log(fibo);
}



// largest Element of array

function largestNumber(numbers){
    let largest = numbers[0];
    for(let i = 0; i< numbers.length; i++){
        const element = numbers[i]
        // console.log(element);
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const ages = [45,23,54,65,90];
const oldages = largestNumber(ages)
// console.log(oldages);

const array = [23,4,5,24,67,8];
for(let i = 0; i < array.length; i++){
    const element = array[i];
    if( element % 2 == 1){
        continue;
    }
    else{
        console.log(element)
    }
    
}