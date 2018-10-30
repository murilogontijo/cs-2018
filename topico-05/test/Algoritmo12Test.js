const quadradoPerfeito = require("../Algoritmo12");

QUnit.test("Algoritmo12 - O valor do Quadrado Perfeito", function(assert) {
  let resultado = quadradoPerfeito.quadradoPerfeito(5);

  assert.equal(
    resultado,
    5,
    "Teste correto - O valor eh igual a 5. É verdadeiro"
  );
});

QUnit.test("Algoritmo12 - O valor do Quadrado Perfeito", function(assert) {
  let resultado = quadradoPerfeito.quadradoPerfeito(0);

  assert.equal(
    resultado,
    "Numeros não correspondem",
    "Teste correto - Não executa o calculo pois foi informado algum valor incorreto"
  );
});
