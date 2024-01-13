// let mySym = Symbol("KEY!")

// let obj = {
//     name:"Roshan",
//     [mySym]:"KEY1",
//     "full name":"Roshan Muhammed",
//     age:20,
//     loc:"anupuram"
// }

// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj["full name"]);
// console.log(obj[mySym]);

// // singleton
// // Object.create

// // object literals


// Object.freeze(obj) //can freeze objects

// obj.name = "ROsja"

// console.log(obj);//name doesn't change

// obj.greetings = function(){
//     console.log("Hello World");
// }

// console.log(obj.greetings)

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


let userDetails = {
    name:"Roshan",
    age:19,
    class:12,
    degree:"B.Tech CSE",
    marks:{
        sci:{
            phy:100,
            chem:98,
            bio:30
        },
        eng:80,
        sst:98,
        maths:100
    }
}

let address = {
    no:21,
    street:"anupuram",
    city:"chennai"
}

let finalObj1 = {userDetails,address}
console.log(finalObj1); //wrong

let finalObj2 = {...userDetails,...address}
console.log(finalObj2);//crt

//array of objects

let arrObjs = [
    {
        name:"roshan",
        age:18
    },
    {
        name:"muhammed",
        age:19
    },
    {
        name:"api",
        age:20
    },
]

for (let i = 0; i < arrObjs.length; i++) {
    console.log(arrObjs[i].name);
    
}


console.log(Object.keys(finalObj2));
console.log(Object.values(finalObj2));
console.log(Object.hasOwnProperty("name"));
