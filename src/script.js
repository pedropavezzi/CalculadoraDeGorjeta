


let inputValor = document.getElementById("valor");
let inputAmount = document.getElementById("amount");
let inputAtendimento = document.getElementById("atendimento");

let resultado = document.getElementById("resultado");
let garcom = document.getElementById("garcom");
let foto = document.getElementById("foto");



function calcular() {

    let valor = inputValor.value;
    let amount = inputAmount.value;
    let atendimento = inputAtendimento.value;

    let gorjeta = (valor / amount) * atendimento / 100

    let totalGorjeta = gorjeta / amount

    resultado.innerHTML = `<p> R$ ${gorjeta} para cada pessoa na mesa</p>`
    resultado.innerHTML += `<p> O valor total da gorjeta foi de  R$ ${totalGorjeta}</p>`
    garcom.innerHTML += `<img  src=${foto} width="400" height="150"/>`

    garcom.innerHTML += foto

    if (atendimento.value = 5) {
        let foto = "./assets/triste.png"
    } else if (atendimento.value = 10) {
        let foto = "./assets/ok.png"
    } else {
        let foto = "./assets/feliz.png"
    }
}
