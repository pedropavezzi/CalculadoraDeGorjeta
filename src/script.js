let inputValor = document.getElementById("valor");
let inputAmount = document.getElementById("amount");
let inputAtendimento = document.getElementById("atendimento")
let resultado = document.getElementById("resultado");
let garcom = document.getElementById("garcom");

function calcular() {

    let valor = inputValor.value;
    let amount = inputAmount.value;
    let atendimento = inputAtendimento.value;
    let gorjeta = (valor / amount) * atendimento / 100

    let totalGorjeta = gorjeta / amount

    resultado.innerHTML = `<p> R$ ${gorjeta} para cada pessoa na mesa</p>`

}

function mudarFoto() {
    let atendimento = inputAtendimento.value;

    if (atendimento == 5) {
        document.getElementById("foto").src = "./assets/triste.png";
    } else if (atendimento == 10) {
        document.getElementById("foto").src = "./assets/ok.png";
    } else {
        document.getElementById("foto").src = "./assets/feliz.png";
    }

}
