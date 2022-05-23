var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 0;

document.getElementById("valor").focus();

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var elementoTentativas = document.getElementById("tentativas");
  var chute = parseInt(document.getElementById("valor").value);
  
  document.getElementById("valor").focus();
  
  if(tentativas==0){tocarAudio();}
  
  console.log(numeroSecreto);
  tentativas=tentativas+1;
  elementoTentativas.innerHTML =tentativas;

  if(tentativas<=3){
      if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "PARABÉNS !<br>VOCÊ ACERTOU O NÚMERO SECRETO";
        trocarCadeado(chute);
        tirarVisibilidadeItens();
        fimDeJogoVencedor();
      }else if (chute < numeroSecreto) {
        
        if(tentativas==3){
          desabilitaItens(elementoResultado);
          fimDeJogoPerdedor();
        }else{
          elementoResultado.innerHTML ="ERROU  !<br>O NÚMERO SECRETO É MAIOR QUE " + chute;
          trocarCadeado(chute);
        }
      }else if (chute > numeroSecreto) {
        if(tentativas==3){
          desabilitaItens(elementoResultado); 
          fimDeJogoPerdedor();
        }else{
          elementoResultado.innerHTML ="ERROU  !<br>O NÚMERO SECRETO É MENOR QUE " + chute;
          trocarCadeado(chute);
        } 
      }
  }
}


function trocarCadeado(chute){
  var elementoCadeado = document.querySelector("#cadeado").src
  if(elementoCadeado==""){ 
    if(chute==numeroSecreto){
      document.getElementById("cadeado").src="https://raw.githubusercontent.com/JoaoCarlosLemos/imagens/main/cadeadoVerde.png"
    }else{
      document.getElementById("cadeado").src="https://raw.githubusercontent.com/JoaoCarlosLemos/imagens/main/cadeadoVermelho.png"
    }
  }else{
    if(chute==numeroSecreto){
      document.getElementById("cadeado").src="https://raw.githubusercontent.com/JoaoCarlosLemos/imagens/main/cadeadoVerde.png"
    }else{
      document.getElementById("cadeado").src="https://raw.githubusercontent.com/JoaoCarlosLemos/imagens/main/cadeadoVermelho.png"
    }
  }
}

function tirarVisibilidadeItens(){
  document.getElementById('valor').style.display = "none";//torna o elemento de id 'valor' invisível.
  document.getElementById('btnOpen').style.display = "none";//torna o elemento de id 'valor' invisível.
}

function tocarAudio(){
  var audio=document.querySelector('audio')
  audio.currentTime=1.5;
  audio.play();
}

function somVitoria(){
  var audio=document.querySelector('audio')
  audio.pause();
  var somVitoria=document.querySelector('.somVitoria')
  somVitoria.play();           
}

function somDerrota(){
  var audio=document.querySelector('audio')
  audio.pause();
  var somDerrota=document.querySelector('.somDerrota')
  somDerrota.play();           
}

function desabilitaItens(elementoResultado){
  elementoResultado.innerHTML ="MÁXIMO DE TENTATIVAS ATINGIDAS<br>NÚMERO SECRETO : "+numeroSecreto;
  document.getElementById("valor").disabled = true;
  document.getElementById("btnOpen").disabled = true;
}

function fimDeJogoVencedor(){
  document.querySelector("[name='background']").style.backgroundImage = 'url(https://raw.githubusercontent.com/JoaoCarlosLemos/imagens/main/background-numeroSecreto-02.jpg)';
  document.getElementById('btnReiniciar').style.display = "inline";//torna o elemento de id 'btnReiniciar' visível.
  somVitoria();
}

function fimDeJogoPerdedor(){
  document.querySelector("[name='background']").style.backgroundImage = 'url(https://raw.githubusercontent.com/JoaoCarlosLemos/imagens/main/background-numeroSecreto-03.jpg)';
  document.getElementById('btnReiniciar').style.display = "inline";//torna o elemento de id 'btnReiniciar' visível.
  somDerrota();
}

function reiniciar(){
  document.querySelector("[name='background']").style.backgroundImage = 'url(https://raw.githubusercontent.com/JoaoCarlosLemos/imagens/main/background-numeroSecreto-01.jpg)';
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 0;
  var elementoTentativas = document.getElementById("tentativas");
  elementoTentativas.innerHTML =tentativas;
  document.getElementById('valor').style.display = "inline";
  document.getElementById('btnOpen').style.display = "inline";
  document.getElementById("valor").disabled = false;
  document.getElementById("btnOpen").disabled = false;
  document.getElementById('valor').value="0";
  document.getElementById("valor").focus();
  var audio=document.querySelector('audio');
  audio.pause();
}