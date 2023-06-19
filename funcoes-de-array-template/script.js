// function multiplicarPor3(arrayDeNumeros) {
//   let novoArray = [];
//   for (let i = 0; i < arrayDeNumeros.length; i++) {
//     novoArray.push(arrayDeNumeros[i] * 3);
//   }
//   return novoArray;
// }
const arrayNumerico = [1, 3, 5, 6, 10];
// console.log(multiplicarPor3(arrayNumerico));

// const retornarPares = (arrayDeNumeros) => {
//   let novoArray = [];
//   for (let i = 0; i < arrayDeNumeros.length; i++) {
//     if (arrayDeNumeros[i] % 2 === 0) {
//       novoArray.push(arrayDeNumeros[i]);
//     }
//   }
//   return novoArray;
// };
// // console.log(retornarPares(arrayNumerico));

// function fazerOperações(array, callback) {
//   const novoArray = callback(array);
//   return novoArray;
// }
// console.log(
//   "callback multiplicando por 3",
//   fazerOperações(arrayNumerico, multiplicarPor3)
// );
// console.log(
//   "pegar pares em callback",
//   fazerOperações(arrayNumerico, retornarPares)
// );

//-------------------------------------------------------------------------------------------------
//Utilizando o map()

// const comoFazerOMap = array.map((elemento, indice, array) => {
//   // modificar cada item do array
//   return; //algum valor
// });
//elemento: item que vai mudar a cada iteração do map - OBRIGATÓRIO
//indice: indica o indice atual a cada iteração do array - opcional
//array: representa o próprio array - opcional

// o map sempre vai retornar um novo array com a mesma quantidade, porém alteradas
// const multiplicar = (numero) => {
//   return numero * 3;
// };
// const triplicarValor = arrayNumerico.map(multiplicar);
// console.log("map", triplicarValor);

// const triplicarValor = arrayNumerico.map((numero) => {
//   return numero * 3;
// });
// console.log("map", triplicarValor);

//-------------------------------------------------------------------------------------------------
//Utilizando o filter()

// const comoFazerOFilter = array.filter((elemento, indice, array) => {
//   //código que vai filtrar os elementos do array
//   return; //booleano - se for true o elemento entra no novo array
// });
//elemento: item que vai ser filtrado cada iteração do filter - OBRIGATÓRIO
//indice: indica o indice atual a cada iteração do array - opcional
//array: representa o próprio array - opcional

//calback separada
const retornarPares = (numero) => {
  return numero % 2 === 0;
};
const filtrarPares = arrayNumerico.filter(retornarPares);
console.log("filter", filtrarPares);

const pegarPares = arrayNumerico.filter((numero) => {
  return numero % 2 === 0;
});
console.log("filter", pegarPares);

//--------------------------------------------------------------------------------------------------
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama", vida: 40 },
  { nome: "Bellsprout", tipo: "grama", vida: 20 },
  { nome: "Charmander", tipo: "fogo", vida: 35 },
  { nome: "Vulpix", tipo: "fogo", vida: 25 },
  { nome: "Squirtle", tipo: "água", vida: 45 },
  { nome: "Psyduck", tipo: "água", vida: 25 },
];

const pokemonsVidaCheia = pokemons.map((poke) => {
  const novaVida = {
    ...poke,
    vida: 100,
  };
  return novaVida;
});
console.log(pokemons);
console.log(pokemonsVidaCheia);

const pokemonsDeFogo = pokemonsVidaCheia.filter((poke) => {
  return poke.tipo === "fogo";
});
console.log(pokemonsDeFogo);
