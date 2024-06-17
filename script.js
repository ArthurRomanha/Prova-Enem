let gabarito = ["1A", "2C"];
let minhasRespostas = [];

function corrigirProva(){
    for(let i = 0; i<10; i++){
        let minhaRespostaVez = 0;
        minhaRespostaVez = document.querySelector(`input[name="opcoes${i+1}"]:checked`);
        minhasRespostas.push(minhaRespostaVez.value);
        if(minhasRespostas[i] === gabarito[i]){
            console.log("você acertow");
        }else{
            console.log("errou");
        }
    }
    console.log(minhasRespostas);
}