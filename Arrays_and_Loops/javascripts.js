// // arrays, loops, Test-Driven Development(TDD)
// // Array: an ordered collection of items (strings, numbers, or other things)
// // JavaScript Arrays from W3Schools
// const cars = ["Saab","Volvo","BMW"];
// console.log(cars);

// const carsA = [];
// carsA[0] = "Saab";
// carsA[1] = "Volvo";
// carsA[2] = "BMW";
// console.log(carsA);

// let car = cars[0];
// console.log(car); //Saab

// cars[0] = "Opel";
// console.log(cars);

// const fruits = ["Banana","Orange","Apple","Mango"];
// //toString() converts an array to a string of (comma separated) array values
// let fruitString = fruits.toString();
// console.log(fruitString);

// console.log(cars);

// // Arrays are special type of objects. 
// // The typeof operator returns "object" for arrays
// const person = ["John","Doe",46];
// console.log(person[0]); 

// const person1 = {firstName:"John", lastName:"Doe", age:46};
// console.log(person1.lastName);

// // Array ELements Can Be Objects
// // JavaScipt varaibles can be objects. Arrays are special kinds of objects.
// // myArray[0] = Date.now;
// // myArray[1] = myFunction;
// // myArray[2] = myCars;

// // Array Properties and Methods
// cars.length;
// cars.sort();

// console.log(cars.sort());
// console.log(cars);

// const fruitsA = ["Banana","Orange","Apple","Mango"];
// let length = fruits.length;
// console.log(length);

// // Accessing the First Array Element
// let fruit = fruitsA[0];
// console.log(fruit); //Banana

// // Accessing the Last Array Element
// let fruitLast = fruitsA[fruitsA.length - 1];
// console.log(fruitLast);

// {/* <p id="demo"></p> */}
// //Looping Array Elements
// let fLen = fruits.length;

// // let text = "<ul>";
// // for (let i = 0; i < fLen; i++) {
// //     text += "<li>" + fruits[i] + "</li>";
// // }

// // text += "</ul>"
// // document.getElementById("demo").innterHTML = text;
// console.log("Using a for loop: ");
// for (let i = 0; i < fLen; i++) {
//     let print = fruits[i];
//     console.log(print);
// }
// console.log("Array.forEach(): ");
// // Can also use Array.forEach() function 
// fruits.forEach(myFunction);

// function myFunction(currentValue) {
//     console.log(currentValue);
// }

// // Adding Array Elements
// fruits.push("Lemon");
// console.log(fruits);

// fruits[fruits.length] = "passion fruit";
// console.log(fruits);

// fruits[10] = "Lemon";
// console.log(fruits); // Creates undefined "holes" in fruits

// // Associative Arrays
// // Arrays with named indexes are called associative arrays (or hashes)
// const personA = [];
// personA[0] = "John";
// personA[1] = "Doe";
// personA[2] = 46;
// console.log(personA.length);
// console.log(personA[0]);

// const personB = [];
// personB["firstName"] = "John";
// personB["lastName"] = "Doe";
// person["age"] = 46;
// console.log(personB.length);
// console.log(personB[0]);

// // The Difference Between Arrays and Objects
// // In JS, arrays use numbered indexes
// // In JS, objects use named indexes
// // Arrays are a special kind of objects, with numbered indexes

// // JavaScript new Array()
// // JS has a built-in array constructor new Array()
// // But don't use it because it might cause some errors

// // How to Recognize an Array
// isArray = Array.isArray(fruits);
// console.log(isArray);

// console.log(fruits instanceof Array);

// console.log("-------------------------------------");
// console.log("-------------------------------------");

// // JavaScript Array Methods
// const fruitsB = ["Banana","Orange",'Apple','Mango'];
// let size = fruitsB.length;

// console.log(size);

// // JavaScript Array toString()
// // toString() converts an array to a string of (comma separated) array values
// console.log(fruitsB.toString());
// // at() can use negative number
// let fruitPicked = fruitsB.at(-4); // can insert a negative number
// console.log(fruitPicked);
// console.log(fruitsB[2]);

// // JavaScript Array join()
// // join() method also joins all array elements into a string
// // it behaves like toString(), but in addition you can specify the separator
// fruitInAString = fruitsB.join(" * ");
// console.log(fruitInAString);

// // Popping and Pushing
// // popping items out of an array, pushing items into an array
// // pop() method removes the last element from an array
// console.log(fruitsB.pop());
// console.log(fruitsB);

// // push() method adds a new element to an array (at the end)
// let length2 = fruitsB.push("Kiwi")
// console.log(fruitsB);
// console.log(length2);

