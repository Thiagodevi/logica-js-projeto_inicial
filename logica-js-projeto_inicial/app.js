alert ("Bem vindo ao Jogo Numero secreto!");
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
console.log("O numero secreto é: " + numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute for diferente do numero secreto, o jogador erra
while(chute != numeroSecreto){
    chute = prompt(`Digite um numero entre 1 e ${numeroMaximo}`);  

    //se o chute for igual ao numero secreto
    if (chute == numeroSecreto){
        break;       }   

//se não for igual, o jogador errou
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

let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabéns, você acertou o numero secreto! ${numeroSecreto} com ${tentativas} ${palavraTentativas}!`);

// if (tentativas > 1 ){

//         alert(`Parabéns, você acertou o numero secreto! ${numeroSecreto} com ${tentativas} tentativas!`);
// }

//  else{

//         alert(`Parabéns, você acertou o numero secreto! ${numeroSecreto} com ${tentativas} tentativa!`);   
//  }