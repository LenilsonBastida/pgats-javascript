/**

 Repetição com for o loop é executado um número específico de vezes e
 para cada iteração, o bloco de código será executado

 Exemplo: dar petiscos para os gatos, de 1 até a quantidade calculada

  para, faca
    contador; condicao; manipulacao do contador (incremento/decremento)

    quantidadeDePetiscos; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++

*/

const quantidadeCalculada = 3

for (let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {
  // acao de dar um petisco
  console.log(`Dando o petisco de nº ${quantidadeDePetiscos}`)

}

const gatos = ['Lessie', 'Pony', 'Fumaca']

for (let indice = 0; indice < gatos.length; indice++) {
  console.log(`Dando o Petisco para ${gatos[indice]} `)

}

// Definindo a quantidade de petiscos a serem dados
// A quantidade de petiscos é definida como 3
for (let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {
 
  console.log(`Dando o petisco de nº ${quantidadeDePetiscos}`)

  for (let indice = 0; indice < gatos.length; indice++) {
  console.log(`Dando o Petisco para ${gatos[indice]} `)

  }
  
  console.log(`Todos os gatos receberam o petisco de nº ${quantidadeDePetiscos}`)
  console.log(`----------------------------------`)

}
