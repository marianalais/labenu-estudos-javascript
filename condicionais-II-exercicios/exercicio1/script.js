let numero = Number(prompt("Digite um numero:"));

if (numero % 2 === 0) {
  if (numero % 3 === 0) {
    console.log("O numero é divisível por 2 e 3");
  } else {
    console.log("O numero é divisível por 2");
  }
} else if (numero % 3 === 0) {
  console.log("O numero é divisível por 3");
} else {
  console.log("O numero não é divisível nem por 2 nem por 3");
}

if (numero % 2 === 0 || numero % 3 === 0) {
  console.log("O numero é divisível por 2 ou 3");
} else {
  console.log("O numero não é divisível nem por 2 nem por 3");
}
