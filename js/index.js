//Atribui ao elemento "timer" uma constante
const timerID = document.querySelector('#timer')
//Tempo inicial receber a data atual
const starterTime = Date.now()

//Contador
const timer = () => {
    //Tempo arual recebe a data atual
    const currentTime = Date.now()
    //Tempo atual menos inicial
    let cont = currentTime - starterTime
    //Converte milissegundos para segundos
    let sec = Math.floor((currentTime - starterTime)/1000)
    //Atribui os segundos ao HTML
    timerID.innerHTML = convert(sec)
}

//Converção de valores
const convert = (sec) => {
    //Segundos para horas
    let hour = Math.floor(sec/3600)
    //Resto
    let remainder = sec%3600
    //Converte em minutos
    let minute = Math.floor(remainder/60)
    //Converte em segundos
    let second =  Math.floor(remainder%60)
    //Formatação final do HTML
    let form = (hour<10?"0"+hour:hour)+":"+(minute<10?"0"+minute:minute)+":"+(second<10?"0"+second:second)
    
    return form
}

//A cada 1 segundo, imprima a função timer
setInterval(timer, 1000)