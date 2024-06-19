let gabarito = ["1A", "2C", "3A", "4A", "5A", "6A", "7B", "8A", "9A", "10A"];
let minhasRespostas = [];

document.addEventListener('submit', function(event){
    event.preventDefault();
    for(let i = 0; i<10; i++){
    let minhaRespostaVez = document.querySelector(`input[name="opcoes${i+1}"]:checked`);
        minhasRespostas.push(minhaRespostaVez.value);
        
        let idLabelDaVez =`label${minhaRespostaVez.id}`;
        let labelOpcaoSelecionadaDaVez = document.getElementById(idLabelDaVez);
        if(minhasRespostas[i] === gabarito[i]){
            labelOpcaoSelecionadaDaVez.style.backgroundColor = "green";
        }else{
            labelOpcaoSelecionadaDaVez.style.backgroundColor = "red";
        }
    }
    console.log(minhasRespostas);
});