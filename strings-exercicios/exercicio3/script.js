//Crie a const para a frase aqui

const frase =
  'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS,' +
  ' mas não deixe o gato sair."'.toUpperCase();

const novaFrase = frase
  .replaceAll("verde", "rosa")
  .replaceAll("azul", "laranja");

console.log(novaFrase);

const verificacao = novaFrase.includes("verde");
const verificacao2 = novaFrase.includes("laranja");

console.log(
  "Contém 'verde' na frase?",
  verificacao,
  "E 'laranja'?",
  verificacao2
);
