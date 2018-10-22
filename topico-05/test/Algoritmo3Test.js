const diaDaSemana = require("../Algoritmo3");

QUnit.test("Verifica a propriedade do numero 3025", function(assert) {
  let resultado = diaDaSemana.diaDaSemana(22, 10, 2018);

  assert.equal(resultado, 0, "Teste correto");
});
