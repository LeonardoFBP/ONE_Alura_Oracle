/*let NumeroSecretoMaximo = 100;    // Definindo uma variavel para altera-la dentro do math.random
let NumeroSecreto = parseInt(Math.random() * NumeroSecretoMaximo + 1); //Diminuindo  o acoplamento
let tentativa;
let Numerotentativa = 1;
while (NumeroSecreto!= tentativa){
    tentativa = prompt('Escolha seu numero:');

    if (NumeroSecreto == tentativa) {
        console.log('Muito bom, você acertou!! O número era ' + NumeroSecreto + '!!')  
    }
    else{
        if(NumeroSecreto < tentativa){
            alert(`O número ${tentativa}, é maior que o número secreto!!`)
        } 
        else{
            alert(`O número ${tentativa}, é menor que o número secreto!!`)
        }
        Numerotentativa ++
    };
};

let palavraTentativa = Numerotentativa > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto ${NumeroSecreto} com ${Numerotentativa} ${palavraTentativa}.`);

-----------------------------------------------------------------------------------------------------------------
let titulo = document.querySelector('h1');  // Declarando variavel para alterar o texto, DOCUMENT seleciona o HTML, QuerrySelector seleciona o local do HTML.
titulo.innerHTML = 'Jogo do número secreto';  //Para inserir deve usar a variavel com a propriedade.innerHTML e definir.
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número de 1 a 10';

function verificarChute(){
    console.log('Foi realizado um clik.')
} 

*/
let numeroSecreto = gerarNumeroAleatorio()
function ExibirTextoNaTela(tag, texto){  
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
ExibirTextoNaTela('h1','Jogo do Número Secreto');
ExibirTextoNaTela('p','Escolha um número entre 1 e 10');

function verificarChute(){
    console.log('Foi realizado um clik.')
} ;

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1 ) // retorna este valor para variavel
};

