// Destructuring = desestruturando

//Objeto

var aluno = {
    matricula: 1234,
    nome: "Marcos",
    tel: 98765493,
    cidade: "São Paulo"
}
//Pegando dados do objeto
var { nome, matricula, cidade } = aluno;

console.log(matricula);    //  1234
console.log(nome);         // Marcos
console.log(cidade);       // São Paulo

console.log('/////////////////');
// Arrays
// Nos arrays a posição importa
var funcionario1 = {
    nome: "Francisco",
    cargo: "Ajudante",
    tel: 987623311,
    cidade: "Bahia"
}
var funcionario2 = {
    nome: "Claudinei",
    cargo: "Programador",
    tel: 987654311,
    cidade: "São Paulo"
}
var funcionarios = [funcionario1, funcionario2];

var [Francisco, Claudinei] = funcionarios;
console.log(Claudinei.cargo);    //  Programador
console.log(Francisco.cidade);   // Bahia


