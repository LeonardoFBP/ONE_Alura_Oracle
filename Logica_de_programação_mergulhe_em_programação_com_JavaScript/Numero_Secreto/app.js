let NumeroSecreto = parseInt(Math.random() * 10 + 1); //math.random usa entre 0 e 1, multiplicando chega 
//a numeros maiores, parseInt é para pegar numeros inteiros;
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


