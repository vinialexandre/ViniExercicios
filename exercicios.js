/* 1) Junte os items desse array e forme uma frase respeitando um espaco entre as palavras. */
let listaString = ['tudo', 'está', 'separado']

listaString = listaString.join(' ','' )

console.log(listaString)



/* 2) Desenvolva uma funcção que receba 2 números, e retorne apenas os números pares entre o intervalo dos mesmos.
Ex: 1 a 10
saida: 2,4,6,8,10 */

function retornarNumerosParesEntreDoisNumeros(x, y) {
  // verifica se x é par (se não for, soma 1)
  if (x % 2 != 0) {
      x++; // x passa a ser par
  }
  // nesse ponto eu garanti que x é par
  while (x <= y) {
    console.log(x)
      x += 2; // soma 2, assim já vai para o próximo número par
  }
}
retornarNumerosParesEntreDoisNumeros(1,10);




/* 3) Implemente a função numeroDePessoasMaiorDeIdade que recebe uma lista como argumento
 e deve retornar o numero total de pessoas maior de idade 
 deve retornar o numero de pessoas maior de idade */
let listaDePessoas = [
    {nome : 'gabriel', idade:22 },
    {nome : 'bia', idade:18},
    {nome : 'henrique', idade:21},
    {nome : 'joão', idade:10},
    {nome : 'giovana', idade:21},
    {nome : 'marcelo', idade:9},
    {nome : 'gustavo', idade:35},
    {nome : 'vitoria', idade:7}
  ]
  
  
function numeroDePessoasMaiorIdade (lista) {
     let quantidadeDePessoasPorIdade = [];
     quantidadeDePessoasPorIdade = lista.filter(function(pessoa) { return (pessoa.idade >=18); }).length
          return  quantidadeDePessoasPorIdade
}
console.log(numeroDePessoasMaiorIdade(listaDePessoas));



/*
4) Crie uma função que receba um array/lista e retorne a lista ao contrário!
*/
function inverterLista (lista) {
   let novaLista = []
   return novaLista = lista.reverse();
}

console.log(inverterLista(['um', 'dois', 'tres', 'quatro']));

//saida: quatro, tres, dois, um




/*5)Implemente uma função que receba uma lista de números e retorne a soma total dos números.
Ex: [1,2,3,4,5]
saida: 15
*/


let  listaDeNumeros = [1, 2, 3, 4, 5];
function somarNumeros (lista) {
    let  total = lista.reduce((total, numero) => total + numero, 0); // começa do zero
    return total
}
console.log(somarNumeros(listaDeNumeros)); // reduce tem o acumulador






