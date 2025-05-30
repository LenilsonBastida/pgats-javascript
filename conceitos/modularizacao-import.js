//  export {} / import {} from 'caminho do arquivo'

// importar { o que queremos } de 'caminho do arquivo'
import { exibirNomePet, exibirIdade, BRINQUEDOS } from './modularizacao-export.js'

exibirNomePet(`Pipoca`)
exibirIdade()
exibirIdade(5)
console.log(`Brinquedos: ${BRINQUEDOS}`)
