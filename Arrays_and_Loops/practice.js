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








