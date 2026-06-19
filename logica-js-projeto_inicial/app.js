alert ("Bem vindo ao Jogo Numero secreto!");
let numeroSecreto = 29;
console.log("O numero secreto é: " + numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute for diferente do numero secreto, o jogador erra
while(chute != numeroSecreto){
    chute = prompt("Digite um numero entre 0 e 100");  
    //se o chute for igual ao numero secreto
    if (chute == numeroSecreto){
        alert(`Parabéns, você acertou o numero secreto! ${numeroSecreto} com ${tentativas} tentativas!`);
}   //se não for igual, o jogador errou
        else{
                alert("Que pena, você errou!");
             if(numeroSecreto > chute){
                alert(`O numero secreto é maior que ${chute}!`);
        }
                else{
                    alert(`O numero secreto é menor que ${chute}!`);
        }

         tentativas++;
    }

}

