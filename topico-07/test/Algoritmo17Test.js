const mdc2 = require("../Algoritmo17");

QUnit.test("Algoritmo17 - O valor do MDC2", function(assert) {
  let resultado = mdc2.mdc2(81, 54);

  assert.equal(resultado, 27, "Teste correto - O valor eh igual a 27");
});

QUnit.test("Algoritmo17 - O valor do MDC2", function(assert) {
  let resultado = mdc.mdc2(5, 0);

  assert.equal(
    resultado,
    "Numeros não correspondem",
    "Teste correto - Não executa o calculo pois foi informado algum valor incorreto"
  );
});