// // shift() removes the first array element and "shifts" all other elemtns to a lower index
// let shifted = fruitsB.shift();
// console.log(fruitsB);
// console.log(shifted);

// // JavaScript Array unshift()
// // the unshift() method adds a new element to an array (at the beginning)
// // and "unshifts" older elements
// fruitsC = ["Banana","Orange","Apple","Mango"];
// console.log(fruitsC.unshift("Lemon"));
// console.log(fruitsC);

// fruitsC[0] = "Kiwi";
// console.log(fruitsC);


// // JavaScipt Array length
// fruitsC[fruitsC.length] = "Kiwi";
// console.log(fruitsC);

// // Using delete() leaves undefined holes in the array
// delete fruitsC[0];
// console.log(fruitsC);

// // Merging Arrays
// // Concatenating means joinging strings end-to-end
// const myGirls = ["Cecilie","Lone"];
// const myBoys = ["Emil","Tobias",'Linus'];
// const myChildren = myGirls.concat(myBoys);
// console.log(myGirls);
// console.log(myBoys);
// console.log(myChildren);

// const arr3 = ["Robin","Morgan"];
// const arr4 = myGirls.concat(myBoys, arr3);
// console.log(arr4); 

// const arr5 = arr4.concat("Peter");
// console.log(arr5);

// // Array copyWithin()
// // copyWithin() method copies array elements to another position in an array
// console.log("Please see below");
// const fruitD = ["Banana","Orange","Apple","Mango"];
// console.log(fruitD);
// fruitD.copyWithin(3,0);
// console.log(fruitD);

// fruitD[3] = "mango";
// fruitD.push("Kiwi");
// fruitD.push("Papaya");
// console.log(fruitD);

// fruitD.copyWithin(2,0,2); // Copy to index 2, the elements from index 0 to 2
// console.log(fruitD);

// // Flattening an Array
// // Flattening an array is the process of reducing the dimensionality of an array
// // Flattening is useful when you want to convert a multi-dimensional array
// // into a one-dimensional array
// // flat() method creates a new array with sub-array elements concatenated to a specified depth
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);

// // JavaScript Array flatMap()
// // flatMap() method first maps all elements of an array and then creates 
// // a new array by flattening the array
// const myArr2 = [1,2,3,4,5,6];
// const newArr2 = myArr2.flatMap(x => [x,x*10, x*100]);
// console.log(newArr2);

// // Splicing and Slicing Arrays
// // splice() method adds new items to an array
// // slice() method slices out a piece of an array

// // splice() method can be used to add new items to an array
// const fruitE = ["Banana","Orange","Apple","Mango"];
// console.log(fruitE);
// console.log(fruitE.splice(2,0,"Lemon","Kiwi"));
// console.log(fruitE);

// // Using splice() to Remove Elements
// // use splice() to remove elements without leaving "holes" int eh array
// const fruitF = ["Banana","Orange","Apple","Mango"];
// console.log(fruitF.splice(0,2));
// console.log(fruitF);

// const months = ["Jan","Feb","Mar","Apr"];
// const spliced = months.toSpliced(0,1);
// console.log(spliced);
// console.log(months);

// const fruitT = ["Banana","Orange","Lemon","Apple","Mango"];
// const citrus = fruitT.slice(1,3);
// console.log(fruitT);
// console.log(citrus);

// // Loops
// // MDN's Looping Code
// const cats = ["Leopard","Serval","Jaguar","Tiger","Caracal","Lion"];

// // Given the collection cats, get the first item in the collection
// // Assign it to the variable cat and then run the code between {}
// // Then repeat
// for (const cat of cats) {
//     console.log(cat);
// }

// function toUpper(string) {
//     return string.toUpperCase();
// }

// const upperCats = cats.map(toUpper);

// console.log(upperCats);
// console.log(cats);

// function lCat(cat) {
//     return cat.startsWith("L");
// }

// const filtered = cats.filter(lCat);

// console.log(filtered);

// const filtered2 = cats.filter((cat) => cat.startsWith("L"));
// console.log(filtered2);

// // for (initializer; condition; final-expression) {
// //          code to run
// // }

// // initializer - a variable set to a number, can also refer to as 
// // counter variable
// // condition
// // final-expression

// for (const cat of cats) {
//     console.log(cat);
// }

// console.log("----------------------");
// for (let i = 0; i < cats.length; i++) {
//     console.log(cats[i]);
// }

// //----------------------------------------
// const cats2 = ["Pete","Biggles","Jasmine"];
// let myFavouriteCats = "My cats are called ";

