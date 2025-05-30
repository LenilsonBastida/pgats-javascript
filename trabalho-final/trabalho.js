function geradorDeTagsDeIdentificacao (nomeDogTag) {
  return nomeDogTag.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte) {
  const idadeMinimaParaAdocao = 1
  const portePermitido = 'M'
  return idade === idadeMinimaParaAdocao && porte === portePermitido
}

function calcularConsumoDeRacao (nome, idade, peso) {
  return idade * peso * 300
}

function decidirTipoDeAtividadePorPorte(porte) {
  porte = porte.toLowerCase()

  switch (true) {
    case porte === 'pequeno':
      return 'brincar dentro de casa'
    case porte === 'médio':
      return 'passeios curtos ao ar livre'
    case porte === 'grande':
      return 'exercícios intensos em espaços amplos'
    default:
      return 'porte inválido!'
  }
}

async function buscarDadoAsync () {
  const nomePet = 'Pipoca'
  return nomePet
}

export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
}
