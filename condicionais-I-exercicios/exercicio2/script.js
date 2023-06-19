const idadeDigitada = prompt("Digite sua idade:");
const ensinoDigitado = prompt("Você terminou o ensino médio?");
const faculdadeDigitada = confirm("Você está cursando alguma faculdade?");

function verificacao(idade, ensino, faculdade) {
  if (idade >= 18) {
    console.log("A pessoa é maior de idade");
  } else {
    console.log("A pessoa é menor de idade");
  }
  if (ensino.toLowerCase() === "sim") {
    console.log("A pessoa terminou o ensino médio");
  } else {
    console.log("A pessoa não terminou o ensino médio");
  }
  if (faculdade === true) {
    console.log("A pessoa está cursando uma faculdade");
  } else {
    console.log("A pessoa não está cursando uma faculdade");
  }
}

verificacao(idadeDigitada, ensinoDigitado, faculdadeDigitada);
