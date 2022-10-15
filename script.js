// prime Number check
let prime = 101;
let check =true;

for( let i= 2; i<prime; i++){
    if(prime % i == 0){
        check = false;
        break;
    }
}
if(check){
    console.log("prime")
}
else{
    console.log("not prime")
}
let sum = "";
for (let i = 1; i<=10; i++){
    sum = sum + i;
    // console.log(sum);
}
// pattern
var n = 10 ;
var string ="";

for(var i = 1 ; i<=n ; i++){
      for( var j = 1 ; j<=i; j++){
            string += j;
      }

      string += "\n";
}

// console.log(string);

// inche to feet
let inche = 156;
let feet = inche /12;
// console.log(feet);

function inchetoFeet(inche){
    let feet = inche /12;
    return feet;
}
const result = inchetoFeet(132);
console.log(result)

var String ="";
for (var i = 1; i<6; i++) {
  String+=i;
//   console.log(String)
}
// odd and even numbers
for(let i = 10; i <=50; i++){
    if(i % 2 == 1){
        continue;
    }
    else{
        // console.log(i);
    }
}
// 1-100 prime number
for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}

let km = 4;
let miles = km/1.60934;
console.log(miles);




// const number = 145;
function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

const mynumbers = isEven(26585);
console.log(mynumbers);

function leapyear(year){
    if(year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}
const myYear = 2024;
const result4 = leapyear(myYear);
console.log(result4);

