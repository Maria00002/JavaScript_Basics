// function favouriteAnimal(animal){
//     return animal + " is my favourite animal!";
// }

// console.log(favouriteAnimal('goat'));

// // mdn web docs
// // Functions-reusable blocks of code
// const myText = "I am a string";
// const newString = myText.replace("string","sausage");
// console.log(newString);

// const myArray = ["I","love","chocolate","frogs"];
// const madeAString = myArray.join(" ");
// console.log(madeAString);

// const myNumber = Math.random();

// // Functions versus methods
// function random(number) {
//     return Math.floor(Math.random()*number);
// }

// console.log(random(100));

// function hello(name="Chris") {
//     console.log(`Hello ${name}!`);
// }

// hello("Ari");
// hello();

// function logKey(event) {
//     console.log(`You pressed "${event.key}".`);
// }

// textBox.addEventListener("keydown", logKey);

// Function scope and conflicts
// the top-level outside all your functions is called the global scope

// Function return values
// Learning outcomes
// What returs values are
// HOw to use the return values of existing functions
// Adding return values to your own functions

const myText = "The weather is cold.";
const newString = myText.replace("cold","warm");
console.log(newString);

// Using return values in your own functions
// Active learning: A return value function
function squared(num) {
    return num *num;
}

function cubed(num) {
    return num * num * num;
}


function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x > 1) {
        num *= x;
        x--;
    } 
    return num;
}

console.log(factorial(-13));