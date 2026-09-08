

// export default function DoSomething() {

// }


// Arrow function
// export const DoSomething = () => {

// }


// <button OnClick={() => {
//     console.log("Hello World!")
// }}>

// </button>

// Ternary operator

// let age = 18;

// const component = () => {
//     return age > 18 ? <div> Balram </div> : <div> Vanshika </div>
// }


// Objects

// const person = {

//     name: "Vanshika",
//     age: 18,
//     IsMarried: false,
// };

// const person2 = { ...person, name: "Balram" };

// const names = ["Riya","Vanshika", "Nisha"];

// const names1 = [...names, "Sakshi"];

// methods

// names.map((name) => {
//     console.logh(name);
//     return <h1> {name}</h1>  // in react
// })


// names.filter((name) => {
//     return name != "Vanshika";
// })

// Synchronous JavaScript

// Synchronous = one task at a time, in order.

// JavaScript waits for the current task to finish before moving to the next one.


// Asynchronous JavaScript

// JavaScript can start a task and continue doing other work without waiting for that task to finish.

// async await is better than promise chaining is better than callback hell



// console.log("One");
// console.log("Two");

// setTimeout(() => {
//     console.log("Hello")
// },4000)
// console.log("Three");
// console.log("Four");


// firstly one,two,three,four will be executed and then after 4 sec hello will be executed
// setTimeout also ises a callback function as an argument

// Callback hell

getdata = (data,nextData) => {
    setTimeout(() => {
        console.log("data",data);
    if(nextData){
        nextData();
    }},2000);
} 

getdata(123,() => {
    getdata(125,() =>{
        getdata(126);
    })
} )



// 14. Diagonal Difference

// For a square matrix, find the absolute difference between the main diagonal sum and secondary diagonal sum.

// Input

// 3
// 1 2 3
// 4 5 6
// 7 8 9

// Main diagonal:

// 1 + 5 + 9 = 15

// Secondary:

// 3 + 5 + 7 = 15

// Output

// 0



// String Compression + Frequency

// Write a Java program that takes N strings. For each string:

// Compress consecutive repeated characters.
// If a character occurs only once consecutively, print only the character.
// Otherwise print the character followed by its count.
// Print the compressed string for each input.
// Sample Input
// 3
// aaabbcccc
// abddddddd
// xxxyzzzz
// Sample Output
// a3b2c4
// ab d7
// x3yz4

// Correct output without spaces:


// a3b2c4
// abd7
// x3yz4

// Topics: String, charAt(), loops, conditions, StringBuilder.

