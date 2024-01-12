let arr = [1,2,3,4,5]

console.log(arr);

let arr12 = arr + [6,]

console.log(typeof arr12[4]); //last ele becomes string

console.log(arr[1]); //index 1

arr.push(6)
arr.push(7)//add the element into the last

console.log(arr);

arr.pop()

console.log(arr); //delete element from the last

arr.unshift(0) // add element into the first(0) pos. not a good practice since shifting all the elements by one position is memory heavy

console.log(arr);

arr.shift() //delete the first element

console.log(arr);

console.log(arr.join()); //join all the elements into a single string with comma sep. them

console.log(arr.join().split(","))

console.log(arr.slice(1,3)); //prints elements with index 1,2
console.log(arr); //no change to the orginal arr

console.log(arr.splice(1,3)); //prints elements with index 1,2
console.log(arr); //removes the element from the orginal arr


let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]

console.log(arr1.concat(arr2)); //add two arrays

let sumArray = [...arr1,...arr2] //another method to add array (... spread operator). Better since we can add two or more arrays

console.log(sumArray);

arr2.push(arr1)
console.log(arr2);//array of array

console.log(arr2.flat(Infinity)); //will flat out the arr of arr into a single array. should specify the depth. here Infinity


console.log(Array.isArray("Roshan")); //checks if array or not

console.log(Array.from("Roshsn")); //converts to array

console.log(Array.from({name:"roshan"})) //empty array. since we didn't specify any thing to converts into array. must specify if we should convert keys or value

let num1 = 100
let num2 = 200
let num3 = 300


console.log(Array.of(num1,num2,num3));//converts the given element to array