//PRATICA OPERADORES ARITIMÉTICOS

let saldo = 15;
saldo = saldo + 22.4;
// ou saldo += 22.40
//console.log(saldo);

saldo = saldo - 12.34;
// ou saldo -= 12.34

//console.log(saldo);

saldo = saldo / 2;
// ou saldo /= 2
//console.log(saldo);

saldo = saldo * 3.4;
//ou saldo = saldo *=3.4
//console.log(saldo);

saldo = saldo % 3;
//ou saldo %= 3
//console.log(saldo);

//PRATICA PROCEDÊNCIA MATERMATICA

let operacao = 2 * (2 + 2);
//console.log(operacao);

//PRATICA IGUAL E DIFERENTE

const comparacao = 5 === 5; //true
//console.log(comparacao);

const comparacao2 = 5 !== 5; //false
//console.log(comparacao2);

const comparacao3 = 5 !== "5"; //true
//console.log(comparacao3);
//obs: quando colocado somente == ou != ele compara só valor e não o tipo

const comparacao4 = 5 === "cinco"; //false
//console.log(comparacao4);

const comparacao5 = typeof 5 === typeof 20; //true
//console.log(comparacao5);

const comparacao6 = typeof "5" === typeof "cinco";
//console.log(comparacao6);

//PRÁTICA OPERADORES DE COMPARAÇÃO

const primeiroNumero = 13;
const segundoNumero = 13;

const verificacao = primeiroNumero === segundoNumero; //true
//console.log(verificacao);

const verificacao2 = primeiroNumero <= segundoNumero; //true
//console.log(verificacao2);

const verificacao3 = primeiroNumero > segundoNumero; //false
//console.log(verificacao3);

const verificacao4 = primeiroNumero < segundoNumero; //false
console.log(verificacao4);
