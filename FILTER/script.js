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

/////////////////

let numeros = [1,2,3,4,5,6,7,8,9]

function impar(n){
    res = n % 2 == 0;
    return res;
}

let numeroImpar = numeros.filter(impar);
console.log(numeroImpar);
