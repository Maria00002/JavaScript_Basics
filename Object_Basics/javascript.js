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
// let arr = [1,2,3,4,5];
// let result = arr.reduce((sum,current)=> sum + current,0);
// console.log(result);

// console.log(Array.isArray({}));
// console.log(Array.isArray([]));

// const ages = [3,10,18,20,25,30,1];

// function checkAge(age) {
//     return age >18;
// }

// function myFunction() {
//     return ages.find(checkAge);
// }

// console.log(myFunction());
// console.log(ages);

// Filter()
// const ages = [32,33,16,40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//     return age >= 18;
// }

// console.log(result);
// console.log(ages);

// map()
// const numbers = [4,9,16,25];
// let result = numbers.map(Math.sqrt);
// console.log(result);
// console.log(numbers);

// const numbers = [65,44,12,4];
// const newArr = numbers.map(myFunction);

// function myFunction(num) {
//     return num *10;
// }

// console.log(newArr);
// console.log(numbers);

// const persons = [
//     {firstname: "Malcom", lastname: "Reynolds"},
//     {firstname: "Kaylee", lastname: "Frye"},
//     {firstname: "Jayne", lastname: "Cobb"},
// ];

// let result = persons.map(getFullName);

// function getFullName(item) {
//     return [item.firstname, item.lastname].join(" "); 
// }

// console.log(result);


// let text = "";
// const fruits = ["apple","orange","cherry"];
// fruits.forEach(myFunction);

// function myFunction(item, index) {
//     text += index + ": " + item;
//     console.log(text);
//     text = "";
// }

// let sum = 0;
// const numbers = [65,44,12,4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//     sum += item;
// }

// console.log(sum);

// const numbers = [65,44,12,4];
// numbers.forEach(myFunction);

// function myFunction(item,index,arr) {
//     arr[index] = item *10;
// }

// console.log(numbers);

// const numbers = [175, 50, 25];
// console.log(numbers.reduce(myFunc));

// function myFunc(total, num) {
//     return total - num;
// }

// const numbers = [15.5,2.3,1.1,4.7];
// console.log(numbers.reduce(getSum,0));

// function getSum(total, num) {
//     return total + Math.round(num);
// }

// Tasks
// Translate border-left-width to borderLeftWidth

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// function camelize(word) {
//     let newWord = word.split("-");
//     for(let i = 1; i < newWord.length; i++) {
//         newWord[i] = newWord[i][0].toUpperCase() + newWord[i].slice(1);
//     }
//     return newWord.join("");
// }


// function camelize(str) {
//     return str
//         .split("-")
//         .map(
//             (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join("")
// }


// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));


// Filter range
// function filterRange(arr,a,b) {
//     return arr.filter((item) => (item >= a && item <= b));
// }

// let arr = [5,3,8,1];
// let filtered = filterRange(arr,1,4);
// console.log(filtered); // 3,1
// console.log(arr); // 5,3,8,1

// Filter range "in place"
// let arr = [5,3,8,1];
// filterRangeInPlace(arr,1,4); // removed the numbers except from 1 to 4
// console.log(arr); // [3,1]

// function filterRangeInPlace(arr, a, b) {
//     let result = arr.filter((item) => (item >= a && item <= b));
//     let oldLength = arr.length;
//     arr.push(...result);
//     arr.splice(0, oldLength);
//     return arr;
// }

// function filterRangeInPlace(arr, a, b) {
//    for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     if (val < a || val > b) {
//         arr.splice(i,1);
//         i--;
//     }
//    }
// }

// Sort in decreasing order
// let arr = [5,2,1,-10,8];


// arr.sort(numericSort);
// function numericSort(a,b) {
//     return b-a;
// }

// console.log(arr); // 8 5 2 1 -10

// Copy and sort array
// let arr = ["HTML","JavaScript","CSS"];
// let sorted = copySorted(arr);

// // function copySorted(arr) {
// //     let newArray = [];
// //     newArray.push(...arr);
// //     return newArray.sort();
// // }

// function copySorted(arr) {
//     return arr.slice().sort();
// }

