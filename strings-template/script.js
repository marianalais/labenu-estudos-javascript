let pessoa = prompt("Qual é o seu nome?").toUpperCase();
let cor = prompt("Qual é a sua cor favorita?");
// let citacao = prompt("Qual é a sua citação favorita?");

// let fraseConcatenacao =
//   "A cor favorita de " + pessoa + " é " + cor + '. "' + citacao + '".';

// let fraseTemplateString = `A cor favorita de ${pessoa} é ${cor}. "${citacao}"`;

// console.log(fraseConcatenacao);
// console.log(fraseTemplateString);

let fraseQuebraLinha = "Nome: " + pessoa + "\nCor favorita:" + cor;
let fraseQuebraLinha2 = `Nome: ${pessoa}
Cor favorita: ${cor}`;

console.log(fraseQuebraLinha);
console.log(fraseQuebraLinha2);

console.log("mariana".length);
