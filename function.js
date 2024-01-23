function sayName(){
    console.log("Hello my name is roshan");
}

sayName()

function sayName1(name){
    console.log("hello my name is ",name);
}

sayName1("Roshan")

function add(a,b){
    return a+b;
}

console.log(add(1,2)," ",add()); // 3 NaN

function add1(a=0,b=0){
    return a+b;
}

console.log(add1());