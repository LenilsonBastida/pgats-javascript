/*

  Async/Await
  - Async/Await é uma forma de trabalhar com Promises de maneira mais simples e legível.
    - Async é usado para declarar uma função assíncrona.
    - Await é usado para esperar a resolução de uma Promise dentro de uma função assíncrona.

*/

// async - assíncrono
async function exibirNomeDogFormatado (nome) {
  return nome.toUpperCase()
}

// await - esperar
console.log(await exibirNomeDogFormatado(`Pipoca`))
