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
const container = document.querySelector("#container");

const content = document.createElement("div");
content.textContent = "This is some text";
container.insertBefore(content, two); 






