//////// MDN's Looping Code
// const cats = ["Leopard","Serval","Jaguar","Tiger","Caracal","Lion"];

// for (const cat of cats) {
//     console.log(cat);
// }


// function toUpper(string) {
//     return string.toUpperCase();
// }

// const cats = ["Leopard","Serval","Jaguar","Tiger","Caracal","Lion"];
// const upperCats = cats.map(toUpper);

// console.log(upperCats);
// console.log(cats);

// function lCat(cat) {
//     return cat.startsWith("L");
// }

// const cats = ["Leopard","Serval","Jaguar","Tiger","Caracal","Lion"];
// const filtered = cats.filter(lCat);

// console.log(filtered);


// const cats = ["Leopard","Serval","Jaguar","Tiger","Caracal","Lion"];

// const filtered = cats.filter((cat)=> cat.startsWith("L"));
// console.log(filtered);

// const cats = ["Leopard","Serval","Jaguar","Tiger","Caracal","Lion"];

// // for (const cat of cats) {
// //     console.log(cat);
// // }

// for (let i = 0; i < cats.length; i++) {
//     console.log(cats[i]);
// }

// const cats = ["Pete","Biggles","Jasmine"];
// let myFavoriteCats = "My cats are called ";

// for (const cat of cats) {
//     myFavoriteCats += `${cat}, `;
// }

// console.log(myFavoriteCats);

// const cats = ["Pete","Biggles","Jasmine"];
// let myFavoriteCats = "My cats are called ";

// for (let i = 0; i < cats.length; i++) {
//     if (i === cats.length -1) {
//         myFavoriteCats += `and ${cats[i]}.`;
//     } else {
//         myFavoriteCats += `${cats[i]}, `;
//     }
// }
// console.log(myFavoriteCats);

// const contacts = [
//     "Chris:2232322",
//     "Sarah:3453456",
//     "Bill:7654322",
//     "Mary:9998769",
//     "Dianne:9384975",
// ];
// const para = document.querySelector("p");
// const input = document.querySelector("input");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     const searchName = input.value.toLowerCase();
//     input.value = "";
//     input.focus();
//     para.textContent = "";
//     for (const contact of contacts) {
//         const splitContact = contact.split(":");
//         if (splitContact[0].toLowerCase() === searchName) {
//             para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
//             break;
//         }
//     }
//     if (para.textContent === "") {
//         para.textContent = "Contact not found.";
//     }
// });

// let num = +prompt("Enter a number: ","");
// for (let i = 1; i <= num; i++) {
//     let sqRoot = Math.sqrt(i);
//     // console.log(sqRoot);
//     if (Math.floor(sqRoot)!== sqRoot) {
//         continue;
//     }
//     console.log(i);
// }


// const cats = ["Pete","Biggles","Jasmine"];
// let myFavoriteCats = "My cats are called ";

// let i = 0;

// while (i < cats.length) {
//     if (i === cats.length - 1) {
//         myFavoriteCats += `and ${cats[i]}.`;
//     } else {
//         myFavoriteCats += `${cats[i]}, `;
//     }

//     i++;
// }

// console.log(myFavoriteCats);


// const cats = ["Pete","Biggles","Jasmine"];
// let myFavoriteCats = "My cats are called ";

// let i = 0;

// do {
//     if (i === cats.length -1) {
//         myFavoriteCats += `and ${cats[i]}.`;
//     } else {
//         myFavoriteCats += `${cats[i]}, `;
//     }
    
//     i++;

// } while (i < cats.length);

// console.log(myFavoriteCats);

/////////// Active Learning: Launch countdown
////////// If the number is 10, print "Countdown 10"
////////// If the number is 0, print "Blast off!"
////////// For any other number, print just the number
// let i = 10;
// while (i >= 0) {
//     if (i == 10) {
//         console.log("Countdown 10");
//     } else if ( i == 0) {
//         console.log("Blast off");
//     } else {
//         console.log(i);
//     }
//     i--;
// }

///// Active learning: Filling in a guest list
//// Don't want to invite Phil and Lola
//// Have two lists: one for guests to admit, one for guests to refuse

