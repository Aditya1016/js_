const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details")
        console.log(`${this.username}`);
    }
}

// console.log(user.getUserDetails());

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User("hitesh", 1, true)
const userTwo = new User("ChaiaurCode", 12, true)
console.log(userOne);
console.log(userTwo);
