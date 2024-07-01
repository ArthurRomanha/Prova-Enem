let gabarito = [
    "1B", "2B", "3D", "4A", "5B", // valores existentes
    "6D", "7A", "8C", "9E", "10E",
    "11D", "12C", "13C", "14D", "15B",
    "16A", "17D", "18B", "19D", "20E",
    "21D", "22C", "23C", "24E", "25B",
    "26C", "27A", "28C", "29E", "30A",
    "31C", "32A", "33A", "34C", "35A",
    "36A", "37C", "38A", "39C", "40B",
    "41B", "42E", "43A", "44A", "45E"
];

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