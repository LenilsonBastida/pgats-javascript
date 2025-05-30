/*

Trabalho Adicional: Programa sobre função
  Hands-on
    Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.

*/

function filtrarInteiros(lista) {
  return lista.filter(item => typeof item === 'number' && Number.isInteger(item))
}

const entradaFiltrarInteiros = [1, "2", 3, "teste", 4.5, 7, "JavaScript", 9]
const resultadoFiltrarInteiros = filtrarInteiros(entradaFiltrarInteiros)

console.log(resultadoFiltrarInteiros) // SAIDA [ 1, 3, 7, 9 ]

/*

Trabalho Adicional: Programa Retornando Número de Vogais
  Hands-on
    Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais. 
    O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.

*/

function contarVogais(texto) {
  const vogais = ['a', 'e', 'i', 'o', 'u']
  let contador = 0

  for (let letra of texto) {
    if (vogais.includes(letra)) {
      contador++
    }
  }

  return contador
}

const entradaContarVogais = "este foi um exemplo simples de texto com algumas vogais"
const resultadoContarVogais = contarVogais(entradaContarVogais)

console.log(resultadoContarVogais) // SAIDA 20