// const people = ["Chris","Anne","Colin","Terri","Phil","Lola","Sam","Kay","Bruce"];
// let admitted = "";
// let refused =  "";

// for (const guest of people) {
//     if (guest == "Phil" || guest == "Lola") {
//         refused += `${guest}, `;
//     } else {
//         admitted += `${guest}, `;
//     }
// }

// refused = refused.slice(0,refused.length-2) + ".";
// admitted = admitted.slice(0, admitted.length-2) + ".";
// console.log(refused);
// console.log(admitted);

///// use map() to do something to each item in a collection and create 
//// a new collection containing the changed items
//// map() calls the function once for each item in the array, passing
//// in the item. 
// function toUpper(string) {
//     return string.toUpperCase();
// }

// const cats = ["Leopard","Serval","Jaguar","Tiger","Caracal","Lion"];
// const upperCats = cats.map(toUpper);
// console.log(cats);
// console.log(upperCats);

////// use filter() to test each item in a collection, and create 
////// a new collection containing only items that match
// function lCat(cat) {
//     return cat.startsWith("L");
// }

// const cats = ["Leopard","Serval","Jaguar","Tiger","Caracal","Lion"];

// const filtered = cats.filter(lCat);
// console.log(filtered);


////// Loops: while and for
// let i = 0;
// while (i < 3) {
//     alert(i);
//     i++;
// }

// let i = 3;
// while (i) {
//     alert(i);
//     i--;
// }

// let i = 0;
// do {
//     alert(i);
//     i++;
// } while (i < 3);

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

// console.log(i);

// let i = 0;
// for (i = 0; i < 3; i++) {
//     console.log(i);
// }

// console.log(i);

// let i = 0;
// for (; i < 3; i++) {
//     console.log(i);
// }

// let sum = 0;
// while (true) {
//     let value = +prompt("Enter a number","");
//     if (!value) break;
//     sum += value;
// }
// console.log("Sum: " + sum);

// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) continue;
//     console.log(i);
// }

// if (i > 5) {
//     console.log(i);
// } else {
//     continue;
// }

// outer: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         let input = prompt(`Value at coords (${i},${j})`,"");
//         if (!input) break outer;
//     }
// }
// console.log("Done!");

/////// Tasks
////// What is the last value alerted by this code? WHY?
// let i = 3;
// while (i) {
//     alert(i--);
// }

// 1 should be the last one

///// Which values does the while loop show?
// let i = 0;
// while(++i < 5) alert(i); // 1 2 3 4 

// let i = 0;
// while(i++ < 5) alert(i); // 1 2 3 4 5 

///// Loops does not output the same values

////// Which values get shown by the "for" loop
// for (let i = 0; i <5; i++) alert(i); // 0 1 2 3 4 
// for (let i = 0; i <5; ++i) alert(i); // 0 1 2 3 4 

//// Output even numbers in the loop
//// Use the for loop to output even numbers from 2 to 10
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


///// Replace "for" with "While" 
// for (let i = 0; i < 3; i++) {
//     console.log(`number ${i}!`);
// }

// let i = 0;
// while (i < 3) {
//     console.log(`number ${i}!`);
//     i++;
// }

/////// Repeat until the input is correct
/////// Write a loop which prompts for a number greater than 100.
////// If the visitor enters another number - ask them to input again
// let number;
// do {
//     number = prompt("Please enter a number greater than 100", "");
// }
// while (!((number>100) || (number=="")))

////// Output prime numbers
// let number = prompt("Please enter a number: ","");
// nextPrime: 
// for (let i = 2; i <= number; i++) {
//     for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextPrime;
//     }
//     console.log(i); 
       
// }


//////// Arrays
// const a = ["A","B","C","D"];
// // a.push("E");
// a.push([1,2]);

// const a = [["A","B"],["1,2"]];
// a[0] = 1;
// console.log(a);

/////// Arrays
///// Declaration
// let arr = new Array();
// let arr1 = [];

// let fruits = ["Apple","Orange","Plum"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// fruits[2] = "Pears";
// fruits[3] = "Lemon";
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits);

