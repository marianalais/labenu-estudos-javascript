let nome = undefined;
let idade = undefined;

console.log(typeof nome, typeof idade);

nome = prompt("Digite o seu nome:");
idade = Number(prompt("Digite sua idade:"));

console.log("Olá, ", nome, ", você tem ", idade, "anos.");
console.log(typeof nome, typeof idade);
