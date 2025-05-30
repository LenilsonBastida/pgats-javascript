// funcao nomeada, com parametro, sem retorno
function exibirNomeDoDog(nome) {
  console.log(nome)
}

exibirNomeDoDog("Pipoca")

// funcao nomeada, com parametro + valor default, sem retorno
function exibirPorteDoDog(porte = 'ND') {
  console.log(porte)
}

exibirPorteDoDog()

// funcao nomeada, com parametro, com retorno
function obterNomeDoDogFormatado(nome) {
  return nome.toUpperCase()
}

console.log(obterNomeDoDogFormatado("BailEY MariA"))

// funcao com objeto 
function obterObjetoDog() {
  return {
    nome: 'Bailey Maria',
    peso: 11.5,
    dogIrmao: {
      nome: 'Billy'
    },
    adotado: true
  }
}

console.log(obterObjetoDog())

// funcao com array de objetos
function listarObjetosDog() {
  return [{
    nome: 'Bailey Maria',
    peso: 11.5
  }, {
    nome: 'Bailey Maria',
    peso: 11.5
  }]
}

console.log(listarObjetosDog())

// funcao com array de strings
function listarNomesDeDogs() {
  const nomes = [
    'Pituca',
    'Marea',
    'Anderson'
  ]

  console.log(`Passou pela função listarNomesDeDogs`) // Exibe mensagem de log para indicar que a função foi chamada

  return nomes // O que esta abaixo do return não será executado
}

console.log(listarNomesDeDogs())