// let arr = ["Apple", {name:'John'}, true, function(){alert('hello');}];
// console.log(arr[1].name);
// arr[3]();

// let fruits = [
//     "Apple",
//     "Orange",
//     "Plum",
// ];
// console.log(fruits);

// let fruits = ["Apple", "Orange","Plum"];
// console.log(fruits[fruits.length-1]);
// console.log(fruits.at(-1));

// let fruits = ["Apple", "Orange","Plum"];
// console.log(fruits.pop());
// console.log(fruits);

// let fruits = ["Apple", "Orange"];
// console.log(fruits.push("Pear"));
// console.log(fruits);

// let fruits = ["Apple", "Orange","Pear"];
// console.log(fruits.shift());
// console.log(fruits);

// let fruits = ["Orange","Pear"];
// console.log(fruits.unshift("Apple"));
// console.log(fruits);

// let fruits = ["Apple"];
// fruits.push("Orange","Peach");
// fruits.unshift("Pineapple","Lemon");
// console.log(fruits);

// let fruits = ["Banana"];
// let arr = fruits;
// console.log(arr === fruits); //true
// arr.push("Pear");
// console.log(fruits);

// let fruits = [];
// fruits[99999] = 5;
// fruits.age = 25;

// let arr = ["Apple","Orange","Pear"];

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let fruits = ["Apple","Orange","Plum"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// let fruits = [];
// fruits[123] = "Apple";
// console.log(fruits.length);


// let arr = [1,2,3,4,5];
// arr.length = 2;
// console.log(arr);

// arr.length = 5;
// console.log(arr[3]);
// console.log(arr);

// arr.length = 0;
// console.log(arr);


// let arr = new Array("Apple","Pear","etc");

// let arr = new Array(2);
// console.log(arr[0]);
// console.log(arr.length);

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(matrix[0][1]);

// let arr = [1,2,3];
// console.log(arr);
// console.log(String(arr) === "1,2,3");

// console.log([] + 1);
// console.log([1] + 1);
// console.log([1,2] + 1);

// console.log([]==[]);
// console.log([0]==[0]);

// square brackets (usual)
// let arr = [item1, item2];

// let arr1 = new Array(item1, item2);

//// Tasks
// Is array copied?
// let fruits = ["APples","Pear","Orange"];
// let shoppingCart = fruits;
// shoppingCart.push("Banana");
// console.log(fruits.length); //4

// let styles = ["Jazz", "Blues"]; // 1
// console.log(styles);
// styles.push("Rock-n-Roll"); // 2
// console.log(styles);
// // styles[1] = "Classics";
// let midIndex = Math.floor(styles.length / 2); // 3
// styles[midIndex] = "Classics";
// console.log(styles);
// let value =  styles.shift(); // 4
// console.log(styles); 
// styles.unshift("Rap","Reggae"); // 5
// console.log(styles);

// let arr = ["a","b"];
// arr.push(function() {
//     console.log(this);
// });

// arr[2](); // a,b,function()

// sumInput() 
// Ask the user for values using prompt and stores the values in the array
// FInishing asking when the user enters a non-numeric value, an empty 
// string, or presses "Cancel"
// Calcualtes and returns the sum of array items

// function sumInput() {
//     let arr = [];
//     let value = prompt("Please enter a value: ","");
//     let sum = 0;
    
//     while(!(value === "" || isNaN(Number(value)) || value === null)) {
//         value = Number(value);
//         arr.push(value);
//         value = prompt("Please enter a value: ","");
//     }
//     console.log(arr);
//     for (let number of arr) {
//         sum += Number(number);
//     }
//     console.log(sum);
// }

// sumInput();

// A maximal subarray
// e.g. arr = [1,-2,3,4,-9,6]
// Task is to find the contiguous subarray of arr with the maximal sum 
// of items

//// Array methods
// let arr = ["I","go","home"];
// delete arr[1];
// console.log(arr[1]);
// console.log(arr.length);
// console.log(arr);

// arr.splice() can insert, remove and replace elements
// let arr = ["I","study","JavaScript"];
// arr.splice(1,1); // from index 1 remove 1 element
// console.log(arr);

// let arr = ["I","study","JavaScript","right","now"];
// arr.splice(0,3,"Let's","dance"); //remove first 3 elements and replace them
// console.log(arr);


// let arr = ["I","study","JavaScript","right","now"];
// let removed = arr.splice(0,2);
// console.log(removed);

// let arr = ["I","study","JavaScript"];
// arr.splice(2,0,"complex","language");
// console.log(arr);

// let arr = [1,2,5];
// arr.splice(-1,0,3,4);
// console.log(arr);

// arr.slice()
// let arr = ["t","e","s","t"];
// console.log(arr.slice(1,3)); // e s
// console.log(arr.slice(-2)); // s t


// arr.concat()
// let arr = [1,2];
// console.log(arr.concat([3,4]));
// console.log(arr);
// console.log(arr.concat([3,4],[5,6]));
// console.log(arr);
// console.log(arr.concat([3,4],5,6));
// console.log(arr);

// let arr = [1,2];

// let arrayLike = {
//     0:"something",
//     length:1
// };
// console.log(arr.concat(arrayLike));

// let arr = [1,2];
// let arrayLike = {
//     0:"something",
//     1:"else",
//     [Symbol.isConcatSpreadable]: true,
//     length: 2
// };
// console.log(arr.concat(arrayLike));

// Iterate: forEach
// Array.forEeach(function(item, index, array) {
//     // ... do something with an item
// });

// ["Bilbo","Grandalf","Nazgul"].forEach(console.log);

// ["Bilbo","Grandalf","Nazgul"].forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`);
// });

// let arr = [1,0, false, 0];
// console.log(arr.indexOf(0));
// console.log(arr.indexOf(false));
// console.log(arr.indexOf(null));
// console.log(arr.includes(1));

// let fruits = ["Apple","Orange","Apple"];
// console.log(fruits.indexOf("Apple"));
// console.log(fruits.lastIndexOf("Apple")); 

// const arr = [NaN];
// console.log(arr.indexOf(NaN));
// console.log(arr.includes(NaN));

// find and findIndex/findLastIndex
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id:3, name: "Mary"}
// ];