// console.log(sorted); // CSS HTML JavaScript
// console.log(arr); // HTML JavaScript css


// Shuffle an array
// let arr = [1, 2, 3];

// shuffle(arr);
// shuffle(arr);
// shuffle(arr);


// function shuffle(arr) {
//     let newArr = []; 
//     for (let i = arr.length; i > 0; i--) {
//         let randomNum = Math.floor(Math.random()*i);
//         newArr.push(arr[randomNum]);
//         arr.splice(randomNum,1);

//     }
//     arr.splice(0,arr.length);
//     arr.push(...newArr);
//     console.log(arr);
// }

// let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0,
// };

// for (let i = 0; i < 1000000; i++) {
//     let array = [1,2,3];
//     shuffle(array);
//     count[array.join("")]++;
// }

// for (let key in count) {
//     console.log(`${key}: ${count[key]}`);
// }


// Filter unique array members
// function unique(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!newArr.includes(arr[i])) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// let strings = ["Hare","Krishna","Hare","Krishna","Krishna",
//                 "Krishna","Hare","Hare",":-O"];

// console.log(unique(strings)); // Hare Krishna :-O

// Objects from JavaScript.Info
// Tasks
// Hello, object
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// Check for emptiness
// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// let schedule = {};
// console.log(isEmpty(schedule)); //true
// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule)); //false

// Sum object properties
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// function sumSalaries(salary) {
//     let sum = 0;
//     for (let key in salary) {
//         sum += salary[key];
//     }
//     return sum;
// }

// console.log(sumSalaries(salaries));

// Multiply numeric property values by 2
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
// };

// multiplyNumeric(menu);

// function multiplyNumeric(menu) {
//     for (let key in menu) {
//         if (Number.isInteger(menu[key])) {
//             menu[key] *= 2;
//         }
//     }
// }

// console.log(menu);


// JavaScript object basics
// const person = {
//     name: ["Bob","Smith"],
//     age: 32,
//     bio: function() {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     },
//     introduceSelf: function () {
//         console.log(`Hi! I'm ${this.name[0]}.`);
//     },
// };

// const person = {
//     name: ["Bob","Smith"],
//     age: 32,
//     bio() {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     },
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name[0]}.`);
//     },
// };

// person.age = 45;
// person["name"]["last"] = "Cratchit";

// console.log(person.age);
// console.log(person["name"]["last"]);

// person["eyes"] = "hazel";
// person.farewell = function() {
//     console.log("Bye everybody!");
// };

// console.log(person["eyes"]);
// person.farewell();

// const myDataName = nameInput.value;
// const myDataValue = nameValue.value;
// person[myDataName] = myDataValue;

// const myDataName = "height";
// const myDataValue = "1.75m";
// person[myDataName] = myDataValue;

// console.log(person.height);

// function Person(name) {
//     this.name = name;
//     this.introduceSelf = function() {
//         console.log(`Hi! I'm ${this.name}.`);
//     }
// }

// const salva = new Person("Salva");
// salva.introduceSelf();

// const frankie = new Person("Frankie");
// frankie.introduceSelf();


// Finish Test your skills: object basics from mdn web docs

// Array methods exercises
// Map to names
// let john = {name: "John", age: 25};
// let pete = {name: "Pete", age: 30};
// let mary = {name: "Mary", age: 28};

// let users = [john, pete, mary];
// let names = users.map((item) => item.name);
// console.log(names);

// Map to objects
// let john = {name: "John", surname: "Smith", id: 1};
// let pete = {name: "Pete", surname: "Hunt", id: 2};
// let mary = {name: "Mary", surname: "Key", id: 3};

// let users = [john, pete, mary];

// let usersMapped = users.map (user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));

// console.log(usersMapped[0].id);
// console.log(usersMapped[0].fullName);

// Sort users by age
// let john = {name: "John", age: 25};
// let pete = {name: "Pete", age: 30};
// let mary = {name: "Mary", age: 28};

// let arr = [pete, john, mary];

// sortByAge(arr);

// function sortByAge(arr) {
//     return arr.sort((a,b) => a.age - b.age);
// }


