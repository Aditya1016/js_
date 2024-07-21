const myArray = []

console.log(Object.keys(myArray).length);

// NULLISH Coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10  => 5
// val1 = null ?? 10  => 10
// val1 = undefined ?? 15  => 15
val1 = null ?? 10 ?? 20

console.log(val1);

//ternarny operator

// consition ? true : false

const icePrice = 100

icePrice <= 80 ? console.log("true") : console.log("false")