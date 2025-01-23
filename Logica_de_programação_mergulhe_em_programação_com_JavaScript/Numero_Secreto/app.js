let NumeroSecreto = 29;
let tentativa 
let Numerotentativa = 1   
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
}

if(Numerotentativa == 1){
    alert(`Muito bom, você acertou em ${Numerotentativa} tentativa!!`)
}
else {                                                                                                                                              
    alert(`Muito bom, você acertou em ${Numerotentativa} tentativas!!`)
}