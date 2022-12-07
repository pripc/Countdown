var dia=window.document.getElementById('dia')
var hora=window.document.getElementById('horas')
var minuto=window.document.getElementById('minutos')
var segundo=window.document.getElementById('segundos')
const lancamento = '25 dec 2022' // data fim da contagem

function countdown(){
    const dataLancamento = new Date(lancamento)
    const hoje = new Date() //quando não há nada no parenteses, ele já pega a data de hoje automaticamente
    var segundostotais = (dataLancamento - hoje) / 1000 // segundos entre a data do lançamento e a data de hoje
    
    var dias = formatoTempo(Math.floor(segundostotais/60/60/24)) 
    var horas = formatoTempo(Math.floor(segundostotais/60/60) % 24)
    var minutos = formatoTempo(Math.floor(segundostotais/60) % 60)
    var segundos = formatoTempo(Math.floor(segundostotais) % 60)

    dia.innerHTML = dias
    hora.innerHTML = horas
    minuto.innerHTML = minutos
    segundo.innerHTML = segundos
}

function formatoTempo(tempo){
    return tempo <10 ? `0${tempo}` : tempo
}
countdown()
setInterval(countdown, 1000)
