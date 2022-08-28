/*1. Desenvolva uma função que  o usuário irá informar um número
inteiro e o programa deve calcular e exibir o número imediatamente antecessor ao
número digitado pelo usuário.*/

function mostrarNumeroAntecessor(numero) {
  return  numero - 1
}
console.log(mostrarNumeroAntecessor(parseInt(prompt('informe o n:'))))


function exibirNumeroPosterior() {
  let numeroAntecessor = parseInt(prompt("Digite uma numero inteiro"));
  return numeroAntecessor - 1
}
alert("O número anterior ao digitado é: " + exibirNumeroPosterior());


/*
2. Desenvolva uma função que faz a conversão de temperaturas de Fahrenheit para
Celsius, segundo a fórmula conhecida:
*/
function converterTemperaturaParaCelsius() {
  let fahrenheit = parseFloat(prompt("Temperatura em graus Fahrenheit: ") );
  let celsius = (5*(fahrenheit - 32) / 9).toFixed(2);
  return celsius  
}
console.log("Temperatura em graus Celsius = ", + converterTemperaturaParaCelsius());


/*
3. Desenvolva uma função  que dadas as entradas: distância do trajeto e velocidade
média da viagem, informe o tempo que uma família levará saindo de sua cidade de
férias até o destino previsto. Após o cálculo, o algoritmo deve mostrar o tempo
calculado.*/

function calcularTempoDoTrajeto() {
   let distancia = Number(prompt('Qual a distância percorrida?'))
   let velocidade = Number(prompt('Qual velocidade do veículo?'))
   return `Esta viagem durará ${distancia/velocidade}horas`
}
console.log(calcularTempoDoTrajeto())


/*
4. Desenvolva um algoritmo que receba um número digitado pelo usuário, calcule e
escreva se este número é par.*/
let num = prompt('Digite um número')
function numParImpar(num) {
  if(num%2==0) {
    return ('Esse número é par')
  }else{
    return ('Esse número é ímpar')
  }
}
console.log(numParImpar(num))

/*
5. Desenvolva um algoritmo para ler as 4 notas de um aluno em uma disciplina e exibe a
sua média simples.*/

let  listaNotas = [1.0, 5.0, 4.0, 9.0];
function somarNumeros (lista) {
    let total = lista.reduce((total, numero) => total + numero, 0); // comecei do 0
    return `A média do aluno é: ${total/listaNotas.length}`
}
console.log(somarNumeros(listaNotas));



/*
6. Desenvolva um algoritmo para ler as três notas de um aluno em uma disciplina e
exibe a sua média ponderada (as notas tem pesos respectivos de 1, 2 e 3).*/

let n1 = parseFloat(prompt('Digite sua primeira nota em Matemática'));
let n2 = parseFloat(prompt('Digite sua segunda nota em Matemática'));
let n3 = parseFloat(prompt('Digite sua terceira nota em Matemática'));

function calcularMediaPonderada(n1, n2, n3) {
  let media = (n1 * 1 + n2 * 2 + n3 * 3) / 6;
  return media
}
console.log(calcularMediaPonderada(n1, n2, n3));

let listaNotas_ = [
  { 
    nota: 100,
    peso: 1 
  },
  { 
    nota: 100,
    peso: 2 
  },
  { 
    nota: 100,
    peso: 3 
  }
]

const calcularMediaPonderada = (listaNotas) => {
    let somatorioNotas = 0
    let somatorioPesos = 0
    for(let item of listaNotas){
        somatorioNotas += item.nota * item.peso
        somatorioPesos += item.peso
    }
    return somatorioNotas / somatorioPesos
}

console.log(calcularMediaPonderada(listaNotas_))



/*
7. Desenvolva um algoritmo que lê o nome de um funcionário, o número de horas
trabalhadas, o valor que recebe por hora e o número de filhos. Com estas
informações, calcular o salário deste funcionário, sabendo que para cada filho, o
funcionário recebe 3% a mais, calculado sobre o salário bruto.*/

