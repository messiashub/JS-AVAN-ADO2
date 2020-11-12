
//MAP

function novoAluno(nome, idade){
    return{nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)
];

function nomeIdade(x){
    return `${x.nome} tem ${x.idade} anos.`;
}

console.log(alunos.map(nomeIdade));