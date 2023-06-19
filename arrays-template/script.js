// const arrayString = ["melancia", "limão", "laranja"];
// //       indices         0          1        2
// //       lenght          3

// const arrayNumber = [12, 45, 3];

// const arrayMix = ["Ana", 36, false];

// const arrayUmValor = [5];

// const arrayEmpty = [];

// // console.log(arrayString.length);
// // console.log(arrayString[3]);
// // console.log(arrayMix.includes("Ana"));
// // console.log(arrayUmValor[0]);
// // console.log(arrayUmValor.length);

// const copia = arrayString.slice();
// copia.push("mamão");

// // console.log("Array original:", arrayString);
// // console.log("Copia", copia);
// // copia.pop();
// // copia.pop();
// copia.splice(2, 2);
// console.log(copia);

const arrayComNumeros = [4, 5, 8, 9];

const copiaComNumeros = arrayComNumeros.slice();

copiaComNumeros.pop(); //removendo ultimo elemento
copiaComNumeros.push(6); //inseri numero 6 no final
copiaComNumeros.splice(2, 1); //remover indice 2 da lista

console.log("Original:", arrayComNumeros);
console.log("Copia:", copiaComNumeros);
