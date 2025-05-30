/**

listaDeAlunos
  Matheus
  Renata
  Leandro
  Ana
  Lucas

  paraCada (item da) listaDeAlunos
    // dar uma nota aleatória
 
 */

const listaDeAlunos = [
  'Matheus',
  'Renata',
  'Leandro',
  'Ana',
  'Lucas'
]

// A função forEach é usada para executar uma ação para cada item em um array
listaDeAlunos.forEach(aluno => {
  console.log(aluno)
})

const listaDeAlunosENotas = [
  {
    nome: 'Matheus',
    nota: 5
  },
  {
    nome: 'Renata',
    nota: 4
  },
  {
    nome: 'Leandro',
    nota: 7
  },
  {
    nome: 'Ana',
    nota: 9
  },
  {
    nome: 'Lucas',
    nota: 10
  }
]

// A função forEach pode ser usada para executar uma ação para cada item em um array de objetos
listaDeAlunosENotas.forEach(aluno => {

  if (aluno.nota < 7) {
    console.log(`O aluno ${aluno.nome} precisa do trabalho extra`)
  } else {
    console.log(`O aluno ${aluno.nome} está aprovado`)
  }
  
  console.log(`O aluno ${aluno.nome} tirou nota ${aluno.nota}`)

})
