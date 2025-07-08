// Explain what the DOM is in relation to a webpage
// Explain the difference between a "node" and an "element"
// Explain how to target nodes with "selectors"
// Explain the basic methods for finding, adding, removing, and altering DOM Nodes
// Explain what "bubbling" is and how it works

// Document Object Model
// The DOM is a tree-like representation of the contents of a webpage
// <div id="container">
//    <div class="display"></div>
//    <div class="controls"></div>
//</div>

// Targeting nodes with selectors
// div.display
//.display
// #container > .display
// div#container > div.display

// // selects the #container div 
// const container = document.querySelector("#container");

// selects the first child of #container => .display
// const display = container.firstElementChild;
// console.log(display);

// selects the .controls div
// const controls = document.querySelector(".controls");
// // selects the prior sibling => .display
// const display = controls.previousELementSibling;
// console.log(display);

// DOM methods
// Query selectors
// Element.querySelector(selector) // returns a reference to the first match
//                                 // of selector

// Element.querySelectorAll(selectors) // returns a "NodeList" containing 
//                                     // references to all of the matches 
//                                     // of the selectors
// // the returned value is a NodeList, can convert it into an array
// // by using Array.from() or the speard operator

// // Element creation
// document.createElement(tagName, [options]) // creates a new element of tag
//                                            // type tagName
// // [options] in this case means you can add optional parameters to the function
// const div = document.createElement("div");
// // creates the function in memory. can manipulate the element (by adding 
// // styles, classes, ids, text, etc) before placing it on the page. 

// // can place the element into the DOM with one of the following methods
// // Append elements
// parentNode.appendChild(childNode) // appends childNode as the last child 
//                                   // of parentNode

// parentNode.insertBefore(newNode, referenceNode) // inserts newNode into 
//                                                 // parentNode before

//                                                 // referenceNode
// // Remove elements
// parentNode.removeChild(child) // removes child from parentNode on the DOM
//                               // and returns a reference to child

// // Altering elements
// // Creates a new div referenced in the variable 'div'
// const div = document.createElement("div");\

// // Adding inline style
// // adds the indicated style rule to the element in the div variable
// div.style.color = "blue";

// // adds several style rules
// div.style.cssText = "color:blue; background: white;";

// // adds several style rules
// div.setAttribute("style","color:blue; background: white;");

// // dot notation with kebab case: don't work as it attempts to subtract 
// // color from div.style.background
// // equivalent to: div.style.background - color
// div.style.background-color;

// // dot notation with camelCase: workds, accesses the div's background-color
// // style
// div.style.backgroundColor;

// // bracket notation with kebab-case: also works
// div.style["background-color"];


// // bracket notation with camelCase: also works
// div.style["backgoundColor"];

// // Editing attributes
// // if id exists, update it to "theDiv", else create an id with value "theDiv"
// div.setAttribute("id","theDiv");

// // returns value of specified attribute, in this case "theDiv"
// div.getAttribute("id");

// // removes specified attribute
// div.removeAttribute("id");

// // WOrking with classes
// // adds class "new" to your new div
// div.classList.add("new");

// // removes "new" class from div
// div.classList.remove("new");

// // if div doesn;t have class "active" then add it, or if it does, 
// // then remove it
// div.classList.toggle("active");

// // Adding text content
// // creates a text node containing "Hello World!" and inserts it in div
// div.textContent = "Hello World!";

// // Adding HTML content
// // renders the HTML Inside div
// div.innerHTML = "<span>Hello World!</span>";


// My JavaScript file
// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);

// What the DOM is in relation to a webpage
// the difference bt a "node" and an "element"
// how to target nodes with "selectors"
// the basic methods for finding, adding, removing, and altering DOM nodes
// the difference bt a "NodeList" and an "array of nodes"
// what "bubbling" is and how it works

// Document Object Model
/* <div id="container">
    <div class="display"></div>
    <div class="controls"></div>
</div> */

// Targeting nodes with selectos
// CSS-style selectos for <div class="display"></div>
// div.display
// .display
// #container > .display
// div#container > div.display

