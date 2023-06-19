const booleano1 = true;
const booleano2 = false;
const booleano3 = true;

//sintaxe do if
// if (condição) {
//   //se a condição for true, então o código será executado
// }
// else {
//     //se a condição for false, então o código false será executado
// }

// if (booleano1) {
//   alert("Booleano1 é TRUE");
// } else {
//   alert("booleano1 é false");
// }

// if (booleano1 === booleano2) {
//   alert("booleano1 é IGUAL a booleano2");
// } else if (booleano2 === booleano3) {
//   alert("booleano2 é IGUAL a booleano3");
// } else if (booleano1 === booleano3) {
//   alert("booleano1 é IGUAL a booleano3");
// } else {
//   alert("nenhum valor é igual a outro");
// }

// let idade = 17;
// let autorizacao = true;

// if (idade >= 18) {
//   alert("Pode votar!");
// } else {
//   if (idade === 16 || (idade === 17 && autorizacao === true)) {
//     alert("Pode votar com a autorização dos pais!");
//   } else {
//     alert("Não pode votar!");
//   }
// }

// let idade = Number(prompt("Digite sua idade"));

// if (idade >= 18 && idade < 70) {
//   alert("Pode votar");
// } else if (idade === 16 || idade === 17) {
//   alert("Pode votar com autorização dos pais");
// } else if (idade >= 70) {
//   alert("Pode votar, mas não é obrigatório");
// } else {
//   alert("Não pode votar");
// }

let media = 3;

if (media >= 5) {
  console.log("Aprovado!");
} else if (media >= 3 && media <= 5) {
  console.log("Recuperação!");
} else if (media < 3) {
  console.log("Reprovado!");
} else {
  console.log("Dado Inválido");
}
