let NumeroSecretoMaximo = 100;    // Definindo uma variavel para altera-la dentro do math.random
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


