const form = document.querySelector('form')
const submit = document.querySelector('button')
const select = document.querySelector('select')
const dataInicio = document.getElementById('data-inicio')
const button = document.getElementById("submit-button")


function verifyForm() {

  let fails = 0
  const data = {
    name: { element: document.getElementById('name'), maxLength: 40 },
    email: { element: document.getElementById('email'), maxLength: 50 },
    cpf: { element: document.getElementById('cpf'), maxLength: 11 },
    endereco: { element: document.getElementById('endereco'), maxLength: 200 },
    cidade: { element: document.getElementById('cidade'), maxLength: 28 },
    casaRadio: { element: document.getElementById('casa'), },
    apartamentoRadio: { element: document.getElementById('apartamento') },
    resumo: { element: document.getElementById('resumo'), maxLength: 1000 },
    estado: { element: document.getElementById('estado'), },
    cargo: { element: document.getElementById('cargo'), maxLength: 40 },
    descricaoCargo: { element: document.getElementById('descricao-cargo'), maxLength: 500 }
  }

  const { resumo, casaRadio, apartamentoRadio } = data

  //TextArea
  resumo.element.value === '' ?
    fails++ && alert(`O campo 'resumo' está vazio`) :
    resumo.element.value.length >= resumo.maxLength
    && fails++ && alert(`O campo 'resumo' excedeu o limite máximo de caracteres`)

  //Verificando inputs do tipo text
  for (inputText in data) {
    if (data[inputText]['element'].getAttribute('type') === 'text') {
      data[inputText]['element'].value === ''
        ? fails++ && alert(`O campo '${inputText}' está vazio`)
        : data[inputText]['element'].value.length >= data[inputText]['maxLength']
        && fails++ && alert(`O campo '${inputText}' excedeu o limite máximo de caracteres`)
    }
  }

  //Verificando Radios
  if (casaRadio.element.checked === false && apartamentoRadio.element.checked === false) {
    alert("Por favor selecione uma das opções: 'Casa', 'Apartamento'")
    fails++
  }

  //Verificando Select 

  if (!estado.value) {
    alert('Selecione um estado')
    fails++
  }



}

function formSubmit(e) {
  e.preventDefault()
  if (verifyForm()) {
    showResult()
  }
  verifyDate()
}

function generateStates() {
  const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO']

  states.forEach((state) => {
    const option = document.createElement('option')
    option.innerText = state
    option.setAttribute('value', state)
    select.appendChild(option)
  })
}

function verifyDate() {
  const dataArray = dataInicio.value.split("/")
  const dia = parseInt(dataArray[0])
  const mes = parseInt(dataArray[1])
  const ano = parseInt(dataArray[2])

  if (dia < 0 || dia > 31) {
    alert('Dia inválido')
  } else if (mes < 0 || mes > 12) {
    alert('Mes Invalido')
  } else if (ano < 0) {
    alert('Ano inválido')
  }

}

function showResult() {
  const div = document.createElement('div')
}
window.onload = () => {
  generateStates()
  button.addEventListener('click', (e) => formSubmit(e))
}