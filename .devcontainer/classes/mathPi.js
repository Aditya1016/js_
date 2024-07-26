// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// descriptor.writable = true;
// descriptor.configurable = true;
// descriptor.enumerable = true;

// console.log(Math.ceil(descriptor.value));

const chai = {
    name: "ginger Chai",
    price: 250,
    isAvailable: true,

    orderChai(){
        console.log(`Chai nahi bani`)
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false,
    // configurable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }    
}