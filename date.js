
let myDate = new Date()
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(typeof myDate); //object

let myDate2 = new Date("2004-03-04")
let myDate3 = new Date(2004,3,4,11,50,2)
console.log(myDate2.toLocaleString())
console.log(myDate3.toTimeString())

let myTimeStamp = Date.now()
console.log(Math.floor(myTimeStamp/1000))

myDate.toDateString('default',{
    weekday:"long",
    hour12:true
})

console.log(myDate.toDateString('default',{
    weekday:"long",
    hour12:true
}));  //edit the format of printing