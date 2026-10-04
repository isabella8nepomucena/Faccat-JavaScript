let carrosVendidos = Numero(prompt("Digite o número de carros vendidos:"))
let valorTotalVendas = Numero(prompt("Digite o valor total das vendas:"))
let salarioFixo = Numero(prompt("Digite o salário fixo:"))
let valorPorCarro = Numero(prompt("Digite o valor da comissão por carro vendido:"))

let comissaoCarros = carrosVendidos * valorPorCarro
let comissaoVendas = valorTotalVendas * 0.05

let salarioFinal = salarioFixo + comissaoCarros + comissaoVendas

console.log("Salário final do vendedor: R$", salarioFinal)