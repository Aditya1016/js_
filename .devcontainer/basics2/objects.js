// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full Name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 20,
    location: "Jaipur",
    email: "hites@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// // console.log(JsUser."full Name");
// console.log(JsUser["full Name"]);

// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);

// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "hites@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "hites@microsoft.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());