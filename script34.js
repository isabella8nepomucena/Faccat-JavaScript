let homem1 = Number(prompt("Digite a idade do primeiro homem:"))
let homem2 = Number(prompt("Digite a idade do segundo homem:"))

let mulher1 = Number(prompt("Digite a idade da primeira mulher:"))
let mulher2 = Number(prompt("Digite a idade da segunda mulher:"))

let homemMaisVelho
let homemMaisNovo
let mulherMaisVelha
let mulherMaisNova

if (homem1 > homem2) {
    homemMaisVelho = homem1
    homemMaisNovo = homem2
} else {
    homemMaisVelho = homem2
    homemMaisNovo = homem1
}
if (mulher1 > mulher2) {
    mulherMaisVelha = mulher1
    mulherMaisNova = mulher2
} else {
    mulherMaisVelha = mulher2
    mulherMaisNova = mulher1
}
let soma = homemMaisVelho + mulherMaisNova
let produto = homemMaisNovo * mulherMaisVelha

console.log("Soma do homem mais velho com a mulher mais nova:", soma)
console.log("Produto do homem mais novo com a mulher mais velha:", produto)
