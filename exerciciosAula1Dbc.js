/*
1) Crie um programa que, a partir de um texto que o usuário digitar (prompt), verifique:
   - Se o texto for igual à 'SIM' informe um alerta para o usuário informando o texto "Parabéns";
   - Se o texto for igual à 'Não' solicite novamente para o usuário informar algum texto e após isso mostre para ele este último texto digitado em um alerta;
   - Se for digitado qualquer outra string solicite uma confirmação para o usuário com o texto: 'Você tem noções dos seus atos?'
*/
let textoUsuario = prompt('Você estuda programação?')
if (textoUsuario==='SIM') {
   alert('Parabens, você será bem sucedido!!')
}if (textoUsuario==='Não') {
   let texto= prompt('E qual profissão vc gostariua de seguir?')
   alert(texto)
}if (textoUsuario !== 'SIM' && textoUsuario !== 'Não') {
   confirm('Você tem noções dos seus atos?')
}


/*
2) Crie um programa que solicita para o usuário dois valores de texto, nome do cliente e nome do atendente;
   Exiba um alerta para o usuário com a mensagem "Olá cliente eu me chamo atendente, em que posso ajudar?" (Interpolação)
*/ 
let cliente = prompt('Digite seu nome');
let atendente = prompt('Qual o nome do atendente?')
alert (`Olá , ${ cliente } ,eu me chamo ${atendente}`)


/*
3) Crie um programa que possui 3 variáveis do tipo Boolean (true / false);
   nomes das variáveis: ehSextaFeira, numeroEhMaiorQueQuatro, ehUmValorVazio;
   
   Atribua à variável ehSextaFeira o resultado de uma confirmação solicitada para o usuário "Hoje é sexta-feira?";
   Atribua à variável numeroEhMaiorQueQuatro o resultado da comparação de um número solicitado para o usuário verificando se esse número é maior que 4;
   
   Para a variável ehUmValorVazio faça o seguinte:
   Você precisa solicitar uma informação para o usuário e armazenar essa informação em uma variável diferente (ex: valorDigitado);
   
   Agora na variável ehUmValorVazio armazene o resultado das seguintes comparações do valor digitado:
   se o valor é igual à null ou se o valor é igual à undefined ou se o valor é uma string vazia ('');
*/
   
   
   let ehSextaFeira, numeroEhMaiorQueQuatro, ehUmValorVazio;
   ehSextaFeira = confirm('Hoje é sexta-feira?')
   umero=prompt('Digite um número')
   numeroEhMaiorQueQuatro=numero>4
   let valorDigitado= prompt('Digite um valor')
   ehUmValorVazio=valorDigitado===null || valorDigitado===undefined || valorDigitado===''
 
   
/*
4) Crie um programa que recebe dois números e uma operação desejada e mostre o resultado dessa operação (operações válidas: '+', '-', '*', '/'), 
	adicione também uma validação para caso a operação escolhida não seja uma das operações válidas OU se um dos números digitados seja um valor inválido também;
   Caso a validação encontre um erro mostre um alerta informando o usuário;
   Obs: Lembrando também que não é possível dividir por zero (ou seja, tratem isso também);
   	  Não é permitido utilizar a função "eval"
*/
let num1 = parseInt(prompt('Didite um número'));
let num2 = parseInt(prompt('Digite outro número'));
let operacao = prompt('Escolha qual operação deseja fazer: +, -, *, /')

if( isNaN(num1) &&  isNaN(num2) ){
  alert("entradas invalidas")
}

if(operacao==='+'){
  alert(num1 + num2)
}else if(operacao === '-'){
  alert(num1 - num2)
}else if(operacao === '*' && num1 !== 0 && num2 !== 0){
  alert(num1 * num2)
}else if(operacao === '/' && num1 !== 0 && num2 !== 0){
  alert(num1 /num2)
}else{
  alert('valor inválido');
}



/*
5) Crie um programa que recebe 3 notas (T1, T2 e P1) como números reais (float, ex: 5.2), realize a média dessas notas e realize a seguinte verificação:
   (menor que 5 = alerta de reprovado, de 5 até 7 = alerta de recuperação e acima de 7 = alerta de parabenização)
   Obs: adicione as validações para ter certeza que os números inseridos estão certos e caso algum número seja inválido façam os devidos tratamentos;
*/  


let n1 = Number.parseFloat(prompt('informe primeira nota'))
let n2 = Number.parseFloat(prompt('informe segunda nota'))
let n3 = Number.parseFloat(prompt('informe terceira nota'))

if( isNaN(n1)|| isNaN(n2) || isNaN(n3)) {
   alert("entradas invalidas")
}else{
   let media = parseFloat(n1 + n2 + n3)/3
     
   if(media > 7){ 
      alert('aprovado')
   }else if(media <= 7 && media >= 5){
      alert('recuperação')
   }else{
      alert('reprovado')
   }
}




/*
6) Crie um programa que solicite para o usuário que escolha uma das opções do menu:
   1 - Fazer checkin (exibe um alert de boas vindas);
   2 - Fazer checkout (mostra uma caixa de confirmação perguntando se tem certeza e caso confirme exibe um alerta de despedida);
   3 - Estender hospedagem (pergunta pro usuário quantos dias gostaria de estender e se for um número válido e maior que zero exibe um alerta de sucesso informando que a hospedagem foi estendida em X dias)
   4 - Sair (exibe alerta de "Ok")
   
   Obs: caso não seja nenhuma dessas opções exiba um alerta de opção inválida   
*/  

let  opcoes = prompt ('1-Checkin \n 2-Checkout \n 3-Estender Estadia \n 4-Sair' )
if  (opcoes === '1') {
    alert('Seja muito bem vindo!!')
}else if (opcoes==='2') {
    confirm('Tem certeza que quer fazer seu Checkout?')
    alert('Foi um prazer recebê-lo em nosso estabelecimento')
}else if (opcoes ==='3' ) {
     let estenderEstadia =  Number.parseInt(prompt('Quantos dia você quer permanecer ?'))
     if(isNaN(estenderEstadia) &&  (estenderEstadia > 0)){
         alert(`Você permanecera conosco por mais  ${estenderEstadia} dias`) 
     }
}        
