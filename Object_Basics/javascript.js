// let user1 = new Object(); // "object constructor" syntax
// let user2 = {}; // "object literal" syntax

// let user = {
//     name: "John",
//     age: 30
// };

// console.log(user.name);
// console.log(user.age);

// user.isAdmin = true;

// console.log(user);

// delete user.age;
// console.log(user);

// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true,
// };

// console.log(user);

// let user = {};

// user["likes birds"] = true;
// console.log(user["likes birds"]);

// delete user["likes birds"];

// let key = "likes birds";
// user[key] = true;
// console.log(user);

// let user= {
//     name: "John",
//     age: 30,
// };

// // let key = prompt("What do you want to know about the user?", "name");

// // console.log(user[key]);

// let key = "name";
// console.log(user.key);

// let fruit = prompt("which fruit to buy?","apple");
// let bag = {
//     [fruit]: 5,
// };

// console.log(bag.apple);

// let fruit = prompt("which fruit to buy?","apple");
// let bag = {};

// bag[fruit] =  5;

// console.log(bag.apple);

// let fruit = "apple";
// let bag = {
//     [fruit + "Computers"]: 5,
// };
// console.log(bag);

// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     };
// }

// function makeUser(name,age) {
//     return {
//         name,
//         age,
//     };
// }

// let user = {
//     name,
//     age: 30
// };
// // let user = makeUser("John", 30);
// console.log(user.name);
// console.log(user.age);

// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
// };

// console.log(obj.for + obj.let + obj.return);

// let obj = {
//     0: "test"
// };

// console.log(obj[0]);
// console.log(obj["0"]);

// let obj = {};
// obj.__proto__ = 5;
// console.log(obj.__proto__);

// let user = {};
// console.log(user.noSuchProperty === undefined);

// let user = {name: "John", age: 30};

// console.log("age" in user);
// console.log("blala" in user);

// let user = {age:30};
// let key = "age";
// console.log(key in user);

// let obj = {
//     test: undefined
// };

// console.log(obj.test);
// console.log("test" in obj);

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true,
// };

// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }


// let codes = {
//     "+49":"Germany",
//     "+41":"Switzerland",
//     "+44":"Great Britain",
//     "+1":"USA"
// };

// for (let code in codes) {
//     console.log(+code);
// }

// console.log(String(Math.trunc(Number("49"))));
// console.log(String(Math.trunc(Number("+49"))));
// console.log(String(Math.trunc(Number("1.2"))));

// let user = {
//     name: "John",
//     surname: "Smith"
// };
// user.age = 25;

// for (let prop in user) {
//     console.log(prop);
// }

// Tasks
// Hello, object
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// Check for emptiness
// let schedule = {};
// console.log(isEmpty(schedule)); //true
// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule)); //false

// function isEmpty(object) {
//     for (let key in object) {
//         return false;
//     }
//     return true;
// }

// Sum object properties
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// console.log(sumSalaries(salaries));

// function sumSalaries(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         sum += obj[key];
//     }
//     return sum;
// }

// Multiply numeric property values by 2
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof(obj[key]) === "number") {
//             obj[key] *= 2; 
//         }
//     }
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
// };

// multiplyNumeric(menu);
// console.log(menu);


// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu",
// };


// JavaScript object basics
// const person = {
//     name: ["Bob","Smith"],
//     age: 32,
//     bio: function () {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)
//     },
//     introduceSelf: function () {
//         console.log(`Hi I'm ${this.name[0]}.`);
//     },
// };


// const person = {
//     // name: ["Bob","Smith"],
//     name : {
//         first: "Bob",
//         last: "Smith",
//     },
//     age: 32,
//     bio() {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)
//     },
//     introduceSelf() {
//         console.log(`Hi I'm ${this.name[0]}.`);
//     },
// };


// console.log(person.name.first);
// console.log(person.name.last);
// console.log(person.age);
// console.log(person["name"]["first"]);
// console.log(person["name"]["last"]);
// console.log(person["age"]);
// person.bio();
// person.introduceSelf();

// const person = {
//     name: ["Bob", "Smith"],
//     age: 32,
// };

// function logProperty(propertyName) {
//     console.log(person[propertyName]);
// }

// logProperty("name");
// logProperty("age");

// const person = {
//     name : {
//         first: "Bob",
//         last: "Smith",
//     },
//     age: 32,
// };

// person.age = 45;
// person["name"]["last"] = "Cratchit";

// console.log(person.age);
// console.log(person["name"]["last"]);

// person["eyes"] = "hazel";
// person.farewell = function () {
//     console.log("Bye everybody!");
// };

// console.log(person["eyes"]);
// person.farewell();

// const person = {
//     name : {
//         first: "Bob",
//         last: "Smith",
//     },
//     age: 32,
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name.first}.`);
//     },
// };

// const myDataName = "height";
// const myDataValue = "1.75m";
// person[myDataName] = myDataValue;
// console.log(person.height);

// const person1 = {
//     name : "Chris",
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name}.`);
//     },
// };

