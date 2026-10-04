let saidaConvertida = "A temperatura em graus Celsius corresponde à : " + converterParaCelsius(77) + "° Celsius"

document.getElementById(demonstracao1).innerText = saidaConvertida

function converterParaCelsius(temperaturaFahrenheit){
    return (5/9) * (temperaturaFahrenheit-32)
}
