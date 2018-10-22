const restoDivisao = require("../Algoritmo4");

QUnit.test("O resto da divisao inteira de 5 e 3", function(assert) {
  let resultado = restoDivisao.restoDivisao(5, 3);

  assert.equal(resultado, 2, "Teste correto - O resto eh igual a 2");
});

QUnit.test("O resto da divisao inteira de 3 e 8", function(assert) {
  let resultado = restoDivisao.restoDivisao(5, 3);

  assert.equal(resultado, 3, "Teste correto - O resto eh igual a 3");
});
