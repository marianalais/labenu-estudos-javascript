// const estudante = {
//   nome: "Ana",
//   sobrenome: "Sammi",
//   numeroMatricula: "1234",
//   notasSemestre: [3, 10, 5],
// };

// //noração de ponto
// estudante.modulo = 1;

// //notação de conchetes
// //estudante["modulo"] = 1

// // console.log(estudante.nome);
// // //console.log(estudante["nome"]);
// // console.log(estudante.notasSemestre[1]);
// // console.log(estudante.modulo);

// const copiaEstudante = {
//   ...estudante,
//   nome: "Astrodev",
//   notasSemestre: [...estudante.notasSemestre, 9],
//   modulo: estudante.modulo + 1,
// };
// // copiaEstudante.notasSemestre.push(10)
// //console.log(copiaEstudante);

// const estudantesLabenu = [];
// estudantesLabenu.push(estudante, copiaEstudante);
// console.log(estudantesLabenu);

const carrinho = {
  nome: "Mariana",
  formaDePagamento: "cartão de crédito",
  endereco: "Rua São Roque, número 355, Planaltina",
};
carrinho.compras = [{ nome: "frango", preco: "R$20,00", quantidade: 5 }];

console.log(carrinho.compras[0].quantidade);

const copiaCarrinho = {
  ...carrinho,
  nome: "Ana",
  formaDePagamento: "cartão presente",
};
console.log(carrinho);
console.log(copiaCarrinho);
