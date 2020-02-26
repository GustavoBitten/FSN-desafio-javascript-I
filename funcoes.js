var alunosDaEscola = require("./database/alunosDaEscola.json")

function adicionarAluno(nomeDoAluno) {
    alunosDaEscola.push({
        nome: nomeDoAluno,
        notas: [],
        cursos: [],
        faltas: 0
    })
    console.log("Aluno cadastrado com sucesso!!")
    return alunosDaEscola
}

/*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/


function listarAlunos() {
    console.log("=".repeat(45))
    console.log(`||    Lista de alunos cadastrados no sistema
||`)
    alunosDaEscola.forEach((aluno) => {
        console.log(`|| nome: ${aluno.nome}`)

    });
    console.log("=".repeat(45))

}
//     /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
//     Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
// }

function buscarAluno(aluno) {
    let arrayDeNomes = alunosDaEscola.map((elemento)=>elemento.nome)
    let resultado = arrayDeNomes.indexOf(aluno)
    if(resultado != -1){
        console.log("Encontramos esse nome no sistema!")
        console.log("Segue o resultado abaixo:")
        console.log(`Nome: ${alunosDaEscola[resultado].nome}`)
        console.log(`Notas: ${alunosDaEscola[resultado].notas}`)
        console.log(`Cursos: ${alunosDaEscola[resultado].cursos.nomeDoCurso}`)
        console.log(`Faltas: ${alunosDaEscola[resultado].faltas}`)
    }else{
        console.log("Não encontramos essa nome na lista de aluno")
    }

}
//     /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
// }

// function matricularAluno('aluno: object, curso: string') {
//     /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
//     Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
//     Lembre-se de exibir o feedback para o usuário. */
// }

// function aplicarFalta(aluno: object) {
//     /*
//      Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
//     */
// }

// function aplicarNota(aluno: object) {
//     /*
//      Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
//     */
// }

// function aprovarAluno(aluno: object) {
//     /* 
//     Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
//     Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
//     */

// }











var funcoes = {
    adicionarAluno,
    listarAlunos,
    buscarAluno,
}

module.exports = funcoes