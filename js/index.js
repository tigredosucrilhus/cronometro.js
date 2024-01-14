//Atribui ao elemento "timer" uma constante
const timerID = document.querySelector('#timer')
//Atribui a data atual uma constante
const starterTime = Date.now()

//Contador
const timer = () => {
    const currentTime = Date.now()
    let cont = currentTime - starterTime
    let sec = Math.floor((currentTime - starterTime)/1000)
    timerID.innerHTML = convert(sec)
}

const convert = (sec) => {
    let hour = Math.floor(sec/3600)
    let remainder = sec%3600
    let minute = Math.floor(remainder/60)
    let second =  Math.floor(remainder%60)
    let form = (hour<10?"0"+hour:hour)+":"+(minute<10?"0"+minute:minute)+":"+(second<10?"0"+second:second)
    
    return form
}

//A cada 1 segundo, imprima a função timer
setInterval(timer, 1000)