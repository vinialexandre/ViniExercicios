/*1. Uma imobiliária vende terrenos em zona rural, com tamanhos variados.
Elabore um fluxograma para representar um algoritmo que recebe dois
valores, para comprimento e largura de um terreno, e retorna a área do
mesmo.
*/
function calcularAreaTerreno(largura, comprimento) {
  return largura * comprimento 
}
console.log(calcularAreaTerreno(12,8))


/*
2. O administrador de um haras quer otimizar seu planejamento de compras.
Elabore um fluxograma para representar um programa que calcula quantas
ferraduras são necessárias para equipar todos os cavalos, tendo recebido a
informação do número de cavalos.
*/

function calcularNumeroDeFerraduras(cavalos) {
    return (`São necessárias ${cavalos * 4} ferraduras para equipar todos os cavalos`)

}
console.log(calcularNumeroDeFerraduras(10))



/*
3. Um motorista deseja colocar no seu tanque X reais de gasolina. Elabore um
fluxograma para representar um programa que recebe o preço do litro da
gasolina e o valor do pagamento, e apresenta quantos litros ele conseguiu
colocar no tanque.*/

function calcularLitrosDeGasolina(valorTotal, valorLitro) {
   return (`Vc colocou ${valorTotal/valorLitro} litros de gasolina`)

}
console.log(calcularLitrosDeGasolina(100, 5))




/*
4. Uma nutricionista deseja automatizar algumas informações em seu
consultório. Elabore um fluxograma para representar um algoritmo que
recebe peso e altura do paciente, e retorna o IMC.*/


function calcularImc(peso, altura) {
  return (`Seu IMC é ${(peso/(altura*altura)).toFixed(1)}`)
}
console.log(calcularImc(62, 1.62))



/*
5. O restaurante a quilo Ki-Delícia cobra R$28,00 por cada quilo de refeição.
Elabore um fluxograma para representar um programa que leia o peso do
prato montado pelo cliente (em quilos) e retorne o valor a pagar. Assuma que a
balança já desconte o peso do prato
*/
function  calcularValorRefeicao(peso) {
   return (`Sua refeição custará R$ ${(peso * 28).toFixed(2).replace(".", ",")} reais`)
}
console.log(calcularValorRefeicao(0.600))

