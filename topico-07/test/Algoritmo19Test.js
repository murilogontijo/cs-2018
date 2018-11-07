const fibonacci = require("../Algoritmo19");

QUnit.test("Algoritmo19 - O valor de fibonacci", function(assert) {
  let resultado = fibonacci.fibonacci(10);

  assert.equal(resultado, 55, "Teste correto - O valor eh igual a 55");
});

QUnit.test("Algoritmo19 - O valor de fibonacci", function(assert) {
  let resultado = fibonacci.fibonacci(-1);

  assert.equal(
    resultado,
    "Numeros não correspondem",
    "Teste correto - Não executa o calculo pois foi informado algum valor incorreto"
  );
});
