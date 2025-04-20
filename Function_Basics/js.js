function favouriteAnimal(animal){
    return animal + " is my favourite animal!";
}

console.log(favouriteAnimal('goat'));

// mdn web docs
// Functions-reusable blocks of code
const myText = "I am a string";
const newString = myText.replace("string","sausage");
console.log(newString);

const myArray = ["I","love","chocolate","frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);

const myNumber = Math.random();

// Functions versus methods
function random(number) {
    return Math.floor(Math.random()*number);
}

console.log(random(100));

function hello(name="Chris") {
    console.log(`Hello ${name}!`);
}

hello("Ari");
hello();

// function logKey(event) {
//     console.log(`You pressed "${event.key}".`);
// }

// textBox.addEventListener("keydown", logKey);