// selects the #container div 
// const container = document.querySelector("#container");

// // selects the first child of #container => .display
// const display = container.firstElementChild;
// console.log(display);

// selects the .controls div
// const controls = document.querySelector(".controls");
// // selects the prior sibling => .display
// const display =controls.previousElementSibling;
// console.log(display); // <div class="display"></div>

// DOM methods
// WHen the HTML code is parsed by a web browser, it is converted to the DOM
// these nodes are JavaScript objects that have many properties and methods
// attached to them. 
// Query selectos
// element.querySelector(selector) // returns a reference to the first match of selector
// element.querySelectorAll(selectors) // returns a "NodeList" containing references
                                    // to all of the matches of the selectors


// Element creation
// document.createElement(tagName,[options]) // creates a new element
// of tag type tagName. [options] means you can add some optional parameters
// to the function

// This function does not put the new element into the DOM
// You can place the element into the DOM with one of the following methods
// Append elements
// parentNode.appendChild(childNode) // appends childNode as the last child 
//                                   // of parentNode
// parentNode.insertBefore(newNode, referenceNode) 
// // inserts newNode into parentNode before referenceNode

// // Remove elements
// parentNode.removeChild(child) // removes child from parentNode on the DOM
// and returns a reference to child

// Altering elements
// When you have a reference to an element, you can use that reference to
// alter the element's own properties

// creates a new div referenced in the variable 'div'
// const div = document.createElement("div");

// adds the indicated style rule to the element in the div variable
// div.style.color = "blue";

// // adds several style rules
// div.style.cssText = "color: blue; background: white;";

// // adds several style rules
// div.setAttribute("style","color: blue;background: white;");

// dot notation with kebab case: doesn't work as it attempts to subtract
// color from div.style.background
// equivalent to : div.style.background - color
// div.style.background-color;

// //dot notation with camelCase: works, accesses the div's background-color style
// div.style.backgroundColor;

// // bracket notation with kebab-case: also works
// div.style["background-color"];

// // bracket notation with camelCase: also works
// div.style["backgroundColor"];

// Editing attributes
// if id exists, update it to 'theDiv', else create an id with value "theDiv"
// div.setAttribute("id","theDiv");

// // returns value of specified attribute, in this case "theDiv"
// div.getAttribute("id");

// // removes specified attribute
// div.removeAttribute("id");

// mdn web docs
// HTML attribute reference

// Working with classes
// adds class "new" to your new div
// div.classList.add("new");

// // removes "new" class from div
// div.classList.remove("new");

// // if div doesn't have class "active" then add it, or if it does, then remove it
// div.classList.toggle("active");

// Adding text content
// creates a text node containing "Hello World!" and inserts it in div
// div.textContent = "Hello World!";

// Adding HTML content
// renders the HTML inside div
// div.innerHTML = "<span>Hello World!</span>";

// A <p> with red text that says "Hey I'm red!"
// const container = document.querySelector("#container");

// const paragraph = document.createElement("p");
// paragraph.textContent = "Hey I'm red!";
// paragraph.style.color = "red";
// container.appendChild(paragraph);

// // an <h3< with blue text that says "I'm a blue h3!"
// const h3 = document.createElement("h3");
// h3.textContent = "I'm a blue h3!";
// h3.style.color = "blue";
// container.appendChild(h3);

// // a <div> with a black border and pink background color with the 
// // following elements inside of it
// const div = document.createElement("div");
// div.style["border-style"] = "solid";
// div.style["background-color"] = "pink";
// container.appendChild(div);
// // another <h1> that says "I'm in a div"

// const h1 = document.createElement("h1");
// h1.textContent = "I'm in a div";
// div.appendChild(h1);


// const p = document.createElement("p");
// p.textContent = "ME TOO!"
// div.appendChild(p);


// Events
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//     alert("Hello World");
// })

// METHOD 1
// function alertFunction() {
//     alert("YAY! YOU DID IT!");
// }


// METHODS 2 & 3
// function alertFunction() {
//     alert("YAY! YOU DID IT!");
// }

// const btn = document.querySelector("#btn");

