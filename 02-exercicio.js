/*
    Exercício
    Validador de nomes para as tags
    
    Alguns donos estão registrando os dogs com nomes mal formatados. 
    Crie um script para limpar e padronizar os nomes.
    
    Aplique as formatações e exiba:
        - O nome original, como foi cadastrado
        - O nome formatado
    
    Extra: 
    
    Aplique uma regra que confira se o nome informado possui apenas uma palavra. 
    Exiba se o nome é válido ou não.
*/

const nome = "   ceSar DoG   "
const nomeFormatado = nome.trim().toLowerCase().split(" ").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ")   
const nomeValido = nome.trim().split(" ").length === 1 ? "Válido" : "Inválido"
const nomeOriginal = nome.trim()

console.log(`Nome Original: ${nomeOriginal}`)
console.log(`Nome Formatado: ${nomeFormatado}`)
console.log(`Nome Válido (Deve possuir apenas uma palavra)? R: ${nomeValido}`)