const nacionalidadeUsuario = prompt("Digite sua nacionalidade:");

function verificaNacionalidade(nacionalidade) {
  if (
    nacionalidade.toLowerCase() === "brasileira" ||
    nacionalidade.toLowerCase() === "brasileiro"
  ) {
    console.log(nacionalidade);
  } else if (
    nacionalidade.toLowerCase() === "argentina" ||
    nacionalidade.toLowerCase() === "argentino"
  ) {
    console.log(nacionalidade);
  } else if (
    nacionalidade.toLowerCase() === "uruguaiana" ||
    nacionalidade.toLowerCase() === "uruguaiano"
  ) {
    console.log(nacionalidade);
  } else if (
    nacionalidade.toLowerCase() === "chilena" ||
    nacionalidade.toLowerCase() === "chileno"
  ) {
    console.log(nacionalidade);
  } else if (
    nacionalidade.toLowerCase() === "colombiana" ||
    nacionalidade.toLowerCase() === "colombiano"
  ) {
    console.log(nacionalidade);
  } else {
    console.log(
      "O valor de 'nacionalidade' não corresponde a nenhuma das possibilidades acima."
    );
  }
}
verificaNacionalidade(nacionalidadeUsuario);
