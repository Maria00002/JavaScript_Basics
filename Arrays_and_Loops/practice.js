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
function lCat(cat) {
    return cat.startsWith("L");
}

const cats = ["Leopard","Serval","Jaguar","Tiger","Caracal","Lion"];

const filtered = cats.filter(lCat);
console.log(filtered);



