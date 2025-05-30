/**

  Usado para fazer uma escolha entre várias opções, no minimo 3.
  A condição é avaliada e o código executa o bloco correspondente ao caso que for verdadeiro.
  
  escolha (condicao):
    caso x: faca
    caso y: faca 
    caso z: faca

 */

const peso = 9

switch (peso) {
  case 10:
    console.log('P')
    break
  case 20:
    console.log('M')
    break
  case 30:
    console.log('G')
    break
  default: // caso não seja nenhum dos anteriores
    console.log('ND') 
}

// Se quiser muito usar switch, dá para fazer um truque com true, tipo:
switch (true) {
  case peso <= 10:
      console.log('P')
      break
  case peso <= 20:
      console.log('M')
      break
  case peso <= 30:
      console.log('G')
      break
  default: // caso não seja nenhum dos anteriores
      console.log('ND')
}