// let user = users.find(item => item.id == 1);
// console.log(user.name);

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"},
//     {id: 4, name: "John"}
// ];

// console.log(users.findIndex(user=> user.name =="John"));
// console.log(users.findLastIndex(user=> user.name =="John"));


// filter
// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"},
//     {id: 4, name: "John"}
//     ];

// let someUsers = users.filter(item => item.id < 4);
// console.log(someUsers.length);
// console.log(someUsers);

// Transform an array
// Transform and reorder an array
// let lengths = ["Bilbo","Gandalf","Nazgul"].map(item => item.length);
// console.log(lengths);

// let arr = [1,2,15];
// arr.sort();
// console.log(arr);

// function compareNumeric(a,b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// let arr = [1,2,15];
// arr.sort(compareNumeric);
// console.log(arr);


// [1,-2,15,2,0,8].sort(function(a,b) {
//     console.log(a+" <> " +b);
//     return a-b;
// });

// let arr = [1,2,15];
// arr.sort(function(a,b) {return a-b;});
// console.log(arr);

// let countries = ["Ostereich","Andorra","Vietnam"];
// console.log(countries.sort((a,b) => a > b ? 1 : -1));
// console.log(countries.sort((a,b) => a.localeCompare(b)));

// let arr = [1,2,3,4,5];
// arr.reverse();
// console.log(arr);

// let names = "Bilbo, Gandalf, Nazgul";
// let arr = names.split(", ");
// for (let name of arr) {
//     console.log(`A message to ${name}.`);
// }

// let arr = "Bilbo, Gandalf, Nazgul".split(", ", 2);
// console.log(arr);

// let str = "test";
// console.log(str.split(""));

// let arr = ["Bilbo","Gandalf","Nazgul"];
// let str = arr.join(";");
// console.log(str);

// let arr = [1,2,3,4,5];
// let result = arr.reduce((sum, current) => sum + current, 0);
// console.log(result);

// let arr = [];
// arr.reduce((sum, current) => sun + current, 0);

