var alunosDaEscola = require("./database/alunosDaEscola.json")

function adicionarAluno(nomeDoAluno) {
    if(buscarAlunoV2(nomeDoAluno) == undefined){
        alunosDaEscola.push({
        nome: nomeDoAluno,
        notas: [],
        cursos: [],
        faltas: 0
    })

    console.log("Aluno cadastrado com sucesso!!")
    return alunosDaEscola
}else{
    console.log("Esse aluno já está cadastrado em nosso sistema, adicione o sobrenome")
}
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
    let arrayDeNomes = alunosDaEscola.map((elemento) => elemento.nome)
    let resultado = arrayDeNomes.indexOf(aluno)
    if (resultado != -1) {
        console.log(`Encontramos esse nome no sistema!`)
        console.log(`Segue o resultado abaixo:
        `)
        console.log(`Nome: ${alunosDaEscola[resultado].nome}`)
        console.log(`Notas: ${alunosDaEscola[resultado].notas}`)
        alunosDaEscola[resultado].cursos.forEach((curso) => {
            console.log(`Curso: ${curso.nomeDoCurso}`)
            console.log(`Data de matrícula: ${curso.dataMatricula}`)
        })

        console.log(`Faltas: ${alunosDaEscola[resultado].faltas}`)
    } else {
        console.log("Não encontramos esse nome na lista de aluno")
    }
    return alunosDaEscola[resultado]
}

function buscarAlunoV2(aluno) {
    let arrayDeNomes = alunosDaEscola.map((elemento) => elemento.nome)
    let resultado = arrayDeNomes.indexOf(aluno)

    return alunosDaEscola[resultado]
}
//     /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
// }

function matricularAluno(aluno, curso) {
    let objetoAluno = buscarAlunoV2(aluno)
    if (objetoAluno != undefined) {
        if (curso != null) {
            objetoAluno.cursos.push({
                nomeDoCurso: curso,
                dataMatricula: new Date
            })
            console.log(`Aluno ${aluno} foi matriculado com sucesso no curso de ${curso}!`)
        } else {
            console.log("Precisa preencher com um curso")
        }
    } else {
        console.log("Antes de matricular o aluno é preciso cadastra-lo no sistema")
    }
    return alunosDaEscola
}


//     /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
//     Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
//     Lembre-se de exibir o feedback para o usuário. */

function aplicarFalta(aluno) {
    let objetoAluno = buscarAlunoV2(aluno)
    if( objetoAluno.cursos.toString() !== ""){
        objetoAluno.faltas += 1
        console.log(`Aluno ${aluno} recebeu mais uma falta, totalizando ${objetoAluno.faltas}`)

    }else{
        console.log("Esse aluno não está matriculado em um curso")
    }
    return alunosDaEscola
}

//     /*
//      Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
//     */
// }

function aplicarNota(aluno,nota) {
    let objetoAluno = buscarAlunoV2(aluno)
    if( objetoAluno.cursos.toString() !== "" && nota != undefined){
        objetoAluno.notas.push(nota)
        console.log(`Aluno: ${aluno} recebeu mais uma nota, as notas deles são: ${objetoAluno.notas.join(" - ")}`)

    }else{
        console.log("Esse aluno não está matriculado em um curso ou faltou definir uma nota para ele ")
    }
    return alunosDaEscola
}
//     /*
//      Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
//     */
// }

function aprovarAluno(aluno) {
    
    let objetoAluno = buscarAlunoV2(aluno)
    if(objetoAluno != undefined){
    var notas = objetoAluno.notas
    var mediaDasNotas = (notas.reduce((total,index,)=> total + index,0))/notas.length

    if( objetoAluno.cursos.toString() != "" && objetoAluno.faltas <= 3 && mediaDasNotas >= 7){

        console.log(`Aluno: ${aluno} foi aprovado com sucesso!!`)

    }else{
        console.log(`Aluno: ${aluno} não pode ser aprovado`)
    }}else{ console.log("Esse aluno não está no sistema")}
    return alunosDaEscola

}


//     Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
//     Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.


// }


var funcoes = {
    adicionarAluno,
    listarAlunos,
    buscarAluno,
    matricularAluno,
    aplicarFalta,
    aplicarNota,
    aprovarAluno,
}

module.exports = funcoes
