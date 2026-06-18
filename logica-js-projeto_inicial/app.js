alert ("Bem vindo ao Jogo Numero secreto!");
let numeroSecreto = 29;
console.log("O numero secreto é: " + numeroSecreto);
let chute = prompt("Digite um numero entre 0 e 100");

//se o chute for igual ao numero secreto
if (chute == numeroSecreto){
    alert(`Parabéns, você acertou o numero secreto! ${numeroSecreto}`);
}
//se não for igual, o jogador errou
else{
    alert("Que pena, você errou!");
}

