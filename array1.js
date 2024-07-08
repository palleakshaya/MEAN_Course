//join() method stops chaining
//Join()- always returns "string"
//split() again we can get back the chaining
//map() and filter() always returns the array

//Example:
// Top 3 Students
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 88 },
  { name: "David", score: 79 },
  { name: "Eva", score: 95 },
];

// This should output: "Eva, Bob, Charlie"

const student = students
  .sort((a, b) => b.score - a.score)
  .slice(0, 3)
  .map((studentnames) => studentnames.name);
//.filter((studentt) => studentt.score > 85)

//Math.max(...students);
console.log(student);

//Example:
// Grade is 80 or more - promote

const employees = [
  { id: 1, name: "Alice", grade: 78 },
  { id: 2, name: "Bob", grade: 85 },
  { id: 3, name: "Charlie", grade: 92 },
  { id: 4, name: "David", grade: 88 },
  { id: 5, name: "Eva", grade: 76 },
];

//status: "promoted"

const employee = employees
  .filter((emp) => emp.grade >= 80)
  .map((emp) => ({ ...emp, status: "promoted" }));
console.log(employee);

//   .map(
//     (empnames) =>
//       `id: ${empnames.id}, name:"${empnames.name}",grade:${empnames.grade}, status:"promoted" `
//   );
// console.log(employee);

//Example:
const players = [
  { name: "Alice", skills: ["defense", "speed"] },
  { name: "Bob", skills: ["speed", "attack", "strategy"] },
  { name: "Charlie", skills: ["speed", "attack"] },
  { name: "David", skills: ["strategy", "defense", "speed"] },
  { name: "Eva", skills: ["speed", "strategy"] },
];

const requiredSkills = ["speed", "strategy"];

//Output:'Bob,David, Eva'

const playernames = players
  .filter((player) =>
    requiredSkills.every((skill) => player.skills.includes(skill))
  )
  //.filter((skill) => skill.skills.includes(requiredSkills))
  .map((player) => player.name);
console.log(playernames);

const person1 = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
  // place: {
  // city: "Chennai",
  //},
};

if (person1.place && person1.place.city) {
  //the condition(undefined) will be converted to boolean
  console.log(person1.place.city);
} else {
  console.log("City is Unknown");
}
//above code is called defensive code
//To avoid this we can go for optional chaining
person1?.place?.city; //this will give undefined/error if place/city is not there
person1?.place?.city || "Unknown"; //if we want to consider all falsy values like null,undefined,zero, empty string,etc
person1?.place?.city ?? "Unknown"; //If we want to consider only null,undefined

//If key name and variable name are same then we can shorten that up
const person2 = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: age, //key is same as variable so we can make it as
  //age instead of age:age
  favoriteColors: ["blue", "green"],
};

var age = 20;

// Ex1

const person = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
};
// function getPersonInfo({
//   name: { first: firstName, last: lastName },
//   age: personAge,
//   favoriteColors: [primaryColor, secondaryColor],
// }) {
//   return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
// }
// console.log(getPersonInfo(person));
const arrow_fn = ({
  name: { first: firstName, last: lastName },
  age: personAge,
  favoriteColors: [primaryColor, secondaryColor],
}) =>
  `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;

console.log(arrow_fn(person));

// Ex2:
// function createBook(title, author, year) {
//   return {
//     title: title,
//     author: author,
//     year: year,
//     getSummary: function () {
//       return `${title} by ${author}, published in ${year}.`;
//     },
//   };
// }

const createBook = (title, author, year) => ({
  title,
  author,
  year,
  getSummary: function () {
    return `${title} by ${author}, published in ${year}.`;
  },
});

const book = createBook("1984", "George Orwell", 1949);
console.log(book.getSummary(), book);

// Ex3:
const users = [
  {
    id: 1,
    name: "Alice",
    profile: {
      age: 25,
      address: {
        city: "Wonderland",
        zip: "12345",
      },
    },
  },
  {
    id: 2,
    name: "Bob",
  },
];
// function displayUserProfile(userId) {
//   const user = users.find((u) => u.id === userId);

//   const age = user.profile.age;
//   const city = user.profile.address.city;
//   console.log(`User ${user.name} is ${age} years old and lives in ${city}.`);
// }

function displayUserProfile(userId) {
  const user = users.find((u) => u.id === userId);
  const age = user?.profile?.age || "-";
  const city = user?.profile?.address?.city || "-";

  console.log(`User ${user.name} is ${age} years old and lives in ${city}.`);
}
displayUserProfile(1); // Should work
displayUserProfile(2); // Throws  error due to missing profile data =. Hence gracefully handle the case

// Ex 4
const library = [
  {
    title: "The Great Gatsby",
    authors: ["F. Scott Fitzgerald"],
    borrowed: true,
  },
  { title: "To Kill a Mockingbird", authors: ["Harper Lee"], borrowed: true },
  { title: "1984", authors: ["George Orwell"], borrowed: true },
  { title: "The Hobbit", authors: ["J.R.R. Tolkien"], borrowed: true },
  { title: "Brave New World", authors: ["Aldous Huxley"], borrowed: true },
];
// Task 4.1: Determine if all books in the library have been borrowed.

const allBooks = library.every((book) => book.borrowed);
if (allBooks) {
  console.log("Yes, all books are borrowed");
} else {
  console.log("No, not all books are borrowed");
}

//Output:  "Yes, all books are borrowed"

// Task 4.2: Determine if there are books in the library written by multiple authors

if (library.authors.length > 1) {
  console.log("Yes, there are multiple authors");
} else {
  console.log("No, there are no multiple authors");
}
//Output: "No, there are no multiple authors"

//REDUCE
const sum = [1, 7, 3, 10, 5].reduce((acc, curr) => acc.concat(curr), []);
console.log(sum);

//finding highest value
const sum1 = [1, 7, 3, 10, 5].reduce((acc, curr) => Math.max(acc, curr));
console.log(sum1);
