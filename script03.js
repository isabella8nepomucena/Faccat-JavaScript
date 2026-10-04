let A = Numero(prompt("Digite o valor de A:"))
let B = Numero(prompt("Digite o valor de B:"))
let C = Numero(prompt("Digite o valor de C:"))

if (A < B + C && B < A + C && C < A + B) {
    console.log("Formam um triângulo")
} else {
    console.log("Não formam um triângulo")
}