// Spread Operator

var pessoa = {
    name: "Claudinei Silva",
    idade:32,
}

var contato ={
    telefone: 8765432,
    email: "claudinei@gmail.com"
}
// criando copia

var copia = {...pessoa}; // copiando
copia.idade = 67;       // modificando

/* var copia ={...pessoa,...contato}  juntando tudo em um só objeto*/

console.log(pessoa);
console.log(copia);

//////////

var notas_turma1 = [10,8,4,3];
var notas_turma2 = [4,5,4,6];

var todas_notas = [...notas_turma1,...notas_turma2];

console.log(todas_notas);