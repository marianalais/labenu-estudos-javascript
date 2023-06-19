// Resolva o Exercício de Fixação!

function cadastro(nome, anoNascimento, anoAtual) {
  const maiorIdade = Number(anoAtual) - Number(anoNascimento);
  const verificacaoIdade = maiorIdade >= 18;

  return `${nome} é maior de idade? ${verificacaoIdade}`;
}

console.log(cadastro("Mariana", "1997", "2023"));
console.log(cadastro("William", "2008", "2023"));
