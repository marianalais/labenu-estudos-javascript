//Parte 1

let operacao1 = 5 > 20 && 5 > 2;
let operacao2 = 5 === 5 || 5 === "5";
let operacao3 = !(20 > 50);
let operacao4 = !(20 > 50 || 50 > 60);

// console.log(operacao1);
// console.log(operacao2);
// console.log(operacao3);
// console.log(operacao4);

//Parte 2

const salario = 2000;
const auxilioCreche = 91;
const comissaoSobreVendas = 0.1;

let vendaJan = 5784.5;
let vendaFev = 3418.41;
let vendaMar = 4124.1;
let vendaAbr = 1874;
let vendaMai = 7000;
let vendaJun = 9450;

const desconto = 0.05;
let salarioAposInss = 0.95;

//1) Calcular salário fixo mais o auxílio creche

let salarioMaisAuxilio = salario + auxilioCreche;
console.log(`O salário fixo mais o auxílio creche é: ${salarioMaisAuxilio}`);

//2) Quanto Fulano de Silva receberá de comissão em janeiro

let comissaoJan = comissaoSobreVendas * vendaJan;
console.log(`Fulano da Silva receberá de comissao em janeiro: ${comissaoJan}`);

//3) Quanto Fulano de Silva será descontado em janeiro pelo INSS

let descontoJan = desconto * (salario + comissaoJan);
console.log(
  `Fulano da Silva será descontado em janeiro pelo INSS: ${descontoJan}`
);

//4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

let liqJan =
  (salario + vendaJan * comissaoSobreVendas) * salarioAposInss + auxilioCreche;
console.log(`Salario Janeiro: ${liqJan}`);

let liqFev =
  (salario + vendaFev * comissaoSobreVendas) * salarioAposInss + auxilioCreche;
console.log(`Salario Fevereiro: ${liqFev}`);

let liqMar =
  (salario + vendaMar * comissaoSobreVendas) * salarioAposInss + auxilioCreche;
console.log(`Salario Março: ${liqMar}`);

let liqAbr =
  (salario + vendaAbr * comissaoSobreVendas) * salarioAposInss + auxilioCreche;
console.log(`Salario Abril: ${liqAbr}`);

let liqMai =
  (salario + vendaMai * comissaoSobreVendas) * salarioAposInss + auxilioCreche;
console.log(`Salario Maio: ${liqMai}`);

let liqJun =
  (salario + vendaJun * comissaoSobreVendas) * salarioAposInss + auxilioCreche;
console.log(`Salario Junho: ${liqJun}`);

//5. A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio.

let mediaSalarioLiq = (liqJan + liqFev + liqMar + liqAbr + liqMai + liqJun) / 6;
console.log(`Média Janeiro a Junho: ${mediaSalarioLiq}`);
