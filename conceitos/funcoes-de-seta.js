// funcoes de seta / flecha

// funcao nomeada, com parametro, sem retorno
const exibirNomeDoDog = (nome) => {
  console.log(nome)
}

exibirNomeDoDog("Pipoca")

// funcao nomeada, com parametro + valor default, sem retorno
const exibirPorteDoDog = (porte = 'ND') => {
  console.log(porte)
}

exibirPorteDoDog()

// funcao nomeada, com parametro, com retorno
const obterNomeDoDogFormatado = (nome) => {
  return nome.toUpperCase()
}

console.log(obterNomeDoDogFormatado("BailEY MariA"))

// funcao com objeto 
const obterObjetoDog = () => {
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
const listarObjetosDog = () => {
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
const listarNomesDeDogs = () => {
  const nomes = [
    'Pituca',
    'Marea',
    'Anderson'
  ]

  console.log(`Passou pela função listarNomesDeDogs`) // Exibe mensagem de log para indicar que a função foi chamada

  return nomes // O que esta abaixo do return não será executado
}

console.log(listarNomesDeDogs())

// arrow function sem bloco + com return 'automatico'
const dobrar = (numero) => numero * 2
const saudacoes = (nome) => `Olá, ${nome}!`
