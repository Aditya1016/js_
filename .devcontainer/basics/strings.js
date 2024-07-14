const name = "Aditya"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

console.log(name[0]);

const newString = name.substring(0,2);

console.log(newString);

const anotherString = name.slice(-5, 4);

console.log(anotherString);

const newStringOne = "     aditya     ";
const trim = newStringOne.trim();
console.log(trim);

const url = "https://aditya.com/aditya%20sinha"

console.log(url.replace('%20','-'));

console.log(url.includes('aditya'));

const gameName = "aditya-sinha-20"
console.log(gameName.split('-'));