// // for (const cat of cats2) {
// //     myFavouriteCats += `${cat}, `;
// // }

// for (let i = 0; i < cats2.length; i++) {
//     if (i === cats2.length - 1) {
//         myFavouriteCats += ` and ${cats2[i]}.`;
//     } else {
//         myFavouriteCats += `${cats[i]}, `;
//     }
// }

// console.log(myFavouriteCats);

// // Exiting loops with break 
// // Skipping iterations with continue
// // While and do...while

// // initializer
// // while(condition) {
// //     // code to run
// //     final-expression
// // }

// // cats2
// // myFavouriteCats2
// let myFavouriteCats2 = "My cats are called ";
// let i = 0;

// while (i < cats2.length) {
//     if (i === cats2.length - 1) {
//         myFavouriteCats2 += `and ${cats2[i]}.`;
//     } else {
//         myFavouriteCats2 += `${cats2[i]}, `;
//     }
//     i++;
// }

// console.log(myFavouriteCats2);

// // initializer
// // do {
// //    // code to run
// //    final-expression
// //} while (condition)

// // j 
// let j = 0;
// // console.log(cats2);

// let myFavouriteCats3 = "My cats are called ";
// do {
//     if (j === cats2.length - 1) {
//         myFavouriteCats3 += `and ${cats2[j]}.`;
//     } else {
//         myFavouriteCats3 += `${cats2[j]}, `;
//     }

//     j++;
// } while (j < cats2.length);

// console.log(myFavouriteCats3);

// Active learning: Launch countdown
// print out a simple countdown to the output box, from 10 down to Blastoff
// Loop from 10 down to 0. 

// for (let i = 10; i > 0 ; i--) {

// }


// JAVASCRIPT.INFO
// Loops: while and for 
// The "while" loop
// while (condition) {
//     // code
//     // so-called "loop body"
// }

// let i = 0;
// while (i < 3) {
//     alert(i);
//     i++;
// }

// let i = 3;
// while (i) { // when i becomes 0, the condition becomes falsym and the loop stops
//     alert(i);
//     i--;
// }

// The "do...while" loop
// do {
//     // loop body
// } while (condition);

// use do... while loop if you want the body of the loop to 
// execute at least once
// let i = 0;
// do {
//     alert(i);
//     i++;
// } while (i < 3);

// The "for" loop
// for (begin; condition; step) {
//     // ... loop body...
// } 

// for (let i = 0; i < 3; i++) {
//     alert(i);
// }

// Inline variable declaration
// for (let i = 0; i < 3; i++) {
//     alert(i); 
// }
// alert(i);

// let  i = 0;
// for (i = 0; i < 3; i++) {
//     alert(i);
// }

// alert(i);

// Skipping parts
// let i = 0;
// for (; i < 3; i++) {
//     alert(i);
// }

// let i = 0;
// for (; i < 3;) {
//     alert(i++);
// }

// Breaking the loop
// let sum = 0;
// while (true) {
//     let value = +prompt("Enter a number","");
//     if (!value) break; 
//     sum += value;
// }
// alert('Sum: ' + sum);

// continue stops the current iteration and forces the loop to start a new one
// Continue to the next iteration
// for (let i = 0; i < 10; i++) {
//     // if true, skip the remaining part of the body
//     if (i % 2 == 0) continue;
//     alert(i);
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2) {
//         alert(i);
//     }
// }


// No break/continue to the right side of '?'
// let i = 10;
// if (i > 5) {
//     alert(i);
//     i--;
// } else {
//     continue;
// }

// (i > 5) ? alert(i) : continue;

// Labels for break/continue
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) { 
//         let input = prompt(`Value at coords (${i}, ${j})`, '');
//         // what if we want to exit to Done (below)?
//     }
// }

// alert('Done!');

// a label is an identifier with a colon before a loop
// labelName: for (...) {
//     ...
// }

// outer: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) { 
//         let input = prompt(`Value at coords (${i}, ${j})`, '');
//         // what if we want to exit to Done (below)?
//         // if an empty string or canceled, then break out of both loops
//         if (!input) break outer;
//     }
// }

// alert('Done!');

// Labels do not allow to "jump" anywhere
// label: {
//     break label;
// }

// Tasks
// Last loop value
// 1

// let i = 0;
// while (i++ < 5 ) alert (i);
// Which values does the while loop show?
// alert (i); // 1 2 3 4 
// alert (i); // 1 2 3 4 5

// Which values get shown by the "for" loop?
// 0 1 2 3 4 
// 0 1 2 3 4

// Output even numbers in the loop






