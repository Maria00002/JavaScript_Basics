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
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);















