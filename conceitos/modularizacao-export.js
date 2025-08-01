/**
 
  Sintaxe CommonJS (package.json - "type": "commonjs") (até 2019 ~ 2020):
    module.exports = {} / require('') 
  
  
  ESM (package.json - "type": "module") - Ecmascript Standard Modules (> 2019)
    export {} / import {} from 'caminho do arquivo' 

  * Necessário rodar o npm init -y para criar o package.json
  * Para rodar o arquivo com ESM, é necessário adicionar "type": "module" no package.json

 */

// const nomePet = `Pitoco`
// console.log(`O nome do pet é ${nomePet}`)

// const nomePet2 = `Pipoca`
// console.log(`O nome do pet é ${nomePet2}`)

// const nomePet3 = `Pantera`
// console.log(`O nome do pet é ${nomePet3}`)

const BRINQUEDOS = [
  'Osso',
  'Peteca',
  'Chocalho'
]

function exibirNomePet(paramNomePet = 'valor padrao') {

  if (paramNomePet === undefined) {
    console.log()
    return
  }

  console.log(`O nome do pet é ${paramNomePet}`)
}

function exibirIdade(paramIdadePet) {
  console.log(`Idade do Pet é ${paramIdadePet}`)
}

//  export {} / import 
export {
  exibirNomePet,
  exibirIdade,
  BRINQUEDOS
}
