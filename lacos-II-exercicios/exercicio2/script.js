let numero = Number(prompt("Digite um numero:"));
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in array) {
  let tabuada = numero * (Number(i) + 1);
  console.log(
    `A tabuada de ${numero} é ${Number(i) + 1} x ${numero} = ${tabuada}`
  );
}
