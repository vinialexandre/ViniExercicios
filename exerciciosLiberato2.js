/*1. Desenvolva o algoritmo de um programa onde o usuário irá informar um número
inteiro e o programa deve calcular e exibir o número imediatamente antecessor ao
número digitado pelo usuário.*/

let numero = prompt('Digite um número')
console.log("O número antecessor é",(numero-1))

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
console.log(velocidadeMedia/distancia,"horas será o tempo estimado da viagem")



/*
4. Desenvolva um algoritmo que receba um número digitado pelo usuário, calcule e
escreva se este número é par.*/

let numeroParImpar = Number(prompt('Digite um número'));
if (numeroParImpar%2==0){
  console.log('Esse número é par')
}else{
  console.log('Esse número é ímpar')
}



/*
5. Desenvolva um algoritmo para ler as 4 notas de um aluno em uma disciplina e exibe a
sua média simples.*/

function calcularNota(n1,n2,n3,n4) {
  let media 
   return media = ((n1+n2+n3+n4) / 4).toFixed(1)
}
console.log(calcularNota(4.5, 4.7, 4.7, 4.0))
    



/*
6. Desenvolva um algoritmo para ler as três notas de um aluno em uma disciplina e
exibe a sua média ponderada (as notas tem pesos respectivos de 1, 2 e 3).






7. Desenvolva um algoritmo que lê o nome de um funcionário, o número de horas
trabalhadas, o valor que recebe por hora e o número de filhos. Com estas
informações, calcular o salário deste funcionário, sabendo que para cada filho, o
funcionário recebe 3% a mais, calculado sobre o salário bruto.




8. Desenvolva um algoritmo que receba o ano de nascimento de uma pessoa e o ano
atual, calcule e mostre:
a) a idade dessa pessoa em anos;
b) a idade dessa pessoa em meses;
c) a idade dessa pessoa em dias;
d) a idade dessa pessoa em semanas.





9. João Felipe recebeu seu salário de R$1.200,00 (líquido) e precisa pagar duas contas
C1 e C2. Como as contas estão atrasadas, João terá de pagar multa de 2% sobre
cada conta, mais o percentual de 0,03% por dia de atraso. Faça um algoritmo que lê o
valor de cada uma das contas e quantos dias estão atrasadas. Calcule e mostre o
valor de cada conta paga e quanto restará do salário do João Felipe.
10.Desenvolva um algoritmo para calcular o resultado de uma eleição de um municipal.
A entrada de dados será:
● Número total de eleitores;
● Número de votos válidos;
● Número de votos brancos;
● Número de votos nulos.
O algoritmo deve calcular e exibir para o usuário as seguintes informações (em
relação ao total de eleitores):
● Percentual de votos válidos;
● Percentual de votos brancos;
● Percentual de votos nulos*/