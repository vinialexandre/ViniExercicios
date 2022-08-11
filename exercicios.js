/* 1) Junte os items desse array e forme uma frase respeitando um espaco entre as palavras. */
let listaString = ['tudo', 'está', 'separado']

listaString = listaString.join(' ','' )

console.log(listaString)






/* 2) Desenvolva uma funcção que receba 2 números, e retorne apenas os números pares entre o intervalo dos mesmos.
Ex: 1 a 10
saida: 2,4,6,8,10 */

function numPares (numeros) {
  for (let i = 1; i <= 10; i++){
     if (i%2==0)  {
         console.log(i)
     }
        
  }     

}
numPares(1, 10)



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
    let listaDePessoas = {};
    listaDePessoas.idade = lista.filter(pessoas => pessoas.idade >= 18)
    return listaDePessoas 
}

console.log(numeroDePessoasMaiorIdade(listaDePessoas));



/*
4) Crie uma função que receba um array/lista e retorne a lista ao contrário!
*/
function inverterLista (lista) {
   let novaLista = []
   novaLista = lista.reverse(e => e)
   return novaLista
 
}

console.log(inverterLista(['um', 'dois', 'tres', 'quatro']));

//saida: quatro, tres, dois, um




/*5)Implemente uma função que receba uma lista de números e retorne a soma total dos números.
Ex: [1,2,3,4,5]
saida: 15
*/

let  numeros = [1, 2, 3, 4, 5];
 var total = numeros.reduce((total, numero) => total + numero, 0);
  console.log(total);






