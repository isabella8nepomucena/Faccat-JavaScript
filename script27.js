//Temporizador//


alert("Projeto Temporizador");
minutoUser = parseInt(prompt("Digite quantos minutos deseja: "))
segundoUser = parseInt(prompt("Digite quantos segundos deseja: "))
 
for (minutos = minutoUser; minutos > -1; minutos--){
    if (minutos === minutoUser){
        limiteSeg = segundoUser
    }
    else{
        limiteSeg = 59
    }
    for(segundos = limiteSeg; segundos > -1; segundos--){
        console.log( minutos + ":" + segundos)
    }
       
}