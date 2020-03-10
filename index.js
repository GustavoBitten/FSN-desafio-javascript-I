const fs = require('fs')

const funcoes = require("./funcoes")
var alunosDaEscola = require("./database/alunosDaEscola.json")
//===============================Informações====================================
/*

Todas as funções devem ser excutadas pelo objeto funcoes

Todas as funções deve receber como parêmetro o nome do aluno e não o objeto aluno, como o exemplo:
funcoes.matricularAluno("Gustavo","UX")

Todas as funções deve ser testadas na área reservada abaixo 

Todas as função depois de excutadas irão salvar os dados como JSON na pasta database

Para restaurar os dados dos alunos para o modo padrão devemos excultar o arquivo backup.js
Ex: node ./backup.js

Funções disponíveis:

funcoes.adicionarAluno(aluno:string)
funcoes.listarAlunos()
funcoes.buscarAluno(aluno:string)
funcoes.matricularAluno(aluno:string,curso:string)
funcoes.aplicarFalta(aluno:string)
funcoes.aplicarNota(aluno:string,nota:number)
funcoes.aprovarAluno(aluno:string)

*/
// ============================Área de teste ========================================== 




//==========================Fim da área de testes======================================

fs.writeFileSync("./database/alunosDaEscola.json",JSON.stringify(alunosDaEscola))


funcoes.adicionarAluno
funcoes.listarAlunos
funcoes.buscarAluno
funcoes.matricularAluno
funcoes.aplicarFalta
funcoes.aplicarNota
funcoes.aprovarAluno