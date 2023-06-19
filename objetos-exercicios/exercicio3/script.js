const pokemon1 = {
  nome: "Bulbasaur",
  tipo: "Grama",
  nivel: 5,
};

const pokemon2 = {
  ...pokemon1,
  nome: "Squirtle",
  tipo: "Água",
};

pokemon1.ataques = [];

const ataqueInvestida = {
  nome: "Investida",
  dano: 40,
  tipo: "Normal",
  precisao: 100,
};

pokemon1.ataques.push(ataqueInvestida);

const ataqueNavalha = {
  nome: "Folha Navalha",
  dano: 45,
  tipo: "Grama",
  precisao: 100,
};
pokemon1.ataques.push(ataqueNavalha);

pokemon2.ataques = [];

const ataqueJato = {
  nome: "Jato de Água",
  dano: 40,
  tipo: "Água",
  precisao: 100,
};
pokemon2.ataques.push(ataqueJato);

console.log(pokemon1);
console.log(pokemon2);
