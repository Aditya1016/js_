// ["","",""]
// [{},{},{}]

//for of

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    // console.log(i);
}

const map = new Map();

map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// for in

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "Swift by apple"
}

for (const key in myObject) {
    // console.log(myObject[key]);
}

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

