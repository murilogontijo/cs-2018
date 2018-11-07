const mdc = require("../Algoritmo16");

QUnit.test("Algoritmo16 - O valor do MDC", function(assert) {
  let resultado = mdc.mdc(81, 54);

  assert.equal(resultado, 27, "Teste correto - O valor eh igual a 27");
});

QUnit.test("Algoritmo16 - O valor do MDC", function(assert) {
  let resultado = mdc.mdc(5, 0);

  assert.equal(
    resultado,
    "Numeros não correspondem",
    "Teste correto - Não executa o calculo pois foi informado algum valor incorreto"
  );
});