function calcularSalario() {
  let quantHora = parseFloat(prompt('Digite a quantidade de horas:'));
  let valorHora = parseFloat(prompt('Digite o valor da hora:'));
  let filhos = parseInt(prompt('Digite quantos filhos vc tem:'));
  if (filhos===0 || filhos === '') {
    return (quantHora*valorHora)
  }else{
    return quantHora*valorHora + (filhos/100) * filhos + filhos 
  }
}console.log(calcularSalario())

/*
8. Desenvolva um algoritmo que receba o ano de nascimento de uma pessoa e o ano
atual, calcule e mostre:
a) a idade dessa pessoa em anos;
b) a idade dessa pessoa em meses;
c) a idade dessa pessoa em dias;
d) a idade dessa pessoa em semanas.*/

let anoAtual= Number(parseInt(prompt('Digite ano atual:')));
let anoNascimento = Number(parseInt(prompt('Digite seu ano de nescimento:')));

function calcularIdade (anoAtual, anoNascimento) {
  let idadeEmAnos = anoAtual - anoNascimento
  let idadeEmMeses = idadeEmAnos * 12
  let idadeEmDias = idadeEmMeses * 31
  let idadeEmSemanas =  (idadeEmDias / 7).toFixed(0)
  return (`Idade em anos ${idadeEmAnos} , em meses ${idadeEmMeses} , em dias ${idadeEmDias} e em semanas ${idadeEmSemanas}`)
}
console.log(calcularIdade(anoAtual, anoNascimento));

/*
9. João Felipe recebeu seu salário de R$1.200,00 (líquido) e precisa pagar duas contas
C1 e C2. Como as contas estão atrasadas, João terá de pagar multa de 2% sobre
cada conta, mais o percentual de 0,03% por dia de atraso. Faça um algoritmo que lê o
valor de cada uma das contas e quantos dias estão atrasadas. Calcule e mostre o
valor de cada conta paga e quanto restará do salário do João Felipe.*/

let contaDeLuz = Number(parseInt(prompt('Digite o valor da conta de luz')));
let contaDeAgua = Number(parseInt(prompt('Digite o valor da conta de água')));
let diasDeAtraso = Number(parseInt(prompt('Digite os dias de atraso')));
let salario = 1200
let multa = 0.02
let juros = diasDeAtraso * 0.003

function calcularContasJurosEMulta(contaDeLuz, contaDeAgua, diasDeAtraso ) {
  let contaLuzComJuros
  let contaAguaComJuros
  if(diasDeAtraso == 0 && !isNaN(diasDeAtraso)) {
    console.log(`Conta de luz R$ ${contaDeLuz} reais, e de água R$ ${contaDeAgua} reais`);
    console.log(`Restaram de salário R$ ${salario - (contaDeLuz + contaDeAgua)} reais`);
  }else{
    console.log(`Conta de luz valor com multa e juros R$ ${contaLuzComJuros = contaDeLuz + (contaDeLuz * multa) + (contaDeLuz * juros)} reais`);
    console.log(`Conta de água valor com multa e juros R$ ${contaAguaComJuros = contaDeAgua + (contaDeAgua * multa) + (contaDeAgua * juros)} reais`);
    console.log(`Restaram de salário R$ ${salario - (contaLuzComJuros + contaAguaComJuros)} reais`);
  }
}

console.log(calcularContasJurosEMulta(contaDeLuz, contaDeAgua, diasDeAtraso));


/*
10.Desenvolva um algoritmo para calcular o resultado de uma eleição de um municipal.
A entrada de dados será:
● Número total de eleitores;
● Número de votos válidos;
● Número de votos brancos;
● Número de votos nulos.
O algoritmo deve calcular e exibir para o usuário as seguintes informações (em
relação ao total de eleitores:
● Percentual de votos válidos;
● Percentual de votos brancos;
● Percentual de votos nulos*/ 

