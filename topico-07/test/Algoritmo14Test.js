const primo = require("../Algoritmo14");

QUnit.test("Algoritmo14 - Numero primo", function(assert) {
  let resultado = primo.primo(3);

  assert.equal(resultado, true, "Teste correto - O numero eh primo");
});

QUnit.test("Algoritmo14 - Numero primo", function(assert) {
  let resultado = primo.primo(4);

  assert.equal(resultado, false, "Teste correto - O nao numero eh primo");
});

QUnit.test("Algoritmo14 - Numero primo", function(assert) {
  let resultado = primo.primo(1);

  assert.equal(
    resultado,
    "Numeros não correspondem",
    "Teste correto - Não executa o calculo pois foi informado algum valor incorreto"
  );
});
