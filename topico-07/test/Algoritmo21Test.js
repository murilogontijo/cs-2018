const razaoAurea = require("../Algoritmo11");

QUnit.test("Algoritmo11 - O valor da Razao Aurea", function(assert) {
  let resultado = razaoAurea.razaoAurea(1, 2, 3);

  assert.equal(resultado, 1.6, "Teste correto - O valor eh igual a 1.6");
});

QUnit.test("Algoritmo11 - O valor da Razao Aurea", function(assert) {
  let resultado = razaoAurea.razaoAurea(1, 2, 5);

  assert.equal(
    resultado,
    "Numeros não correspondem",
    "Teste correto - Não executa o calculo pois foi informado algum valor incorreto"
  );
});
