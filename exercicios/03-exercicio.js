/**
 
Exercício 03
  Validador de idade mínima para adoção

  Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida, por exemplo, 2 anos.

  Use os operadores adequados e exiba:
    Nome do dog
    Idade
    Se está apto ou não para adoção

  Extra: aplique uma regra com operador lógico para permitir que se o cão for de pequeno porte, pode ser adotado independente da idade

  Exemplos:
    mínimo = 2

    idade 1 + porte M = nao
    idade 2 + porte M = sim, pela idade
    idade 2 + porte P = sim, pela idade
    idade 1 + porte P = sim, pelo porte

*/

const nome = 'Ada'
const idade = 0
const porte = 'P'

const idadeMinima = 2

// Utilizando operador ternário
const adocao = idade >= idadeMinima 
                ? 'sim'
                : porte === 'P' 
                ? 'sim'
                : 'não'

console.log(`[Operador Ternário] O dog ${nome} tem ${idade} anos e está apto para adoção? R: ${adocao}`)

// Utilizando operador lógico
const adocaov2 = idade >= idadeMinima || porte === 'P'

console.log(`[Operador Lógico] O dog ${nome} tem ${idade} anos e está apto para adoção? R: ${adocaov2 ? 'sim' : 'não'}`)

// Abstraindo a lógica em uma função
function verificarSePodeSerAdotado(idade, porte) {
  const adocao = idade >= idadeMinima 
                ? 'sim'
                : porte === 'P' 
                ? 'sim'
                : 'não'

  // return adocao
  console.log(`[Função] O dog tem ${idade} anos e é de porte ${porte}. Está apto para adoção? R: ${adocao}`)
}

verificarSePodeSerAdotado(1, 'M') // não
verificarSePodeSerAdotado(2, 'M') // sim, pela idade
verificarSePodeSerAdotado(2, 'P') // sim, pela idade
verificarSePodeSerAdotado(1, 'P') // sim, pelo porte