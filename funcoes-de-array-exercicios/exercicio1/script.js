const infosPessoa = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos",
};

//1) Função que altera as propriedades do objeto para caixa alta
function infosCaixaAlta(objeto) {
  const novoObjeto = {};
  for (let propriedade in objeto) {
    novoObjeto[propriedade] = objeto[propriedade].toUpperCase();
  }
  return novoObjeto;
}
console.log(infosCaixaAlta(infosPessoa));
//Para modificar as propriedades de um objeto para letras maiúsculas,
//você precisa percorrer cada propriedade e alterar seu valor individualmente.

//-----------------------------------------------------------------------------------------

//2) Função que retorna os valores do objeto como texto corrido.
function textoCorrido(objeto) {
  let texto = "";
  for (let propriedade in objeto) {
    // const valor = infosPessoa[propriedade];
    texto += `O valor da propriedade ${propriedade} é ${objeto[propriedade]}. `;
  }
  return texto;
}
console.log(textoCorrido(infosPessoa));

//-----------------------------------------------------------------------------------------

//3) Exemplo de função de callback
// function callbackExemplo(objeto) {
//   // Realiza alguma operação com o objeto
//   // e retorna um valor
//   return objeto;
// }
// Função principal que recebe um objeto e uma callback
function funcaoPrincipal(objeto, callback) {
  const resultado = callback(objeto);
  console.log(resultado);
}
// Chamada da função principal passando o objeto e a função de callback
funcaoPrincipal(infosPessoa, infosCaixaAlta);
