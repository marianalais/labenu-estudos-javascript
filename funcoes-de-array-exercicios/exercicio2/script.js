const arrayNumerico = [2, 5, 10, 15, 8, 20, 12, 1];

//1) Retornar um novo array contendo os números multiplicados por 5.
const quintuplos = arrayNumerico.map((numero) => {
  return numero * 5;
});
console.log(quintuplos);

//2)Retornar um novo array contendo os números divididos por 2.

const metades = arrayNumerico.map((numero) => {
  return numero / 2;
});
console.log(metades);
