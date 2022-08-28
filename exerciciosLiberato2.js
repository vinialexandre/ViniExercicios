/*1. Desenvolva o algoritmo de um programa onde o usuário irá informar um número
inteiro e o programa deve calcular e exibir o número imediatamente antecessor ao
número digitado pelo usuário.*/

let numero = parseInt(prompt('Digite um número'))
console.log("O número antecessor é o",(numero-1))

/*
2. Desenvolva um algoritmo que faz a conversão de temperaturas de Fahrenheit para
Celsius, segundo a fórmula conhecida:
*/


let fahrenheit = parseFloat( prompt("Temperatura em graus Fahrenheit: ") );
let celsius = (5*(fahrenheit - 32) / 9).toFixed(2);
console.log("Temperatura em graus Celsius = ", celsius);

/*
3. Desenvolva um algoritmo que dadas as entradas: distância do trajeto e velocidade
média da viagem, informe o tempo que uma família levará saindo de sua cidade de
férias até o destino previsto. Após o cálculo, o algoritmo deve mostrar o tempo
calculado.*/


let velocidadeMedia = prompt('Digite a velocidade ');
let distancia = prompt('Digite a distância percorrida');
console.log(" O tempo desta viagem será de " ,  distancia/velocidadeMedia )


/*
4. Desenvolva um algoritmo que receba um número digitado pelo usuário, calcule e
escreva se este número é par.*/

let numeroParImpar = Number(prompt('Digite um número'));
if (numeroParImpar%2==0) {
   console.log('Esse número é par')
}else{
   console.log('Esse número é ímpar')
}


/*
5. Desenvolva um algoritmo para ler as 4 notas de um aluno em uma disciplina e exibe a
sua média simples.*/

let listaNotas = [7.0, 5.5, 6.0, 5.0];
let soma = 0;
for(let i = 0; i < listaNotas.length; i++) {
    soma += (listaNotas[i] / listaNotas.length)
}
console.log(parseFloat(soma).toFixed(2))



/*
6. Desenvolva um algoritmo para ler as três notas de um aluno em uma disciplina e
exibe a sua média ponderada (as notas tem pesos respectivos de 1, 2 e 3).*/

let N1 = parseFloat(prompt('Digite sua primeira nota em Matemática'));
let N2 = parseFloat(prompt('Digite sua segunda nota em Matemática'));
let N3 = parseFloat(prompt('Digite sua terceira nota em Matemática'))

let media = (N1 * 1 + N2 * 2 + N3 * 3) / 6;
console.log("Media ponderada é: " + media.toFixed(1))


/*
7. Desenvolva um algoritmo que lê o nome de um funcionário, o número de horas
trabalhadas, o valor que recebe por hora e o número de filhos. Com estas
informações, calcular o salário deste funcionário, sabendo que para cada filho, o
funcionário recebe 3% a mais, calculado sobre o salário bruto.*/

let nome = prompt('Digite o nome do funcionário')
let valorHora= parseFloat(prompt('Digite o valor da Hora'));
let quantHoras= parseFloat(prompt('Digite a quantidade de horas'));
let filhos= parseFloat(prompt('digite numero de filhos , se não tiver digite 0'))

let salario = valorHora*quantHoras
if(filhos===0 && filhos ==='') {
  console.log(salario)
}else{
  console.log (`Funcionário(a) ${nome} receberá ${salario = salario * (3/100) * filhos + salario}`)
}

/*
8. Desenvolva um algoritmo que receba o ano de nascimento de uma pessoa e o ano
atual, calcule e mostre:
a) a idade dessa pessoa em anos;
b) a idade dessa pessoa em meses;
c) a idade dessa pessoa em dias;
d) a idade dessa pessoa em semanas.*/


let anoNascimento = parseInt(prompt('Digite seu ano  de nascimento'));
let anoAtual = parseInt(prompt('Em qual ano estamos?'));
let idadeAnos = anoAtual - anoNascimento 
let idadeMeses = idadeAnos * 12
let idadeDias = idadeMeses * 31
let idadeSemanas = (idadeDias/7).toFixed(0)

console.log(`Idade em anos será: ${idadeAnos} em meses: ${idadeMeses} em dias: ${idadeDias} em semanas: ${idadeSemanas} `);


/*
9. João Felipe recebeu seu salário de R$1.200,00 (líquido) e precisa pagar duas contas
C1 e C2. Como as contas estão atrasadas, João terá de pagar multa de 2% sobre
cada conta, mais o percentual de 0,03% por dia de atraso. Faça um algoritmo que lê o
valor de cada uma das contas e quantos dias estão atrasadas. Calcule e mostre o
valor de cada conta paga e quanto restará do salário do João Felipe.*/

let salarioLiquido = 1200
let valorContaLuz = parseFloat(prompt('Digite o valor da conta de luz'));
let valorContaAgua= parseFloat(prompt('Digite o valor da conta água'));
let diasDeAtraso= parseInt(prompt('Digite quantidade de dias em atraso'));


if(diasDeAtraso > 0 && !isNaN(diasDeAtraso)) { 
  valorContaLuz = valorContaLuz * 0.02 + valorContaLuz
  valorContaAgua = valorContaAgua * 0.02 + valorContaAgua

  valorContaLuz = parseFloat(((valorContaLuz * 0.003) * diasDeAtraso + valorContaLuz).toFixed(2))
  valorContaAgua = parseFloat(((valorContaAgua * 0.003) * diasDeAtraso + valorContaAgua).toFixed(2))
  salarioLiquido = parseFloat((salarioLiquido  -  (valorContaLuz + valorContaAgua)).toFixed(2))
  
  console.log (`A conta de luz será R$${valorContaLuz.toString().replace(',', '.')} com ${diasDeAtraso} dias de atraso`)
  console.log (`A conta de água será R$${valorContaAgua.toString().replace(',', '.')} com ${diasDeAtraso} dias de atraso`)
  console.log (`Restará R$${salarioLiquido.toString().replace(',', '.')} de salário líquido`)
}else{
  salarioLiquido = (salarioLiquido  -  (valorContaLuz + valorContaAgua)).toFixed(2)

  console.log (`A conta de luz será ${valorContaLuz.replace(',', '.')} com ${diasDeAtraso} dias de atraso`)
  console.log (`A conta de água será ${valorContaAgua.replace(',', '.')} com ${diasDeAtraso} dias de atraso`)
  console.log (`Restará R$${salarioLiquido.replace(',', '.')} de salário líquido`)
}


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

let numeroTotalDeEleitores 
let numeroDeVotosValidos = parseInt(prompt ('Qual número de votos válidos?'))
let numeroDeVotosNulos = parseInt(prompt('Qual o número de votos nulos?'));
let numeroDeVotosBrancos = parseInt(prompt('Qual o número de votos em branco?'));
                               
numeroTotalDeEleitores = numeroDeVotosValidos + numeroDeVotosBrancos + numeroDeVotosNulos
numeroDeVotosValidos = parseFloat(((numeroDeVotosValidos/numeroTotalDeEleitores) * 100).toFixed(2));
numeroDeVotosBrancos = parseFloat(((numeroDeVotosBrancos/numeroTotalDeEleitores) * 100).toFixed(2));
numeroDeVotosNulos = parseFloat(((numeroDeVotosNulos/numeroTotalDeEleitores) * 100).toFixed(2));
console.log(`Foram ${numeroTotalDeEleitores} eleitores no total`)
console.log (`Sendo que ${numeroDeVotosValidos}% de votos válidos, ${numeroDeVotosNulos}% de votos nulos e , ${numeroDeVotosBrancos}% de votos em brancos`)