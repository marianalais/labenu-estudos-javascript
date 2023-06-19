//a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.

function imprimir(numero1, numero2) {
  const soma = numero1 + numero2;

  console.log(`A soma dos dois números é: ${soma}`);
}

imprimir(2, 4);

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function imprimir2(numero1, numero2) {
  const confere = numero1 >= numero2;
  console.log(
    `O primeiro número é maior ou igual ao segundo número? ${confere}`
  );
}
imprimir2(10, 5);

//c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.

function imprimir3(numero) {
  const parOuImpar = numero % 2 === 0;
  console.log(`O número ${numero} é par? ${parOuImpar}`);
}
imprimir3(4);

//d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

function salario(salarioBruto) {
  let salarioLiquido = salarioBruto - salarioBruto * 0.1;
  return `O salário liquido é: ${salarioLiquido}`;
}

console.log(salario(2000));
