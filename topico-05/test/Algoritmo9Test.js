const valorPi = require("../Algoritmo9");

QUnit.test("Algoritmo9 - O valor de PI", function(assert) {
  let resultado = valorPi.valorPi(3);

  assert.equal(resultado, 3.47, "Teste correto - O valor eh igual a 3.47");
});
