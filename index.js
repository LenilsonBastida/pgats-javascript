/*
    Console API
        - console.log()     - Exibe mensagens no console
        - console.error()   - Exibe mensagens de erro no console
        - console.warn()    - Exibe mensagens de aviso no console
        - console.table()   - Exibe dados em formato de tabela no console
*/

console.log("Aula iniciar JS")
console.error("Falha na execução")
console.warn("Atenção, algo não está certo")
console.table([{
    Nome: "Samuel",
    Turma: "02",
    Disciplina: "Prog JS"
},
{
    Nome: "Lenilson",
    Turma: "02",
    Disciplina: "Prog JS"
}, 
{
    Nome: "Goku - 98 a.C.",
    Turma: "02",
    Disciplina: "Prog JS"
}])

/*
    Constantes e Variáveis
        - Constantes: const - para informações que não mudam
        - Variáveis: let ou var - para informações que podem mudar
*/

// informacoes de um dog que nao mudam
const nome = 'Loki'
const raca = 'Vira-lata'
const sexo = 'Macho'
const cor  = 'Caramelo'
const dataDeNascimento = '01/01/2020'
const porte = 'M'

// informacoes que mudam
let idade = 5
let peso = 10.5
let vacinado = true
let castrado = false
let tamanho = 'M'

let dono

// código do teste
    dono = 'Lenilson'

/*
    Strings
    Três formas de atribuir uma string:

    'Turma 02 do PGATS' - aspas simples ou single quote
    "Turma 02 do PGATS" - aspas duplas ou double quote
    `Turma 02 do PGATS` - template strings (atalho: alt + 96)
*/

const numeroAula = "03"
const turma = "02"
let data = "05 de Abril"

// Concatenação de strings (aspas duplas ou simples)
console.log("Aula 03 da Turma " + turma + ' no Sábado dia 05 de Abril')

// Interpolação de strings (crase - template strings)
console.log(`Aula ${ numeroAula } da Turma ${ turma } no Sábado dia ${ data }`)

// Length - Tamanho da string
console.log(numeroAula.length)
console.log(`Aula ${ numeroAula } da Turma ${ turma } no Sábado dia ${ data } tem ${ numeroAula.length } caracteres`)

// split - Divide a string em partes
const nomeDeAlunos = "Giuliana André Goku Lucas Lenilson"
const nomeDeAlunosSplit = nomeDeAlunos.split(" ")
console.log(nomeDeAlunosSplit)

// ToLowerCase - Transforma a string em minúscula
console.log(nomeDeAlunos.toLowerCase())

// ToUpperCase - Transforma a string em maiúscula
console.log(nomeDeAlunos.toUpperCase())

// Icludes - Verifica se a string contém outra string ou parte dela
console.log(nomeDeAlunos.includes("Goku")) // true
console.log(nomeDeAlunos.includes("Dennys")) // false

// Replace - Substitui uma parte da string por outra
console.log(nomeDeAlunos.replace("Giuliana", "Dennys"))

// ReplaceAll - Substitui todas as partes da string por outra
console.log(nomeDeAlunos.replaceAll(" ", "-"))

// Trim - Remove espaços em branco no início e no final da string
const textoComEspacos = "    Aqui existem espaços, inicio e fim        "
console.log(textoComEspacos.trim())

// Slice - Pega uma parte da string
let dataParaCortar = "05 de Abril"
console.log(dataParaCortar.slice(0, 2)) // 05

// Substring - Pega uma parte da string
console.log(nomeDeAlunos.substring(0, 8)) // Giuliana