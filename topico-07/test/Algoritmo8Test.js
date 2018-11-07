const potenciaUsandoSomas = require("../Algoritmo8");

QUnit.test("Algoritmo8 - A potencia de 3 elevado 2 utilizando soma", function(
  assert
) {
  let resultado = potenciaUsandoSomas.potenciaUsandoSomas(3, 2);

  assert.equal(resultado, 9, "Teste correto - O valor eh igual a 9");
});
