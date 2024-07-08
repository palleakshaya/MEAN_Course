const a = [1, 2, 3, 4]; //address of the values remains same
a.push(5);
console.log(a); //[1,2,3,4,5]

a[0] = 9; //no error

a = [3, 5, 6, 7]; // error - because address is changing

//ARRAY METHODS
//1. array.reverse()
//reverse affects the original list(modifies) which is called "mutate" the array(original)
//spread operator - copy by value
//Immutability gives the guarantee for the value(it doesn't allow for mutation)
//methods which mutates the array and which doesn't mutate

// 5 Pillars-RMETP
//Mutable array methods - reverse()
//Immutable array methods - slice() --it takes numbers as argument,join(),map()
//String methods- split()
arr = [1, 2, 3, 4];
arr.join(); //'1,2,3,4'

arr = [1, 2, 3, 4];
arr.join("-"); //'1-2-3-4'

"1-2-3-4".split("-"); //string splitting will be string only after
//['1', '2', '3', '4']

const add = (a, b) => a + b;

//MAP - higher order function(which function takes function as an argument)

[1, 2, 3, 4].map((arr) => arr * 2);
// [2, 4, 6, 8]

//using normal for loop
arr = [1, 2, 3, 4];
arr1 = [];
for (let i = 0; i < arr.length; i++) {
  arr1.push(arr[i] * 2);
}
console.log(arr1);

//using for-in loop
function Arr(arr) {
  for (let i in arr) {
    console.log(arr[i] * 2);
  }
}
Arr(arr);
//using for-of loop
function Arrayy(arr) {
  for (let i of arr) {
    console.log(i * 2);
  }
}
Arrayy(arr);

// [1, 2, 3, 4].map((arr) => arr * 2);

function ownMap(fn, arr) {
  // your logic
  const temparr = [];
  for (let i = 0; i < arr.length; i++) {
    temparr.push(fn(arr[i]));
  }
  return temparr;
}
ownMap((arr) => arr * 2, [1, 2, 3, 4]);
// [2,4,6,8]

ownMap((arr) => arr - 2, [1, 2, 3, 4]);
// [2,4,6,8]

let v = [5, 6, 9, 10].map((x, i) => x * 2 + i);
console.log(v);

//using ownmap function
function ownMap(fn, arr) {
  const temparr = [];
  for (let i = 0; i < arr.length; i++) {
    temparr.push(fn(arr[i], i));
  }
  return temparr;
}
//const res=ownMap((arr,i) => arr * 2 + i , [1, 2, 3, 4])
console.log(ownMap((arr, i) => arr * 2 + i, [1, 2, 3, 4]));

const avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
];
// avengers.length[0]

// [1, 2, 3, 4].map((arr) => arr * 2);
avengers.map((avengerss) => avengerss.length);

//FILTER - It's also a higher order function,no mutation,i/p and o/p datatypes will be same
avengers.filter((avengerss) => avengerss.length >= 10);
//Example
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

const filtered = books.filter((ratings, i) => books[i].rating >= 4.7);
filtered.map((filters) => filters.title);

// Rating 4.7 or more

// Output
// ['A Brief History of Time', 'Clean Code', 'Sapiens' ]
