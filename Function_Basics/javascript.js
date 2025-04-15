function favouriteAnimal(animal){
    return animal + " is my favourite animal!"
}

console.log(favouriteAnimal('Goat'));

const myText = "I am a string";
const newString= myText.replace("string","sausage");
console.log(newString);

const myArray=["I","love","chocolate","frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);

const myNumber = Math.random();

const originals = [1,2,3];
const doubled = originals.map(item => item *2);
console.log(doubled);

