const produtoInteirosUsandoSomas = require("../Algoritmo7");

QUnit.test("O produto dos inteiros 5 e 2 utilizando soma", function(assert) {
  let resultado = produtoInteirosUsandoSomas.produtoInteirosUsandoSomas(5, 2);

  assert.equal(resultado, 10, "Teste correto - O resto eh igual a 10");
});

QUnit.test("O produto dos inteiros 5 e 6 utilizando soma", function(assert) {
  let resultado = produtoInteirosUsandoSomas.produtoInteirosUsandoSomas(5, 6);

  assert.equal(resultado, 30, "Teste correto - O resto eh igual a 30");
});
