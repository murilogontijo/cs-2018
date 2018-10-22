// import("../Algoritmo1");
// import("../Algoritmo2");
// import("../Algoritmo3");
// import("../Algoritmo4");
// import("../Algoritmo5");
// import("../Algoritmo6");

const calculaPropriedade3025 = require("../Algoritmo1");
const calculaPropriedade153 = require("../Algoritmo2");
const diaDaSemana = require("../Algoritmo3");
const restoDivisao = require("../Algoritmo4");
const somaDosPrimeirosNaturais = require("../Algoritmo5");
const fatorial = require("../Algoritmo6");
const produtoInteirosUsandoSomas = require("../Algoritmo7");
const potenciaUsandoSomas = require("../Algoritmo8");

QUnit.test("Algoritmo1 - Verifica a propriedade do numero 3025", function(
  assert
) {
  let resultado = calculaPropriedade3025.calculaPropriedade3025(3025);

  assert.equal(resultado, true, "Teste correto");
});

QUnit.test("Algoritmo1 - Verifica a propriedade do numero 0001", function(
  assert
) {
  let resultado = calculaPropriedade3025.calculaPropriedade3025(0001);

  assert.equal(resultado, true, "Teste correto");
});

QUnit.test("Algoritmo2 - Verifica a propriedade do numero 153", function(
  assert
) {
  let resultado = calculaPropriedade153.calculaPropriedade153(153);

  assert.equal(resultado, true, "Teste correto");
});

QUnit.test(
  "Algoritmo3 - Verifica o dia da semana da Data (22/10/2018)",
  function(assert) {
    let resultado = diaDaSemana.diaDaSemana(22, 10, 2018);

    assert.equal(resultado, 0, "Teste correto - Dia da semana = 0");
  }
);

QUnit.test(
  "Algoritmo3 - Verifica o dia da semana da Data (23/10/2018)",
  function(assert) {
    let resultado = diaDaSemana.diaDaSemana(23, 10, 2018);

    assert.equal(resultado, 1, "Teste correto - Dia da semana = 1");
  }
);

QUnit.test(
  "Algoritmo3 - Verifica o dia da semana da Data (24/10/2018)",
  function(assert) {
    let resultado = diaDaSemana.diaDaSemana(24, 10, 2018);

    assert.equal(resultado, 2, "Teste correto - Dia da semana = 2");
  }
);

QUnit.test("Algoritmo4 - O resto da divisao inteira de 5 e 3", function(
  assert
) {
  let resultado = restoDivisao.restoDivisao(5, 3);

  assert.equal(resultado, 2, "Teste correto - O resto eh igual a 2");
});

QUnit.test("Algoritmo4 - O resto da divisao inteira de 3 e 8", function(
  assert
) {
  let resultado = restoDivisao.restoDivisao(3, 8);

  assert.equal(resultado, 3, "Teste correto - O resto eh igual a 3");
});

QUnit.test("Algoritmo5 - A soma dos primeiros 10 numeros naturais", function(
  assert
) {
  let resultado = somaDosPrimeirosNaturais.somaDosPrimeirosNaturais(10);

  assert.equal(
    resultado,
    55,
    "Teste correto - O resultado da soma eh igual a 55"
  );
});

QUnit.test("Algoritmo6 - Calcula o fatorial de 10", function(assert) {
  let resultado = fatorial.fatorial(10);

  assert.equal(
    resultado,
    3628800,
    "Teste correto - O fatorial de 10 eh igual a 3628800"
  );
});

QUnit.test(
  "Algoritmo7 - O produto dos inteiros 5 e 2 utilizando soma",
  function(assert) {
    let resultado = produtoInteirosUsandoSomas.produtoInteirosUsandoSomas(5, 2);

    assert.equal(resultado, 10, "Teste correto - O valor eh igual a 10");
  }
);

QUnit.test(
  "Algoritmo7 - O produto dos inteiros 5 e 6 utilizando soma",
  function(assert) {
    let resultado = produtoInteirosUsandoSomas.produtoInteirosUsandoSomas(5, 6);

    assert.equal(resultado, 30, "Teste correto - O valor eh igual a 30");
  }
);

QUnit.test("Algoritmo8 - A potencia de 3 elevado 2 utilizando soma", function(
  assert
) {
  let resultado = potenciaUsandoSomas.potenciaUsandoSomas(3, 2);

  assert.equal(resultado, 9, "Teste correto - O valor eh igual a 9");
});
