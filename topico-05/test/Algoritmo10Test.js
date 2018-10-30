const logaritmoNatural = require("../Algoritmo10");

QUnit.test("Algoritmo10 - O valor do Logaritmo Natural", function(assert) {
  let resultado = logaritmoNatural.logaritmoNatural(3, 2);

  assert.equal(resultado, 8.5, "Teste correto - O valor eh igual a 8.5");
});

QUnit.test("Algoritmo10 - O valor do Logaritmo Natural", function(assert) {
  let resultado = logaritmoNatural.logaritmoNatural(3, 0);

  assert.equal(
    resultado,
    "Numeros não correspondem",
    "Teste correto - Não executa o calculo pois foi informado algum valor incorreto"
  );
});
