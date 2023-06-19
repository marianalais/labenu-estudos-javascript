// variável nome: string, variável idade: number, variável presenca: boolean

// const nome = prompt("Digite seu nome");
// let idade = Number(prompt("Digite sua idade"));
// //idade = Number(idade);
// let presenca = confirm("Confirme sua presenca");

// console.log(typeof nome);
// console.log(typeof idade);
// console.log(typeof presenca);

// console.log("Estudante:", nome, "tem", idade, "anos. Presença:", presenca);

// console.log(
//   "nome:",
//   typeof nome,
//   ", idade:",
//   typeof idade,
//   ", presença:",
//   typeof presenca
// );

const celular = prompt("Digite o modelo do seu celular");
let quantidade = Number(
  prompt("Digite quantas pessoas tem celular na sua casa")
);
let utilidade = confirm("Você usa seu celular para o trabalho?");

console.log(
  "Meu ceulular é um ",
  celular,
  ", em minha casa",
  quantidade,
  "pessoas utilizam celular",
  "e a informação de que uso o celular para o trabalho é:",
  utilidade
);

console.log(
  "celular:",
  typeof celular,
  ", quantidade:",
  typeof quantidade,
  ", utilidade:",
  typeof utilidade
);
