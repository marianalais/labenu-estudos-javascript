// let numero = Number(prompt("Digite um número"));

// while (condicao) {
//    // bloco de codigo
//    // incremento
// }

// let soma = 0;

// while (numero !== 0) {
//   soma = soma + numero;
//   console.log(numero);

//   numero = Number(prompt("Digite um novo número"));
// }

// console.log("Soma:", soma);

//for

// for (let i = 0; i <= numero; i++) {
//   console.log(i);
// }

//for com array

// const array = [4, 89, 23, 10, 6, 65, 2];

// for (let i = 0; i < array.length; i++) {
//   console.log(`O elemento de índice ${i} é ${array[i]}`);
// }

let usuario = prompt("Qual o seu tipo de usuário? 'A', 'B' ou 'C'?");

while (usuario.toUpperCase() !== "A") {
  alert("Acesso negado.");

  usuario = prompt("Qual o seu tipo de usuário? 'A', 'B' ou 'C'?");
}
alert("Boas-vindas, admin!");

for (let i = 1; i <= 10; i++) {
  console.log(`2*${i}=${2 * i}`);
}

const array = ["morango", "melancia", "banana", "maçã"];

for (let i = 0; i <= array.length; i++) {
  console.log(array[i]);
}
