const minhaString =
  "Eu não sou supersticioso, mas sou um pouco ________.      ";

//a) **Remova** o excesso de espaços no final da string;

const semEspaco = minhaString.trim();

console.log(semEspaco);

//b) Imprima no console a **quantidade de caracteres** da string, *antes* e *depois* da remoção dos espaços;

console.log(minhaString.length);
console.log(semEspaco.length);

//c) **Substitua** os traços `________` por “sticioso”.
const novaFrase = semEspaco.replaceAll("________", "sticioso");

console.log(novaFrase);
