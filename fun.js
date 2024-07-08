console.log("Intro to Web");

//JS is Interpreted Language =compilation+Execution
//Line by line execution
//case-1
console.log(a); //not defined - error
// case-2
console.log(a);
var a = 10; //undefined
//case-3
console.log(a); //not defined
var a = 10; //-- This happens because of compilation and execution
console.log(a); //10

//floating up - hoisting  (MYTH)
//var a;
//console.log(a);
//a=10;
//console.log(a);

// console.log(b);
// let b = 10;
// console.log(b);

var price = 300;

function getprice() {
  console.log(price);
  var price = 400;
  console.log(price);
}
getprice();

// let prices = 30;

// function getprices() {
//   console.log(prices);
//   let prices = 4000;
//   console.log(prices);
// }
// getprices();

//Initialization - creating a space in the memory
//Assign - giving value to the memory

//In JS JIT(Just in Time) compilation happens
// It will be in 2 phases - compilation and execution
//compilation - everything will be skipped other than declarations
//execution -

//TDZ(Temporary Dead Zone) - area where we can't access the variable (above the let,const)

var price = 300;

function getprice() {
  console.log(price); //300
  console.log(price); //300
}
getprice();

var price = 300;

function getprice() {
  console.log(price); //undefined
  var price = 400;
  console.log(price); //400
}
getprice();

//SHADOWING -- to access the variable if its there inside with the same then we cannot access the outer one

let x = 10;

function foo() {
  let x = 20; //shadows the outer value(let x=10) (if its with the same name)
  console.log(x); //output=20  //limelight
}

foo();
console.log(x); //output=10 (as it is outside the function)  //shadow

//Example:
function func() {
  var a = "Geeks";
  if (true) {
    var a = "GeeksforGeeks"; // New value assigned
    console.log(a); //GeeksforGeeks
  }
  console.log(a); //GeeksforGeeks
}
func();

//var is functional scope

function func() {
  let a = "Geeks";
  if (true) {
    let a = "GeeksforGeeks";
    console.log(a); //GeeksforGeeks
  }
  console.log(a); //Geeks
}
func();
//let and const are block scopes

//If we want to get both the outputs are geeks only,
function func() {
  let a = "Geeks";
  if (true) {
    //let a = "GeeksforGeeks";
    console.log(a); //Geeks
  }
  console.log(a); //Geeks
}
func();
//let doesn't allow for redeclaring

//Function(First Class Citizens)
//1.Function can be treated as value(Function can be passed to another function)
//2.Function returning another function
//3.Assigning function to variable

//Function can be passed to another function
function say() {
  return "hello";
}
function greet(hellomsg, name) {
  console.log(hellomsg() + name);
}
greet(say, "JS"); //helloJS
//Function taking function as an argument is higher order function

//Function returning another function
//How to print Hello!
function say() {
  return function () {
    //when a function doesn't have any name- it is called anonymus function
    console.log("Hello!");
  };
}
say();

let codeword = "Hulk";
function space() {
  let qstn = "Please provide code word";

  function codewordcheck() {
    let pass = "Hulk";
    console.log(qstn);

    if (pass === codeword) {
      console.log("welcome");
    } else {
      console.log("Access denied");
    }
  }
  codewordcheck();
}
space();
//Output
// Please provide code word
// welcome
