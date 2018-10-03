// Obtém referência para o módulo que contém função a ser testada.
// Observe que o presente código de teste está
// em diretório específico (test), enquanto o
// código testado está isolado em outro diretório.

// const operacao = require("../codigo");

// Abaixo segue o nosso primeiro teste
// identificado por "soma trivial".

// QUnit.test("soma trivial", function (assert) {

  // Executa a operação que desejamos testar
  // let resultado = operacao.soma(3, -1);

  // Verifica se o resultado produzido é o esperado.
  // assert.equal(resultado, 2, "soma incorreta");
// });


const ordenacao = require("../ordenacao");

QUnit.test("Ordenar frase a frase: A vila e bela", function(assert){
	
	let resultado = ordenacao.ordena("a vida e bela");
	
	assert.equal(resultado, "aaabdeeilv", "Teste correto");
});

QUnit.test("Ordenar a palavra: casa", function(assert){
	
	let resultado = ordenacao.ordena("casa");
	
	assert.equal(resultado, "aacs", "Teste correto");
});

QUnit.test("Ordenar a palavra 'casa' mas com retorno incorreto", function(assert){
	
	let resultado = ordenacao.ordena("casa");
	
	assert.equal(resultado, "aasc", "Teste correto");
});


