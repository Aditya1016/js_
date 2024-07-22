const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) { 
//     console.log(`ac: ${acc} and ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "py course",
        price: 99
    },
    {
        itemName: "web dev course",
        price: 5999
    },
    {
        itemName: "ds course",
        price: 12999
    },
]

const myTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(myTotal);