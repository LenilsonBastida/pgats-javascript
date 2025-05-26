/*
    
Exercício 01
    Gerador de tags de identificação

    Crie um script para gerar a etiqueta (tag) de identificação que será presa na coleira de um cachorro no abrigo. 
    O dono irá informar nome, idade, peso, raça e se é adotado ou não.

    A tag deve ter:
        - O nome em letras maíusculas
        - A raça com a primeira letra maiúscula
        - Peso

*/

const nome = "Cesar", raca = "vira-LAta"
let idade = 5, peso = 10.5, adotado = true

console.log("=======================TAG DE IDENTIFICAÇÃO=======================")
console.log(`Nome: ${nome.toUpperCase()}`)
console.log(`Raça: ${raca.slice(0, 1).toUpperCase() + raca.slice(1).toLowerCase()}`)
console.log(`Peso: ${peso} kg`)
console.log("==================================================================")