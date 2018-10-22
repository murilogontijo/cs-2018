const valorPi = require("../Algoritmo9");

QUnit.test("Algoritmo8 - A potencia de 3 elevado 2 utilizando soma", function(
  assert
) {
  let resultado = valorPi.valorPi(3);

  assert.equal(resultado, 9, "Teste correto - O valor eh igual a 9");
});