// const person2 = {
//     name : "Deepti",
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name}.`);
//     },
// };


// person1.introduceSelf();
// person2.introduceSelf();

// function createPerson(name) {
//     const obj = {};
//     obj.name = name;
//     obj.introduceSelf = function() {
//         console.log(`Hi! I'm ${this.name}.`);
//     };
//     return obj;
// }

// const salva = createPerson("Salva");
// salva.introduceSelf();

// const frankie = createPerson("Frankie");
// frankie.introduceSelf();

// function Person(name) {
//     this.name = name;
//     this.introduceSelf = function() {
//         console.log(`Hi! I'm ${this.name}.`);
//     };
// }

// const salva = new Person("Salva");
// salva.introduceSelf();

// const frankie = new Person("Frankie");
// frankie.introduceSelf();

// const myNotification = new Notification("Hello!");

// Test you skills: Object basics
// function increaseCounterObject(objectCounter) {
//     objectCounter.counter += 1;
// }

// function increaseCounterPrimitive(primitiveCounter) {
//     primitiveCounter += 1;
// }

// let object = {counter: 0};
// let primitive = 0;

// console.log(object);
// increaseCounterObject(object)
// console.log(object);

// console.log(primitive);
// increaseCounterPrimitive(primitive);
// console.log(primitive);

// let animal = {species: "dog"};
// let dog = animal;
// let exp = dog;

// animal = {species: "cat"};
// dog = {species: "somethingElse"};

// console.log(animal);
// console.log(dog);
// console.log(exp);

// Assignment
// Map to names

// let john = {name: "John", age: 25};
// let pete = {name: "Pete", age: 30};
// let mary = {name: "Mary", age: 28};

// let users = [john, pete, mary];
// // console.log(users);
// let names = users.map(item => item.name)
// console.log(names);


// Map to objects
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id    
// }));

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith


// Sort users by age
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// function sortByAge(arr) {
//     arr.sort((a,b) => a.age-b.age);
// }

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete


// Get average age
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// console.log(getAverageAge(arr));

// function getAverageAge(arr){
//     let result = arr.reduce((prev, user) => prev + user.age, 0);
//     result = result/arr.length;
//     return result;

// }


// Create keyed object from array
// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);

// function groupById(array) {
//     return array.reduce((obj, value) => {
//         obj[value.id] = value;
//         return obj;
//     }, {})
// }

// console.log(usersById);
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// let arr = ["I","go","home"];
// delete arr[1];
// console.log(arr[1]);
// console.log(arr);

// let arr = ["I","study","javascript"];
// arr.splice(1,1);
// console.log(arr);

// arr.splice(0,3,"Let's","dance");
// console.log(arr);

// let removed = arr.splice(0,2)
// console.log(removed);
// console.log(arr);

// arr.splice(2,0,"complex","language");
// console.log(arr);

// let arr = [1,2,5];
// arr.splice(-1,0,3,4);
// console.log(arr);

// let arr = ["t","e","s","t"];
// console.log(arr.slice(1,3)); // es
// console.log(arr.slice(-2)); // st

// let arr = [1,2];

// console.log(arr.concat([3,4]));
// console.log(arr.concat([3,4],[5,6]));
// console.log(arr.concat([3,4], 5,6));

// let arrayLike = {
//     0: "something",
//     1: "else",
//     [Symbol.isConcatSpreadable]: true,
//     length: 2
// };

// console.log(arr.concat(arrayLike));

// arr.forEach({

// }) ;

// ["a","b","c"].forEach(alert);

// ["a","b","c"].forEach((item,index,array) => {
//     console.log(`${item} is at ${index} in ${array}`);
// });

// let arr = [1,0, false];
// console.log(arr.indexOf(0));
// console.log(arr.indexOf(false));
// console.log(arr.indexOf(null));
// console.log(arr.includes(false));

// let fruits = ["Apple","Orange","Apple"]
// console.log(fruits.indexOf("Apple"));
// console.log(fruits.lastIndexOf("Apple"));

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"},
//     // {id: 4, name: "John"}
// ];

// // let user = users.find(item => item.id == 1);
// // console.log(user.name);

// // console.log(users.findIndex(user => user.name == "John"));
// // console.log(users.findLastIndex(user => user.name == "John"));

// let someUsers = users.filter(item => item.id < 3);
// console.log(someUsers);

// let arr = ["Bilbo","Gandalf","Nazgul"];
// let result = arr.map(item => item.length);
// console.log(result);
// console.log(arr);

// let arr = [1,2,15];
// arr.sort();
// console.log(arr);

// function compare(a,b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// function compareNumeric(a,b) {
//     return a - b;
// }

// let arrar = [1,2,15];
// arrar.sort(compareNumeric);
// console.log(arrar);

// let arr = [1,2,3,4,5];
// arr.reverse();
// console.log(arr);

// let names = "Bilbo, Gandalf, Nazgul";
// let arr = names.split(", ", 2);
// for (let name of arr) {
//     console.log(`A message to ${name}.`);
// }

// let str = "test";
// console.log(str.split(""));

// let arr = ["Bilbo", "Gandalf", "Nazgul"];
// let str = arr.join("; ");
// console.log(str);

// Reduce/ reduceRight
















// console.log();







