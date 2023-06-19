let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));

let maior = numero1 > numero2;
let igual = numero1 === numero2;
let divisivel1 = numero1 % numero2 === 0;
let divisivel2 = numero2 % numero1 === 0;

console.log(`O primeiro numero é maior que o segundo? ${maior}`);
console.log(`O primeiro numero é igual ao segundo? ${igual}`);
console.log(`O primeiro numero é divisível pelo segundo? ${divisivel1}`);
console.log(`O segundo numero é divisível pelo primeiro? ${divisivel2}`);
