const form = document.getElementById('form')
let linhas = ''
const imgCelular = '<img src="./image/cell.jpg" alt="celular">'
const imgTelefone = '<img src="./image/tel.png" alt="tel">'

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const Nome = document.getElementById('nome')
    const Telefone = document.getElementById('telefone')
    const tipoContato = document.querySelector('select#Tipo_contato')

    let linha = '<tr>'
    linha += `<td>${Nome.value}</td>`
    linha += `<td>${Telefone.value}</td>`
    linha += `<td>${tipoContato.value == "Residencial" ? imgTelefone : imgCelular}</td>`
    linha += '</tr>'

    linhas += linha

    const corpoDaTabela = document.querySelector('tbody')
    corpoDaTabela.innerHTML = linhas

    Nome.value = ''
    Telefone.value = ''
    tipoContato.value = ''
})