// console.log(arr[0].name); //John
// console.log(arr[1].name); //Mary
// console.log(arr[2].name); //Pete


// Get average age
// let john = {name: "John", age: 25};
// let pete = {name: "Pete", age: 30};
// let mary = {name: "Mary", age: 29};

// let arr = [pete, john, mary];
// console.log(getAverageAge(arr)); //28

// function getAverageAge(users) {
//     let sum = 0;
//     for (let key in users) {
//         sum += users[key]["age"];
//     }
//     return (sum/users.length);
// }


// Create keyed obejct from array
// let users = [
//     {id:"john", name: "John Smith", age: 20},
//     {id:"ann", name: "Ann Smith", age: 24},
//     {id:"Pete", name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);

// function groupById(array) {
//     return array.reduce((obj, value) => {
//         obj[value.id] = value;
//         return obj;
//     }, {})
// }

// Finish exercise 12 to 16

// Array.prototype.reduce()
// const array = [1, 2, 3, 4];
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator,currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);

// const array = [15,16,17,18,19];
// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(`accumulator: ${accumulator}, currentValue: ${currentValue},
//     index: ${index}, returns: ${returns}`,);
//   return returns;
// }

// array.reduce(reducer);

// const array = [15,16,17,18,19];

// let result = array.reduce(
// 	(accumulator, currentValue) => accumulator + currentValue, 10,
// );

// console.log(result);

// Sum of values in an object array
// const object = [{x:1},{x:2},{x:3}];
// const sum = object.reduce(
// 	(accumulator,currentValue) => accumulator + currentValue.x, 
// 	0,
// );

// console.log(sum);

// Function sequential piping
// const pipe = 
// 	(...functions) =>
// 	(initialValue) =>
// 		functions.reduce((acc,fn) => fn(acc), initialValue);

// // Building blocks to use for composition
// const double = (x) => 2 * x;
// const triple = (x) => 3 * x;
// const quadruple = (x) => 4 * x;

// const multiply6 = pipe(double,triple);
// const multiply9 = pipe(triple, triple);
// const multiply16 = pipe(quadruple, quadruple);
// const multiply24 = pipe(double, triple, quadruple);

// console.log(multiply6(6)); //36
// console.log(multiply9(9)); //81
// console.log(multiply16(16)); //256
// console.log(multiply24(10)); //240

// Running promises in sequence
// promise sequencng is essentially function piping demonstrated in the 
// previous section, except done asynchronously
// const asyncPipe =
// 	(...functions) =>
// 	(initialValue) =>
// 		functions.reduce((acc,fn) => acc.then(fn), Promise.resolve(initialValue));

// // Building blocks to use for composition
// const p1 = async(a) => a * 5;
// const p2 = async(a) => a * 2;
// // The composed functions can also return non-promises, because the values
// // are all eventually wrapped in promises
// const f3 = (a) => a * 3;
// const p4 = async(a) => a * 4;

// asyncPipe(p1,p2,f3,p4)(10).then(console.log); //1200

// // asyncPipe can also be implemented using async/await
// const asyncPipe = 
// 	(...functions) =>
// 	(initialValue) =>
// 		functions.reduce(async(acc,fn)=> fn(await acc), initialValue);

// Using reduce() with sparse arrays
// reduce() skips missing elements in sparse arrays, but it does not 
// skip undefined values

// let result = [1,2,,4].reduce((a,b) => a + b);
// console.log(result);

// let result2 = [1,2,undefined,4].reduce((a,b) => a + b);
// console.log(result2);

// Calling reduce() on non-array objects
// const arrayLike = {
// 	length: 3,
// 	0: 2,
// 	1: 3,
// 	2: 4,
// 	3: 99, // ignored by reduce() since length is 3
// };

// console.log(Array.prototype.reduce.call(arrayLike,(x,y) => x + y));

// const val = array.reduce((acc,cur) => update(acc,cur), initialValue);

// // Is equivalent to:
// let val = initialValue;
// for (const cur of array) {
// 	val = update(val,cur);
// }


















// console.log();


// console.log();







