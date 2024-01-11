let a = 1
let b = 2

console.log(a>b);//return bool
/*
>  <  == !=  <=  >= etc...
 */

let myName = "roshan"
let nameCopy = myName;
nameCopy = "muhammed"
console.log(myName);
console.log(nameCopy);


let obj = {
    rollNo:1,
    Name:"roshan"
}

let obj1= obj

obj1.Name = "muhammed"

console.log(obj.Name);