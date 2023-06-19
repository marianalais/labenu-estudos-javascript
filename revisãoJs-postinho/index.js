// // COMPARADORES
// // Exercício 1------------------------------------------------------------------------------------

// // a-)Comparador de desigualdade a!==b
// // Exemplo:

// function checarDesigualdade(a, b) {
//   return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`;
// }
// console.log(checarDesigualdade(1, 2));

// // b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//   return `No comparador de igualdade ${a}===${b} é ${a === b}`;
// }
// console.log(checarIgualdade(1, 2));
// // c-)Faça uma função chamada "verificaSeEMaior"

// console.log(verificaSeEMaior(321, 2156));

// // Exercício 2------------------------------------------------------------------------------------
// //Escreva true or false para as comparações abaixo:
// // exemplo 1>2 = false
// // a-) 1==='1'= false
// // b-) 1=='1'= true
// // c-) 'a'==='b'= true
// // d-) 'b'>'a'= true
// // e-) 0!==null= false

// // CONDICIONAIS

// // Exercício 3------------------------------------------------------------------------------------
// //  **Cadastro de usuário**
// //     Escreva uma função que receba do usuário **nomeDoUsario**, **anoDeNascimento**, **senhaDoUsuario** e **nacionalidade**
// //e **** guarde essas informações dentro de um array`usuarios`.Porém só poderão se cadastrar:
// //     - Usuários maiores de 18 anos
// //     - A senha deve ter no mínimo 6 caracteres
// //     - E que a nacionalidade seja brasileira.
// const nomeUsuario = prompt("Digite seu nome de usuário:");
// const anoDeNascimento = prompt("Digite seu ano de nascimento:");
// const anoAtual = prompt("Digite o ano atual:");
// const idade = anoAtual - anoDeNascimento;
// const senhaDoUsuario = prompt("Digite sua senha de no mínimo 6 caracteres:");
// const nacionalidadeDoUsuario = prompt("Digite sua nacionalidade:");
// const usuario = [];

// const cadastro = (nome, ano, senha, nacionalidade) => {
//   if (idade < 18) {
//     console.log("Você deve ter mais de 18 anos para se cadastrar.");
//     return;
//   }
//   if (senha.length < 6) {
//     console.log("A senha deve ter no mínimo 6 caracteres.");
//     return;
//   }
//   if (nacionalidade.toLowerCase() !== "brasileira") {
//     console.log("Apenas usuários brasileiros podem se cadastrar.");
//     return;
//   }
//   let objetoUsuario = {
//     nome: nome,
//     anoDeNascimento: ano,
//     senha: senha,
//     nacionalidade: nacionalidade,
//   };
//   usuario.push(objetoUsuario);
//   console.log("Usuário cadastrado com sucesso!");
// };
// cadastro(nomeUsuario, anoDeNascimento, senhaDoUsuario, nacionalidadeDoUsuario);
// console.log(usuario);

//Exercício 4-----------------------------------------------------------------------------------------------
// - **Login do usuário**

//     Escreva uma função que peça uma senha para o usuário e verifique se está é a mesma senha cadastrada por ele.
//     Dentro da função defina uma senha válida  Ex: const senha =”labenu”

//     - Caso a senha seja válida imprima no console a mensagem (Usuário Logado)
//     - Caso a senha seja inválida imprima no console (Senha Inválida)
// const senhaDigitada = prompt("Digite sua senha:");
// const login = (senha) => {
//   const login = "labenu";
//   if (senha === login) {
//     console.log("Usuário logado!");
//   } else {
//     console.log("Senha inválida!");
//   }
// };

// console.log(login(senhaDigitada));

// Exercício 5----------------------------------------------------------------------------------------------------
// const nomeUsuario = prompt("Digite seu nome:");
// const vacinaTomada = prompt("Digite a vacina que você tomou:");
// let tempo = "";
// let data = "";
// const primeiraDose = (nome, vacina) => {
//   if (vacina === "Coronavac") {
//     tempo = "28 dias";
//     data = "01/08/2023";
//     console.log(
//       `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
//     );
//   } else if (vacina === "Astrazenica" || vacina === "Pfizer") {
//     tempo = "90 dias";
//     data = "01/09/2023";
//     console.log(
//       `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
//     );
//   } else {
//     console.log(`Vacina não cadastrada.`);
//   }
// };
// console.log(primeiraDose(nomeUsuario, vacinaTomada));

// // LOOP+CONDICIONAL

