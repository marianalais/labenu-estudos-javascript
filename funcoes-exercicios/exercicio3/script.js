let numero1 = Number(prompt(`Digite um número:`));
let numero2 = Number(prompt(`Digite outro número:`));

function somaNumeros(n1, n2) {
  const soma = n1 + n2;
  return `A soma dos dois números é: ${soma}`;
}

let recebeSoma = somaNumeros(numero1, numero2);

function subtracaoNumeros(n1, n2) {
  const subtracao = n1 - n2;
  return `A subtração dos dois números é: ${subtracao}`;
}

let recebeSubtracao = subtracaoNumeros(numero1, numero2);

function multiplicacaoNumeros(n1, n2) {
  const multiplicacao = n1 * n2;
  return `A multiplicação dos dois números é: ${multiplicacao}`;
}

let recebeMultiplicacao = multiplicacaoNumeros(numero1, numero2);

function divisaoNumeros(n1, n2) {
  const divisao = n1 / n2;
  return `A divisão dos dois números é: ${divisao}`;
}

let recebeDivisao = divisaoNumeros(numero1, numero2);

console.log(recebeSoma);
console.log(recebeSubtracao);
console.log(recebeMultiplicacao);
console.log(recebeDivisao);
