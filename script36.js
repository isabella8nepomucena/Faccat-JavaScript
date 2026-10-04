let horasTrabalhadas = Number(prompt("Digite o número de horas trabalhadas no mês:"))
let salarioPorHora = Number(prompt("Digite o salário por hora:"))

let horasNormais = 160
let salarioTotal

if (horasTrabalhadas <= horasNormais) {
    salarioTotal = horasTrabalhadas * salarioPorHora
} else {
    let horasExtras = horasTrabalhadas - horasNormais
    let valorHoraExtra = salarioPorHora * 1.5;

    salarioTotal = (horasNormais * salarioPorHora) + (horasExtras * valorHoraExtra)
}

console.log("Salário total: R$", salarioTotal)