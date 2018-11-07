const calculaPropriedade3025 = require("../Algoritmo1");

QUnit.test("Verifica a propriedade do numero 3025", function(assert) {
  let resultado = calculaPropriedade3025.calculaPropriedade3025(3025);

  assert.equal(resultado, true, "Teste correto");
});

QUnit.test("Verifica a propriedade do numero 0001", function(assert) {
  let resultado = calculaPropriedade3025.calculaPropriedade3025(0001);

  assert.equal(resultado, true, "Teste correto");
});
