/**

Exercício 05
  Classificador de porte automático

  Muitos tutores não fazem ideia do porte de seu Dog. 
  Crie um script que classifique o porte com base no peso de forma simplificada, sendo:

  Até 10kg -> Pequeno; acima disso -> Médio

  Use o operador ternário para determinar o porte. Exiba:
    Nome
    Peso
    Porte classificado

  Extra 1: transforme a lógica em uma função (da forma que conseguir)
  Extra 2: adicionar mais condições exemplo: >= 50 -> porte grande

 */

const nome = `Ada`
const peso = 11

// ALTERNATIVA 1 - simplificado sem função
const porte = peso <= 10 ? 'pequeno' : 'médio'

console.log(`------------------`)
console.log(`Nome: ${nome}`)
console.log(`Peso: ${peso}`)
console.log(`Porte: ${porte}`)
console.log(`------------------`)

// ALTERNATIVA 2 - com a função (Extra 1)
function classificarPortePorPeso(nome, peso) {
  const porte = peso <= 10 ? 'pequeno' : 'médio'

  console.log(`------------------`)
  console.log(`Nome: ${nome}`)
  console.log(`Peso: ${peso}`)
  console.log(`Porte: ${porte}`)
  console.log(`------------------`)
}

classificarPortePorPeso('Pantera', 14.5)
classificarPortePorPeso('Bandite', 35)
classificarPortePorPeso('Rex', 8)

// ALTERNATIVA 3 com a função usando arrow function (Extra 2)
const classificarPortePorPesoArrow = (nome, peso) => {
  switch (true) {
    case peso <= 10:
      console.log(`------------------`)
      console.log(`Nome: ${nome}`)
      console.log(`Peso: ${peso}`)
      console.log(`Porte: pequeno`)
      console.log(`------------------`)
      break
    case peso <= 50:
      console.log(`------------------`)
      console.log(`Nome: ${nome}`)
      console.log(`Peso: ${peso}`)
      console.log(`Porte: médio`)
      console.log(`------------------`)
      break
    default:
      console.log(`------------------`)
      console.log(`Nome: ${nome}`)
      console.log(`Peso: ${peso}`)
      console.log(`Porte: grande`)
      console.log(`------------------`)
  }
}

classificarPortePorPesoArrow('Bobby', 55)
classificarPortePorPesoArrow('Luna', 45)
classificarPortePorPesoArrow('Max', 8)