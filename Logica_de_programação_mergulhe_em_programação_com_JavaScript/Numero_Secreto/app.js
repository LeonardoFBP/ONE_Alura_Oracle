let NumeroSecreto = 29;
let tentativa 
let Numerotentativa = 1   // Declarando a variavel p/ ao final quando der erro acrescentar mais 1.
while (NumeroSecreto!= tentativa){
    tentativa = prompt('Escolha seu numero:');

    if (NumeroSecreto == tentativa) {
        console.log('Muito bom, você acertou!! O número era ' + NumeroSecreto + '!!') 
        
        alert(`Muito bom, você acertou em ${Numerotentativa} tentativas!!`)
        
    }
    else{
        if(NumeroSecreto < tentativa){
            alert(`O número ${tentativa}, é maior que o número secreto!!`)
        } 
        else{
            alert(`O número ${tentativa}, é menor que o número secreto!!`)
        }
        Numerotentativa ++ // acrescentando mais um numero a tentativa
    };

}