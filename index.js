const fs = require('fs')

const funcoes = require("./funcoes")
var alunosDaEscola = require("./database/alunosDaEscola.json")

funcoes.buscarAluno("Guilherme")
//console.log(alunosDaEscola)



fs.writeFileSync("./database/alunosDaEscola.json",JSON.stringify(alunosDaEscola))
