const calculaPropriedade153 = require("../Algoritmo2");

QUnit.test("Verifica a propriedade do numero 153", function(assert) {
  let resultado = calculaPropriedade153.calculaPropriedade153(153);

  assert.equal(resultado, true, "Teste correto");
});
