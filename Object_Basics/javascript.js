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




