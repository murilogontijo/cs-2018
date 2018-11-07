const somaDosPrimeirosNaturais = require("../Algoritmo5");

QUnit.test("A soma dos primeiros 10 numeros naturais", function(assert) {
  let resultado = somaDosPrimeirosNaturais.somaDosPrimeirosNaturais(10);

  assert.equal(
    resultado,
    55,
    "Teste correto - O resultado da soma eh igual a 55"
  );
});
