// Aplicação que realiza a subtracao dos argumentos fornecidos.

const Matematica = require('./matematica');

const funcoes = new Matematica();

const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);
const subtracao = funcoes.subtracao(a, b);

console.log(`A subtracao de ${a} e ${b} é ${subtracao}.`);