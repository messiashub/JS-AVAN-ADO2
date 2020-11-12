// Filter



function novoAluno(nome, idade){
    return{nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)
];

function Menos30(aluno){
    return aluno.idade < 30;
}
function Maior30(aluno){
    return aluno.idade > 30;
}

let alunos30 = alunos.filter(Maior30);

console.log(alunos30);
