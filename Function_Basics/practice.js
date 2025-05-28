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

const x = 1;
function a() {
    const y = 2;
    output(z);
}

function b() {
    const z = 3;
    output(y);
}

function output (value) {
    const para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = `Value: ${value}`;
}


