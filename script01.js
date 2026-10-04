let numeroConta = prompt("Digite o número da conta:")
let saldo = Numero(prompt("Digite o saldo:"))
let debito = Numero(prompt("Digite o débito:"))
let credito = Numero(prompt("Digite o crédito:"))

let saldoAtual = saldo - debito + credito;

console.log("Número da conta:", numeroConta)
console.log("Saldo atual:", saldoAtual)

if (saldoAtual >= 0) {
    console.log("Saldo Positivo")
} else {
    console.log("Saldo Negativo")
}