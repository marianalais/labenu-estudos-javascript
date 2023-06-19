// --------------- PRÁTICA GUIADA ---------------
const bimestre1 = [10, 4, 3, 8];
const bimestre2 = [2, 6, 10, 3];
const bimestre3 = [3, 6, 8, 10];
const bimestre4 = [5, 2, 7, 8];

const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]; //length = 4
//indices           0           1        2          3
// console.table(notasDoAno[0][1]);

//for dentro de for

// for (
//   let indiceBimestre = 0;
//   indiceBimestre < notasDoAno.length;
//   indiceBimestre++
// ) {
//   // console.log(indiceBimestre);

//   let soma = 0;

//   for (
//     let indiceNota = 0;
//     indiceNota < notasDoAno[indiceBimestre].length;
//     indiceNota++
//   ) {
//     soma = soma + notasDoAno[indiceBimestre][indiceNota];
//   }
//   // console.log("A soma do bimestre é:", soma);

//   let mediaBimestre = soma / notasDoAno[indiceBimestre].length;

//   console.log(
//     `A soma das notas do bimestre ${
//       indiceBimestre + 1
//     } é: ${soma} \nA média do bimestre ${indiceBimestre + 1} é ${mediaBimestre}`
//   );
// }

//for in

// for (let indiceBimestre in notasDoAno) {
//   console.log(indiceBimestre);

//   let soma = 0;

//   for (let nota of notasDoAno[indiceBimestre]) {
//     //nota vai retornar cada um dos elementos de cada array bimestre
//     soma = soma + nota;
//   }
//   // console.log("A soma do bimestre é:", soma);

//   let mediaBimestre = soma / notasDoAno[indiceBimestre].length;

//   console.log(
//     `A soma das notas do bimestre ${
//       Number(indiceBimestre) + 1
//     } é: ${soma} \nA média do bimestre ${
//       Number(indiceBimestre) + 1
//     } é ${mediaBimestre}`
//   );
//transformando indiceBimestre em Number pq vem como string no caso de for in e for of
// }

// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: "O Auto da Compadecida",
    ano: 2000,
    diretor: "Guel Arraes",
    elenco: [
      "Selton Mello",
      "Mateus Nachtergaele",
      "Marco Nanini",
      "Fernanda Montenegro",
    ],
  },
  {
    titulo: "Carandiru",
    ano: 2001,
    diretor: "Hector Babenco",
    elenco: [
      "Wagner Moura",
      "José Carlos Vasconcelos",
      "Ailton Graça",
      "Caio Blat",
    ],
  },
  {
    titulo: "Aquarius",
    ano: 2012,
    diretor: "Kléber Mendonça Filho",
    elenco: [
      "Sônia Braga",
      "Humberto Carrão",
      "Maeve Jinkings",
      "Bárbara Colen",
    ],
  },
];

// escreva seu código abaixo 👇🏻
// for (let i = 0; i < filmes.length; i++) {
//   console.log(
//     `O ${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`
//   );

//   for (let j = 0; j < filmes[i].elenco.length; j++) {
//     console.log(`Ator/Atriz: ${filmes[i].elenco[j]}`);
//   }
// }

for (let i in filmes) {
  console.log(
    `O ${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`
  );

  for (let j of filmes[i].elenco) {
    console.log(`Ator/Atriz: ${j}`);
  }
}
