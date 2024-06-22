let gabarito = ["1A", "2C", "3A", "4A", "5A", "6A", "7B", "8A", "9A", "10A"];
let minhasRespostas = [];
let btnEnviar = document.getElementById("btnEnviar");

document.addEventListener('submit', function(event){
    event.preventDefault();
    btnEnviar.style.display = "none";
    for(let i = 0; i<gabarito.length; i++){
    let minhaRespostaVez = document.querySelector(`input[name="opcoes${i+1}"]:checked`);
        minhasRespostas.push(minhaRespostaVez.value);
        
    let detailsVez = document.getElementById(`explicacao${i+1}`);
    detailsVez.style.visibility = "visible"
        
        let idLabelDaVez =`label${minhaRespostaVez.id}`;
        let labelOpcaoSelecionadaDaVez = document.getElementById(idLabelDaVez);
        if(minhasRespostas[i] === gabarito[i]){
            labelOpcaoSelecionadaDaVez.style.backgroundColor = "green";
        }else{
            labelOpcaoSelecionadaDaVez.style.backgroundColor = "red";
        }
    }
});