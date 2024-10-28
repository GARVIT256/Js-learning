const mySym = Symbol("key1")


const JsUser = {
    name: "Garvit",
    "full name": "Garvit Gandhi",
    [mySym]: "mykey1",
    age: 19,
    location: "Delhi",
    email: "gatvit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "garvit@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "garvit@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());