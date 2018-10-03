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