// // METHOD 2
// btn.onclick = alertFunction;

// // METHOD 3
// btn.addEventListener("click", alertFunction);

// btn.addEventListener("click", function (e) {
//     console.log(e);
// });

// btn.addEventListener("click", function (e) {
//     console.log(e.target);
// });

// btn.addEventListener("click", function (e) {
//     e.target.style.background = "blue";
// });

// button is a node list. IT looks and acts much like an array
// const buttons = document.querySelectorAll("button");

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         alert(button.id);
//     });
// });


// const container = document.querySelector("#container");

// const display = container.firstElementChild;
// console.log(display);

// const controls = document.querySelector(".controls");

// const display = controls.previousElementSibling;
// console.log(display);

// const div = document.createElement("div");

// div.style.color = "blue";
// div.textContent = "Showing Something";
// container.insertBefore(div, display);

// div.style.cssText = "color: blue; background: yellow;";

// div.setAttribute("style","color: blue; background: white;");
// console.log(div);
// div.setAttribute("id","theDiv");
// console.log(div);

// console.log(div.getAttribute("id"));
// div.removeAttribute("id");
// console.log(div);

// console.log(div);
// div.classList.add("new");

// div.classList.remove("new");
// div.classList.add("active");
// div.classList.toggle("active");

// div.textContent = "Hello World!";

// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);
// console.log(content);

// Events
// specificy function attributes directly on your HTML elements
// set properties in the form of on<eventType> such as onclick or onmousedown
// attach event listeners to the DOM nodes

// const btn = document.querySelector("#btn");
// btn.onclick =() => alert("Hello World");

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//     alert("Hello World");
// });

// function alertFunction() {
//     alert("YAY! YOU DID IT!");
// }

// function alertFunction() {
//     alert("YAY! YOU DID IT!");
// }

// const btn = document.querySelector("#btn");

// // METHOD 2
// // btn.onclick = alertFunction;

// // METHOD 3
// btn.addEventListener("click", alertFunction);

// btn,addEventListener("click", function(e){
//     e.target.style.background = "blue";
// });

// const buttons =document.querySelectorAll("button");

// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         alert(button.id);
//     });
// });

// Event objects
// the target property of the event object is always a reference to the 
// element the event occurred upon
// e/evt/event is most commonly used by developers

// HTML DOM Events
// In HTML onclick is the event listener, myFunction is the event handler
/* <button onclick="myFunction()">Click me</button>

// In JavaScript click is the event, myFunction is the event handler
button.addEventListener("click",myFunction);
 */

// Testing parentNode.insertBefore
// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.textContent = "This is some text";
// container.insertBefore(content, two); 


// // console.log(container.removeChild(content)); // return "this is some text"

// // const div = document.createElement("div");

// content.style.color = "blue";

// content.style.cssText = "color: blue; background: white;";

// content.setAttribute("style","color: blue; background: yellow;");

// // Need to use camelCase with dot notation or bracket notation

// content.style.backgroundColor = "Pink";
// content.style["background-color"] = "green";
// content.style["backgroundColor"] = "white";

// content.setAttribute("id","theDiv");

// let result = content.getAttribute("id"); //theDiv
// // console.log(result);

// content.removeAttribute("id");

// // Working with classes
// content.classList.add("new");

// content.classList.remove("new");

// // if content doesn't have class "active" then add it, or if it does,
// // then remove it
// content.classList.toggle("active");


// const container = document.querySelector("#container");
// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);

// Exercise
// 1 a <p> with red text that says "Hey I'm red!"
// const container = document.querySelector("#container");

// const p = document.createElement("p");
// p.style.color = "red";
// p.textContent = "Hey I'm red!";
// container.appendChild(p);

// // 2 an <h3> with blue text that says "I'm a blue h3!"
// const h3 = document.createElement("h3");
// h3.style.color = "blue";
// h3.textContent = "I'm a blue h3!";
// container.appendChild(h3);

// // 3 a <div> with a black border and pink background color with the 
// // following elements inside of it 
// const div = document.createElement("div");
// div.style.borderStyle = "solid";
// div.style.backgroundColor = "pink";
// // another <h1> that says "I'm in a div"
// const h1 = document.createElement("h1");
// h1.textContent = "I'm in a div";

