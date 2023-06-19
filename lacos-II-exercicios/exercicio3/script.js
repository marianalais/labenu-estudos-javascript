const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
let posicao = 0;

for (let i of maioresPaises) {
  posicao++;
  console.log(`${posicao}- ${i}`);
}

// for (let i of maioresPaises) {
//   for (let j in maioresPaises) {
//     console.log(`${j}- ${i}`);
//   }
// }
