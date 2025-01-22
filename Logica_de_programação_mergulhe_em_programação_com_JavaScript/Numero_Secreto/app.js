let NumeroSecreto = 29;
let tentativa = prompt('Escolha seu numero:');
if (NumeroSecreto == tentativa) {
    console.log('Muito bom, você acertou!! O número era ' + NumeroSecreto + '!!') 
    // ou ${NumeroSecreto}              OUTRO METODO DE INSERIR VARIAVEIS
  
    // Em inspecionar irá mostrar em console.
    // Este escopo esta definindo que sempre será alterado automaticamente a variavel
    // isto se chama diminuir o ACOPLAMENTO do codigo, sendo uma boa pratica deixando mais automatico
    alert('Muito bom, você acertou!!')
    
}
else{
    if(NumeroSecreto < tentativa){
        alert(`O número ${tentativa}, é maior que o número secreto!!`)
    } 
    else{
        alert(`O número ${tentativa}, é menor que o número secreto!!`)
    }
};