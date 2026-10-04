let time1 = prompt("Digite o nome do primeiro time:")
let gols1 = Numero(prompt("Digite o número de gols do primeiro time:"))

let time2 = prompt("Digite o nome do segundo time:")
let gols2 = Numero(prompt("Digite o número de gols do segundo time:"))

if (gols1 > gols2) {
    console.log("Vencedor:", time1)
} else if (gols2 > gols1) {
    console.log("Vencedor:", time2)
} else {
    console.log("EMPATE")
}