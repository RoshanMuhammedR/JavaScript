let mySym = Symbol("KEY!")

let obj = {
    name:"Roshan",
    [mySym]:"KEY1",
    "full name":"Roshan Muhammed",
    age:20,
    loc:"anupuram"
}

console.log(obj.name);
console.log(obj["name"]);
console.log(obj["full name"]);
console.log(obj[mySym]);

// singleton
// Object.create

// object literals


Object.freeze(obj) //can freeze objects

obj.name = "ROsja"

console.log(obj);//name doesn't change

obj.greetings = function(){
    console.log("Hello World");
}

console.log(obj.greetings)

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());