// console.log(Array.isArray({}));
// console.log(Array.isArray([]));

// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//         return user.age >= this.minAge && user.age < this.maxAge;
//     }
// };

// let users = [
//     {age: 16},
//     {age: 20},
//     {age: 23},
//     {age: 30}
// ];

// let soldiers = users.filter(army.canJoin, army);
// console.log(soldiers);
// console.log(soldiers.length);
// console.log(soldiers[0].age);
// console.log(soldiers[1].age);

// Tasks
// Translate border-left-width to borderLeftWidth
// My solution
// function camelize(str) {
//     let arr = str.split("-"); 
//     let newArr = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         newArr += arr[i][0].toUpperCase() + arr[i].slice(1);
//     }
//     return newArr;
// }

// console.log(camelize("background-color")); // backgroundColor
// console.log(camelize("list-style-image")); // listStyleImage
// console.log(camelize("-webkit-transition")); //WebkitTransition

// // Online answer
// function camelize(str) {
//     return str
//         .split("-") //splits 'my-long-word' into array["my","long","word"]
//         .map( //capitalizes first letters of all array items except the first one
//             // converts["my","long","word"] into ["my","Long","Word"]
//             (word,index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1) 
//         )
//         .join(""); // joins["my","Long","Word"] into "myLongWord"
// }

// Filter range
// Write a function filterRange(arr,a,b) that gets an array arr,
// looks for elements with values higher or equal to a
// and lower or equal to b and return a result as an array
// my solution

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// console.log(arr);

// function filterRange(arr, min, max){
//     let filtered = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= min && arr[i] <= max) {
//             filtered.push(arr[i]);
//         }
//     }
//     // console.log(Array.isArray(filtered));
//     return filtered;
// }

// function filterRange(arr, a, b) {
//     return arr.filter(item => (a <= item && item <= b));
// }

// let arr1 = ["a","b","c"];
// let str = arr1.join("");
// console.log(str);

// Filter range "in place"
// gets an array arr and removes from it all values except those that are
// between a and b 

// let arr = [5,3,8,1,12,9,16,25,2];
// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!((arr[i] >= a) && (arr[i]<= b))) {
//             arr.splice(i,1);
//             i--;
//         }
//     }
// }
// filterRangeInPlace(arr, 1, 4);
// console.log(arr); //[3,1,2]

// sort in decreasing order
// let arr = [5, 2, 1, -10, 8, 15, 20];
// arr.sort(compare).reverse();
// function compare(a,b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
// console.log(arr); // 20, 15, 8, 5, 2, 1, -10

// Online solution
// arr.sort((a,b) => b-a);
// console.log(arr);

// Copy and sort array
// an array of strings arr. Have a sorted copy of it, but keep arr unmodified
// let arr = ["HTML","JavaScript","CSS"];
// let sorted = copySorted(arr);
// function copySorted(arr) {
//     let unmodified = [];
//     let modified = [];
//     for (let item of arr){
//         unmodified.push(item);
//     }
//     modified = unmodified.sort();
//     return modified;
    
// }

// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // html, JavaScript, CSS

// Online solution
// function copySorted(arr) {
//     return arr.slice().sort();
// }

// let arr = ["HTML","JavaScript","CSS"];
// let sorted = copySorted(arr);

// console.log(sorted);
// console.log(arr);

// Create an extendable calculator
// Create a constructor function Calculator that creates "extendable"
// calculator objects
// First, implement the method calculate(str) that takes a string in the
// format "NUMBER operator NUMBER" and returns the result
// should understand + and -
// let calc = new Calculator;
// console.log(calc.calculate("3 + 7")); // 10
function calculate(str) {
    let arr = str.split(' ');
    let operator = arr[1];
    if (operator == "+") {
        return Number(arr[0]) + Number(arr[2]);
    } else if (operator == "-") {
        return Number(arr[0]) - Number(arr[2]);
    }

}
console.log(calculate("3 + 7")); // 10
console.log(calculate("3 - 7")); // -4
console.log(calculate("2 + 8")); // 10
console.log(calculate("1 + 4")); // 5
console.log(calculate("7 - 2")); // 5 













