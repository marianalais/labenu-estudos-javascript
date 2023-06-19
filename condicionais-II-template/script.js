// let idade = 18;

// ifs alinhados

// if (idade >= 13) {
//   if (idade <= 17) {
//     console.log(
//       "A pessoa dependente já pode ter um cartão de crédito vinculado ao seu"
//     );
//   }
// } else {
//   console.log("Consulte outra possibilidade do Labank");
// }

//operadores lógicos

// if (idade >= 13 && idade <= 17) {
//   console.log(
//     "A pessoa dependente já pode ter um cartão de crédito vinculado ao seu"
//   );
// } else {
//   console.log("Consulte outra possibilidade do Labank");
// }

//it ternario

// const possuiConta = prompt(
//   "Você já possui conta no Labenk? Responda sim ou não"
// );

// if (possuiConta.toLowerCase() === "sim") {
//   console.log("Boas vindas");
// } else {
//   console.log("Faça já o seu cadastro.");
// }

//if ternario

//(condicao) ? true : false
// possuiConta.toLocaleLowerCase() === "sim"
//   ? console.log("Boas vindas")
//   : console.log("Faça já o seu cadastro.");

// let cartao;
// let ramal = Number(prompt("Digite o ramal desejado:"));

// if (ramal === "1") {
//   cartao = "fácil";
// } else if (ramal === "2") {
//   cartao = "Black";
// } else if (ramal === "3") {
//   cartao = "Platinum";
// } else if (ramal === "4") {
//   cartao = "Master Gold";
// } else {
//   console.log("Escolha uma das 4 opções dispiníveis");
// }

// switch (ramal) {
//   case 1:
//     cartao = "Fácil";
//     break;
//   case 2:
//     cartao = "Black";
//     break;
//   case 3:
//     cartao = "Platinum";
//     break;
//   case 4:
//     cartao = "Master Gold";
//     break;
//   default:
//     console.log("Escolha uma das 4 opções dispiníveis");
// }

// console.log(cartao);

let numero = Number(prompt("Digite um numero"));

if (numero % 2 === 0) {
  if (numero % 3 === 0) {
    console.log("O número é divisível por 2 e 3");
  }
} else {
  console.log("O número não é divisível por 2 e 3");
}

if (numero % 2 === 0 && numero % 3 === 0) {
  console.log("O número é divisível por 2 e 3");
  numero === 30
    ? console.log("UFA, ACERTEI!")
    : console.log("Não foi dessa vez :(");
} else {
  console.log("O número não é divisível por 2 e 3");
}