// // Exercício 6 -------------------------------------------------------------------------------------
// Escreva uma função para validar a segunda dose de um usuário, que receba o nomeDoUsuário e mude o valor da propriedade
// imunização para “completa” para isso vamos te fornecer uma lista de usuários.

// const segundaDose = (nomeDoUsuario) => {
//   const usuarios = [
//     { nome: "Artur", imunizacao: "incompleta" },
//     { nome: "Barbara", imunizacao: "incompleta" },
//     { nome: "Carlos", imunizacao: "incompleta" },
//   ];

//   for (let usuario of usuarios) {
//     if (usuario.nome === nomeDoUsuario) {
//       usuario.imunizacao = "completa";
//     }
//   }

//   console.log(usuarios);
// };

// segundaDose("Barbara");

// // Exercício 7 --------------------------------------------------------------------------------------
// - **Aviso aos atrasados**

//     As pessoas que tomaram a primeira dose da vacina, não voltaram no postinho para a segunda dose e temos que enviar uma mensagem
//     para elas no app.Escreva uma função que ** leia a lista de usuários ** e ** verifique ** se a imunização está completa ou não e caso
//     não esteja completa,  ** imprima no console ** uma mensagem avisando que ele deve voltar ao posto para tomar a segunda dose.

// const avisoAosAtrasados = () => {
//   const usuarios = [
//     { nome: "Artur", imunizacao: "incompleta" },
//     { nome: "Barbara", imunizacao: "completa" },
//     { nome: "Carlos", imunizacao: "incompleta" },
//   ];
//   //  Sua lógica aqui
//   for (let usuario of usuarios) {
//     if (usuario.imunizacao === "incompleta") {
//       console.log(
//         `Olá ${usuario.nome}! Sua imunização está ${usuario.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
//       );
//     } else {
//       console.log(
//         `Olá ${usuario.nome}! Sua imunização está ${usuario.imunizacao}, obrigada.`
//       );
//     }
//   }
// };
// avisoAosAtrasados();
//

// // DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
  {
    nome: "Artur",
    ano: 2000,
    nacionalidae: "brasileiro",
    senha: "123456",
    vacina: "pfizer",
    imunizacao: "incompleta",
  },
  {
    nome: "Bárbara",
    ano: 1984,
    nacionalidae: "brasileira",
    senha: "labenu",
    vacina: "astrazenica",
    imunizacao: "completa",
  },
  {
    nome: "Carlos",
    ano: 2000,
    nacionalidae: "brasileiro",
    senha: "123456",
    vacina: "coronavac",
    imunizacao: "incompleta",
  },
];
const nomeUsuario = prompt("Digite seu nome de usuário:");
const anoDeNascimento = prompt("Digite seu ano de nascimento:");
const anoAtual = prompt("Digite o ano atual:");
const idade = anoAtual - anoDeNascimento;
const senhaDoUsuario = prompt("Digite sua senha de no mínimo 6 caracteres:");
const nacionalidadeDoUsuario = prompt("Digite sua nacionalidade:");
const cadastro = (nome, ano, senha, nacionalidade) => {
  if (idade < 18) {
    console.log("Você deve ter mais de 18 anos para se cadastrar.");
    return;
  }
  if (senha.length < 6) {
    console.log("A senha deve ter no mínimo 6 caracteres.");
    return;
  }
  if (nacionalidade.toLowerCase() !== "brasileira") {
    console.log("Apenas usuários brasileiros podem se cadastrar.");
    return;
  }
  let objetoUsuario = {
    nome: nome,
    ano: ano,
    senha: senha,
    nacionalidade: nacionalidade,
  };
  usuarios.push(objetoUsuario);
  console.log("Usuário cadastrado com sucesso!");
};
cadastro(nomeUsuario, anoDeNascimento, senhaDoUsuario, nacionalidadeDoUsuario);
console.log(usuarios);

const confereSenha = prompt("Digite sua senha:");
const login = (senha) => {
  for (let i of usuarios) {
    if (senha === i.senha) {
      console.log("Senha encontrada!");
    }
  }
  console.log("Senha não encontrada!");
};
console.log(login(confereSenha));

const primeiraDose = () => {
  //  Sua lógica aqui
};
console.log(primeiraDose());
const segundaDose = (nomeDoUsuario) => {
  for (let usuario of usuarios) {
    if (usuario.nome === nomeDoUsuario) {
      usuario.imunizacao = "completa";
    }
  }
  console.log(usuarios);
};
console.log(segundaDose("Artur"));

const avisoAosAtrasados = () => {
  //  Sua lógica aqui
};
console.log(avisoAosAtrasados());
