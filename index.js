/*
let a = 6;
console.log(a + "this is the value")




// primitive and object data types
const item = {
    name: "arjun",
    game: true,
    age: 21,
    fellow: undefined,
}
console.log(item["age"])
item['time'] = "its over"
console.log(item);


let v = 54;
let x = "arjun"  // string
console.log(v + x)



let m = 57
let n = "tup"
console.log(typeof(m + n))


// operators
let a = 8
let b = 9
console.log("a+b=", a + b)


let a = prompt("whats your roll no?")
a = Number.parseInt(a) // converts integer into string
if (a > 9) {
    alert("this is a valid age")
}
*/
// let a = 5
// let b = 4
// console.log(typeof(a + b))



// let a = "arjun"
// console.log(typeof(a))





/*
const expr = "hello"
switch (expr) {
    case 'hi':
        console.log("it is hi")
        break;
    case 'hello':
        console.log("it is hello")
    default:
        console.log("it is hey");
}



// does your age lies between 10 and 20

let a = prompt("enter your age?")
if (a > 10 && a <= 20) {
    console.log("your age lies betwn 10 and 20")
} else {
    console.log("your age doesnot lies betwn 10 and 20")
}



// for loop

let n = prompt("enter the number")
for (i = 0; i < n; i++) {
    console.log(i)
}
 

// sum of enter user no.
let sum=0
let n=prompt("enter the number:")
for (i=0;i<=n;i++)
{
    sum +=i;}
    console.log("sum of given numer is "+sum)



// for in loop

//1st

let obj={
    rohan:34,
    rose:33,
    rin:23,
}
for ( let a in obj)
{
    console.log(a)  // name only prints
}



// 2nd

let obj={
    rohan:34,
    rose:33,
    rin:23,
}
for ( let a in obj)
{
    console.log( "the "+ a+ " has " + obj[a])  // prints both
}

// for of loop

      for ( b of "rose")
    console.log(b)          

            */



// function noop {
//     console.log("done")
//     return (a + b) / 2
// }

// let a = 4;
// let b = 3;
// console.log("average of these no. is", noop(a, b);


// let arr = [1, 2, 3]; //filter= get the required value
// arr.filter((value, index) => { // index means to know particular thing\
//     //arr.map similar to filter but returns without selection also we can use arr.find for search of element
//     // if (value == 2) {
//     //     // console.log(typeof(value));
//     console.log(index)
//         // // 
// });


// let arr = [2, 3, 4, 5];
// console.log(arr.length);

//lopp
// for in ,for each, for of

// let arr = [1, 2, 3, 4]
// arr.forEach((value) => {
// //     console.log(value);

// // });

// let arr = [1, 2, 3, 4];

// // for (let i in arr)       // similar as index
// for (let i of arr) {           // similar as value display
//     console.log(i)
// // }



// // Object
// let person = {
//     name: "arjun",
//     roll: 12,
//     printname: function() {
//         console.log("my name is:", this.name)
//     }
// };
// person.printname();
// // console.log(person.name, person.roll)


// let persons = [{
//     name: "name1",
//     roll: 1,
// }, {
//     name: "name2",
//     roll: 2,
// }, {
//     name: "name3",
//     roll: 3,
// }];
// //array
// persons.filter((person) => {
//     if (person.name == "name2") {
//         console.log(person);
//     }
// });
// // let person={};//object

// let a = 5;

console.log(a)
let a = 5;