// function favouriteAnimal(animal) {
//     return animal + " is my favourite animal!"
// }

// console.log(favouriteAnimal('Goat'));

/////// Functions - reusable blocks of code

// function hello(name = "Chris") {
//     console.log(`Hello ${name}!`);
// }

// hello("Ari");
// hello();

// const originals = [1,2,3];
// const doubled = originals.map(item => item * 2);
// console.log(doubled);

// const x = 1;
// function a() {
//     const y = 2;
//     output(z);
// }

// function b() {
//     const z = 3;
//     output(y);
// }

// function output (value) {
//     const para = document.createElement('p');
//     document.body.appendChild(para);
//     para.textContent = `Value: ${value}`;
// }


//////////////////// Function return values
// const myText = "The weather is cold";
// const newString = myText.replace("cold","warm");
// console.log(newString);


function squared(num) {
    return num * num;
}

function cubed(num) {
    return num * num * num;
}

function factorial(num) {
    if (num < 0 ) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x > 1) {
        num *= x;
        x--;
    }
    return num;
}








