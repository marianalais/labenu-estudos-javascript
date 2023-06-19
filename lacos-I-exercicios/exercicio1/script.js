let resposta = prompt(
  "Você deseja comer mais cozinhas? Responda com 'S' ou 'N'"
);

let conta = 0;
let qtde = 0;

while (resposta.toUpperCase() === "S") {
  conta = conta + 2.5;
  qtde++;

  resposta = prompt("Você deseja comer mais cozinhas? Responda com 'S' ou 'N'");
}

console.log(`O valor total é ${conta} e a quantidade foi ${qtde}`);