// // a <p> that says "ME TOO!"
// const p2 = document.createElement("p");
// p2.textContent = "ME TOO!";

// div.appendChild(h1);
// div.appendChild(p2);
// container.appendChild(div);

// a <p> with red text that says "Hey I'm red!"
// const container = document.querySelector("#container");

// const p = document.createElement("p");
// p.textContent = "Hey I'm red!";
// p.style.color = "red";
// container.appendChild(p);

// // an <h3> with blue text that says "I'm a blue h3!"
// const h3 = document.createElement("h3");
// h3.textContent = "I'm a blue h3!";
// h3.style.color = "blue";
// container.appendChild(h3);

// a <div> with a black border and pink background color with the following elements
// another <h1> that says "I'm in a div"
// a <p> that says "ME TOO!"
// const div = document.createElement("div");
// div.setAttribute("style","border-style: solid; background: pink;");
// const h1 = document.createElement("h1");
// h1.textContent = "I'm in a div";
// const p = document.createElement("p");
// p.textContent = "ME TOO!";
// div.appendChild(h1);
// div.appendChild(p);
// container.appendChild(div);


// Events
// 1 specify function attributes 
// 2 set properties in the form of on<eventType> such as
// onclick or onmousedown
// 3 attach event listener to the DOM nodes

// Method 2
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

// Method 3
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//     alert("Hello World");
// });

// function alertFunction() {
//     alert("YAY! YOU DID IT!");
// }

// function alertFunction() {
//     alert("YAY! YOU DID IT!");
// }

// const btn = document.querySelector("#btn");

// // btn.onclick = alertFunction;

// btn.addEventListener("click", alertFunction);
// btn.addEventListener("click", function (e){
//     console.log(e.target.style.background = "blue");
// });

// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         alert(button.id);
//     });
// });

// Assignment

// MDN's Active Learning sections on DOM manipulation
// const link = document.querySelector("a");
// link.textContent = "Mozilla Developer Network";
// link.href = "https://developer.mozilla.org";
// const sect = document.querySelector("section");

// const para = document.createElement("p");
// para.textContent = "We hope you enjoyed the ride.";

// sect.appendChild(para);

// const text = document.createTextNode(
//     " - the premier source for web development knowledge."
// );

// const linkPara = document.querySelector("p");
// linkPara.appendChild(text);

// // Moving and removing elements

// sect.appendChild(linkPara);

// // sect.removeChild(linkPara);

// // linkPara.remove();

// linkPara.parentNode.removeChild(linkPara);

// Manipulating styles
// console.log(Document.styleSheets);

// para.style.color = "white";
// para.style.backgroundColor = "black";
// para.style.padding = "10px";
// para.style.width = "250px";
// para.style.textAlign = "center";

// para.setAttribute("class","highlight");

// Active learning: A dynamic shopping list


// JavaScript Events
// let btn = document.querySelector("#btn");

// function handleClick() {
//     alert("It was clicked!");
// }

// btn.addEventListener("click", handleClick);

// btn.addEventListener("click", function() {
//     alert("It was clicked!");
// });

// btn.addEventListener("click", () => {
//     alert("It was clicked");
// });

// Event bubbling
// Event capturing
// DOM Level 2 Event flow: event bubbling -> acutal target -> event capturing

// Event object 
// let btn = document.querySelector("#btn");

// btn.addEventListener("click", function(event){
//     console.log(event.type);
// });

// let link = document.querySelector('a');

// link.addEventListener("click", function(event) {
//     console.log("clicked");
//     event.preventDefault();
// });

// btn.addEventListener("click", function(event) {
//     console.log("The button was clicked!");
//     event.stopPropagation();
// });

// document.body.addEventListener("click",function(event) {
//     console.log("The body was clicked!");
// })

// Page load events
// JavaScript Page Load Events
// DOMContentLoaded, load, beforeunload, unload


// document.addEventListener("DOMContentLoaded", () => {
//     // handle DOMContentLoaded event
// });


