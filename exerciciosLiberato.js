/*1. Uma imobiliária vende terrenos em zona rural, com tamanhos variados.
Elabore um fluxograma para representar um algoritmo que recebe dois
valores, para comprimento e largura de um terreno, e retorna a área do
mesmo.
*/


let largura = prompt('Digite a largura do terreno')
let comprimento = prompt('Digite o comprimento do terreno')
let area = largura * comprimento
alert (`O terreno mede ${area} m2`)



/*
2. O administrador de um haras quer otimizar seu planejamento de compras.
Elabore um fluxograma para representar um programa que calcula quantas
ferraduras são necessárias para equipar todos os cavalos, tendo recebido a
informação do número de cavalos.
*/

let cavalos = prompt('Digite o número de cavalos')
alert (`Serão necessárias ${cavalos * 4 } ferraduras para esse número de cavalos se todos tiverem 4 patas kkk`)
                    



/*
3. Um motorista deseja colocar no seu tanque X reais de gasolina. Elabore um
fluxograma para representar um programa que recebe o preço do litro da
gasolina e o valor do pagamento, e apresenta quantos litros ele conseguiu
colocar no tanque.*/


let precoLitroGasolina = prompt('Qual valor do litro da gasolina')
let valorAbastecimento = prompt('Qual valor vc quer colocar de gasolina?')
let litrosGAsolina = alert(`Você colocou ${valorAbastecimento/precoLitroGasolina} litros de gasolina`)



/*
4. Uma nutricionista deseja automatizar algumas informações em seu
consultório. Elabore um fluxograma para representar um algoritmo que
recebe peso e altura do paciente, e retorna o IMC.*/


let peso = prompt('Qual seu peso?')
let altura = prompt('Qual sua altura?')
alert(`Seu IMC é ${(peso/(altura*altura)).toFixed(2)}`)



/*
5. O restaurante a quilo Ki-Delícia cobra R$28,00 por cada quilo de refeição.
Elabore um fluxograma para representar um programa que leia o peso do
prato montado pelo cliente (em quilos) e retorne o valor a pagar. Assuma que a
balança já desconte o peso do prato
*/

let pesoDoPratoMontadoPeloCliente = parseFloat(prompt('Digite o peso'))
console.log(`Seu almoço custará R$ ${(pesoDoPratoMontadoPeloCliente * 28).toFixed(2).replace(".", ",")} reais`)


