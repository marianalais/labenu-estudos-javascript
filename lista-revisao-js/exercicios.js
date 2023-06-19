// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  const quantidade = array.length;
  return quantidade;
}
retornaTamanhoArray([1, 2, 3, 4]);

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const invertido = array.reverse();
  return invertido;
}
console.log(retornaArrayInvertido([1, 2, 3, 4]));

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}
retornaArrayOrdenado([5, 2, 3, 4, 1, 6]);
// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const pares = array.filter((value) => {
    return value % 2 === 0;
  });
  return pares;
}
console.log(retornaNumerosPares([10, 5, 3, 20, 6]));

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const paresElevado2 = array
    .filter((value) => {
      return value % 2 === 0;
    })
    .map((value) => {
      return value ** 2;
    });
  return paresElevado2;
}
console.log(retornaNumerosParesElevadosADois([10, 5, 3, 20, 6]));

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  return maiorNumero;
}
console.log(retornaMaiorNumero([10, 5, 3, 20, 6]));

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  if (num1 > num2 || num1 === num2) {
    return {
      maiorNumero: num1,
      maiorDivisivelPorMenor: num1 % num2 === 0,
      diferenca: num1 - num2,
    };
  }
  if (num2 > num1) {
    return {
      maiorNumero: num2,
      maiorDivisivelPorMenor: num2 % num1 === 0,
      diferenca: num2 - num1,
    };
  }
}
console.log(retornaObjetoEntreDoisNumeros(2, 10));

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const numerosPares = [];
  let contador = 0;

  while (numerosPares.length < n) {
    if (contador % 2 === 0) {
      numerosPares.push(contador);
    }
    contador++;
  }

  return numerosPares;
}
console.log(retornaNPrimeirosPares([5, 1, 2, 6, 7, 10, 2, 4]));

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC) {
    return "Equilátero";
  } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
    return "Escaleno";
  } else {
    return "Isósceles";
  }
}
classificaTriangulo(5, 5, 5);

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const maiorEMenor = array.sort((a, b) => a - b);
  const segundoMenor = maiorEMenor[1];
  const segundoMaior = maiorEMenor[maiorEMenor.length - 2];
  const novoArray = [segundoMaior, segundoMenor];
  return novoArray;
}
retornaSegundoMaiorESegundoMenor([10, 5, 2, 4, 1]);
// EXERCÍCIO 11
const objetoFilme = {
  nome: "O Diabo Veste Prada",
  ano: 2006,
  diretor: "David Frankel",
  atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
};
function retornaChamadaDeFilme(filme) {
  const frase = `Venha assistir ao filme ${filme.nome}, de ${
    filme.ano
  }, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`;
  return frase;
}
retornaChamadaDeFilme(objetoFilme);

// EXERCÍCIO 12
const objetoPessoa = {
  nome: "Astrodev",
  idade: 25,
  email: "astrodev@labenu.com.br",
  endereco: "Rua do Futuro, 4",
};
function retornaPessoaAnonimizada(pessoa) {
  return {
    ...pessoa,
    nome: "ANÔNIMO",
  };
}
retornaPessoaAnonimizada(objetoPessoa);
// EXERCÍCIO 13A
const pessoa = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 },
];

function retornaPessoasAutorizadas(pessoas) {
  const pessoasAutorizadas = pessoas.filter((value) => {
    return value.idade > 14 && value.idade < 60 && value.altura > 1.5;
  });
  return pessoasAutorizadas;
}
retornaPessoasAutorizadas(pessoa);

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoAutorizadas = pessoas.filter((value) => {
    return value.idade <= 14 || value.idade > 60 || value.altura < 1.5;
  });
  return pessoasNaoAutorizadas;
}
retornaPessoasNaoAutorizadas(pessoa);
// EXERCÍCIO 14
const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] },
];
function retornaContasComSaldoAtualizado(contas) {}
retornaContasComSaldoAtualizado(contas);

// EXERCÍCIO 15A
const consultas = [
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Márcia", dataDaConsulta: "04/05/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
];
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort((a, b) => a.nome.localeCompare(b.nome));
}
retornaArrayOrdenadoAlfabeticamente(consultas);
// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  return consultas.sort(
    (a, b) => new Date(a.dataDaConsulta) - new Date(b.dataDaConsulta)
  );
}

console.log(retornaArrayOrdenadoPorData(consultas));