// document.addEventListener("load", () => {
//     // handle Load event
// });

// document.addEventListener("beforeunload",() => {
//     // handle beforeunLoad event
// });

// document.addEventListener("unload",()=> {
//     // handle unLoad event
// });



// addEventListener("DOMContentLoaded", (event) => {
//     console.log("The DOM is fully loaded.");
// });

// addEventListener("load", (event) => {
//     // handle Load event
//     console.log("The page is fully loaded.");
// });

// addEventListener("beforeunload", (event) => {
//     event.preventDefault();
//     event.returnValue = '';
// });

// addEventListener("unload",(event)=> {
//     // send analytic data
// });

// JavaScript Mouse Events
// mousedown -> mouseup -> click
// dblclick event: mousedown -> mouseup -> click -> mousedown -> mouseup
// -> click -> dblclick
// mousemove
// element.onmousemove = mouseMoveEventHandler;
// // Later no longer use
// element.onmousemove = null;

// mouseover/mouseout
// mouseover fires when the nouse cursor is outside of the element and then 
// moves inside the boundaries of the element

// mouseout fire when the nouse cursor is over an alement and then moves 
// to another element

// mouseenter/mouseleave
// mouseenter fires when the mouse cursor is outside of an element 
// and then moves inside the boudaries of the element
// mouseleave fires when the mouse cursor is over an element and then
// moves to the outside of the element's boundaries

// let btn = document.querySelector("#btn");

// btn.addEventListener("click",(event) => {
//     console.log("clicked");
// });

// btn.addEventListener("contextmenu", (e) => {
//     e.preventDefault();
// });

// btn.addEventListener("mouseup", (e) => {
//     let msg = document.querySelector("#message");
//     switch(e.button) {
//         case 0:
//             msg.textContent = "Left mouse button clicked.";
//             break;
//         case 1:
//             msg.textContent = "Middle mouse button clicked.";
//             break;
//         case 2:
//             msg.textContent = "Right mouse button clicked.";
//             break;
//         default:
//             msg.textContent = `Unknown mouse button code: ${event.button}`;
//     }
// });

// Modifier keys
// let btnKeys = document.querySelector("#btnKeys");

// btnKeys.addEventListener("click", (e) => {
//     let keys = [];

//     if (e.shiftKey) keys.push("shift");
//     if (e.ctrlKey) keys.push("ctrl");
//     if (e.altKey) keys.push("alt");
//     if (e.metaKey) keys.push("meta");

//     let msg = document.querySelector("#messageKeys");
//     msg.textContent = `Keys: ${keys.join("+")}`;
// });

// Getting Screen Coordinates
// let track = document.querySelector("#track");
// track.addEventListener("mousemove", (e) => {
//     let log = document.querySelector("#log");
//     log.innerText =`
//     Screen X/Y: (${e.screenX}, ${e.screenY})
//     Client X/Y: (${e.clientX}, ${e.clientY})`
// });

// JavaScript Keyboard Events
// how to work iwht JavaScript keyboard events
// including keydown, keypress, and keyup
// keydown - fires when you press a key and fires repeatedly while you're
// holding down the key
// keyup- fires when you release a key on the keyboard
// keypress - fires when you press a character keyboard like a,b,c keypress
// also fires repeatedly while you hold down the key on the keyboard
// let msg = document.getElementById("#message");

// msg.addEventListener("keydown", (event) => {
//     // handle keydown;
// });

// msg.addEventListener("keypress",(event) => {
//     // handle keypress
// });

// msg.addEventListener("keyup", (event) => {
//     // handle keyup
// });

// let textBox = document.getElementById("message");
// textBox.addEventListener("keydown",(event) => {
//     console.log(`key=${event.key},code=${event.code}`);
// });

// JavaScript Event Delegation
// adds a single event handler to the parent element instead of having to 
// register multiple event handlers to the child elements

// let home = document.querySelector("#home");
// home.addEventListener("click",(event) => {
//     console.log("Home menu item was clicked");
// });

// let dashboard = document.querySelector("#dashboard");
// dashboard.addEventListener("click",(event) => {
//     console.log("Dashboard menu item was clicked");
// });

