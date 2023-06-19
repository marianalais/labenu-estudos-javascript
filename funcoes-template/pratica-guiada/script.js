// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

// function imprimirNome(nome) {
//   //bloco código
//   console.log(`Olá, ${nome}`);
// }
//Função não nomeada

const imprimirNome = function (nome) {
  console.log(`Olá, ${nome}`);
};

imprimirNome("Mariana");
imprimirNome("Fred");
imprimirNome("Dalva");

// Arrow function
const fazerOperacoes = (numero) => {
  const verifica = numero % 2 === 0;
  const soma = numero + 10;
  const multiplica = numero * numero;

  return `O ${numero} é par? ${verifica}. Somando com 10 o resultado é ${soma}. Multiplicado por ele mesmo o resultado é ${multiplica}.`;
};

console.log(fazerOperacoes(12));

const verificaDados = (login, senha) => {
  const loginArmazenado = "marianalais.eng@gmail.com";
  const senhaArmazenada = "123456";

  return loginArmazenado === login && senhaArmazenada === senha;
};

console.log(verificaDados("marianalais.eng@gmail.com", "123456"));
