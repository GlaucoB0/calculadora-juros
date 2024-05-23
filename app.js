const Resultado = document.getElementById('resultado')
const inTempo = document.getElementById('inTempo')
const inTaxa = document.getElementById('inTaxa')
const inCapital = document.getElementById('inCapital')
const btnCalcular = document.getElementById('btnCalcular')
const resultado = document.getElementById('resultado')
const juros = document.querySelector('.juros')
const jurosComp = document.querySelector('#jurosComp')

btnCalcular.addEventListener('click', () => {
    const Tempo = Number(inTempo.value)
    const TaxaPorcentagem = Number(inTaxa.value)*1
    const Taxa = TaxaPorcentagem/100
    const Capital = Number(inCapital.value)

    const JurosSimples = Capital * Taxa * Tempo
    const JurosCompostos = (Capital * ((1 + Taxa)**Tempo)).toFixed(2)
    const Montante = (Capital + JurosSimples).toFixed(2)

    juros.innerHTML = `
    <div>
        <h1>${TaxaPorcentagem}%</h1>
        <p>Juros</p>
    </div>
    <p>Montante de R$ ${Montante}</p>
    `
    jurosComp.innerText = `O valor dos juros compostos foi de R$ ${JurosCompostos}`



})
