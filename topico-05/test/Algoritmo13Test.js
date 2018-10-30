const raiz = require("../Algoritmo13");

QUnit.test("Algoritmo13 - O valor da Raiz Quadrada", function(assert) {
  let resultado = raiz.raiz(9, 100);

  assert.equal(resultado, 3, "Teste correto - O valor eh igual a 3");
});

QUnit.test("Algoritmo13 - O valor da Raiz Quadrada", function(assert) {
  let resultado = raiz.raiz(4, 100);

  assert.equal(resultado, 2, "Teste correto - O valor eh igual a 2");
});

QUnit.test("Algoritmo13 - O valor do Quadrado Perfeito", function(assert) {
  let resultado = raiz.raiz(0);

  assert.equal(
    resultado,
    "Numeros não correspondem",
    "Teste correto - Não executa o calculo pois foi informado algum valor incorreto"
  );
});