// let report = document.querySelector("#report");
// report.addEventListener("click",(event) => {
//     console.log("Report menu item was clicked");
// });


// let menu = document.querySelector("#menu");

// menu.addEventListener("click",(event) => {
//     let target = event.target;

//     switch(target.id) {
//         case 'home':
//             console.log("Home menu item was clicked");
//             break;
//         case "dashboard":
//             console.log("Dashboard menu item was clicked");
//             break;
//         case "report":
//             console.log("Report menu item was clicked");
//             break;
//     }
// });

// JavaScript dispatchEvent
// Event constructor and dispatchEvent() method
// To generate an event programmatically, follow those steps:
// First create a new Event object using Event constructor
// Then, trigger the event using element.dispatchEvent() method

// Event constructor
// let event = new Event(type, [,options]);


// by default, the options object is {bubbles: false, cancelable: false}

// let clickEvent = new Event("click");
// Element.dispatchEvent(event);

// let btn = document.querySelector(".btn");
// btn.addEventListener("click", function() {
//     alert("Mouse Clicked");
// });

// let clickEvent = new Event("click");
// btn.dispatchEvent(clickEvent);

// JavaScript Custom Events
// function highlight(elem, callback) {
//     const bgColor = "yellow";
//     elem.style.backgroundColor = bgColor;

//     if(callback && typeof callback === "function") {
//         callback(elem);
//     }
// }

// let note = document.querySelector(".note");
// function addBorder(elem) {
//     elem.style.border = "solid 1px red";
// }

// highlight(note, addBorder);

// TO create a custom event, you use the CustomEvent() cosntructor
// let event = new CustomEvent(eventType, options);
// CustomEvent() has two parrameters
// eventType is a string that represents the name of the event
// options is an object has the detail property that contains any custom 
// inforamtion about the event

// let event = new CustomEvent("highlight", {
//     detail: {backgroundCOlor: "yellow"}
// });

// domElement.dispatchEvent(event);

// elem.dispatchEvent(event);

// function highlight(elem) {
//     const bgColor = "yellow";
//     elem.style.backgroundColor = bgColor;

//     // create the event
//     let event = new CustomEvent("highlight", {
//         detail: {
//             backgroundColor: bgColor
//         }
//     });
//     // dispatch the event
//     elem.dispatchEvent(event);
// }

// // Select the div element
// let div = document.querySelector(".note");

// // Add border style
// function addBorder(elem) {
//     elem.style.border = 'solid 1px red';
// }

// // Listen to the highlight event
// div.addEventListener("highlight", function(e) {
//     addBorder(this);

//     // examine the background
//     console.log(e.detail);
// });

// highlight(div);


// const container = document.querySelector("#container");

// const display = container.firstElementChild;
// console.log(display);

const div = document.createElement("div");

// div.style.color = "blue";

// div.style.cssText = "color:blue;background: white";

// div.setAttribute("style","color:blue; background: white;");

// div.style.background-color;
// div.style.backgroundColor;
// div.style["background-color"];
// div.style["backgroundColor"];

// div.setAttribute("id","theDiv");
// div.getAttribute("id");
// div.removeAttribute("id");

// div.classList.add("new");
// console.log(div);
// div.classList.remove("new");
// console.log(div);
// div.classList.toggle("active");
// console.log(div);

// div.textContent = "Hello World!";

// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);

// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");
// btn.addEventListener("click", () => {
//     alert("Hello World");
// });

// function alertFunction() {
//     alert("Yay");
// }

// btn.onclick = alertFunction;

// btn.addEventListener("click", alertFunction);

// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");
// btn.addEventListener("click", () => {
//     alert("Hello World!");
// });

// function alertFunction() {
//     alert("Yay");
// }

// btn.onclick = alertFunction;

// btn.addEventListener("click", alertFunction);

// btn.addEventListener("click", function(e) {
//     e.target.style.background = "blue";
// });

// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         alert(button.id);
//     });
// });


// Active learning: Basic DOM manipulation


// Eloquent JS- DOM





