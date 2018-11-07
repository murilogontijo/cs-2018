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
const valorPi = require("../Algoritmo9");
const logaritmoNatural = require("../Algoritmo10");
const razaoAurea = require("../Algoritmo11");
const quadradoPerfeito = require("../Algoritmo12");
const raiz = require("../Algoritmo13");
const primo = require("../Algoritmo14");
const mdc = require("../Algoritmo16");
const mdc2 = require("../Algoritmo17");
const fibonacci = require("../Algoritmo18");
// const fibonacci2 = require("../Algoritmo19");

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

QUnit.test("Algoritmo9 - O valor de PI", function(assert) {
  let resultado = valorPi.valorPi(3);

  assert.equal(resultado, 3.47, "Teste correto - O valor eh igual a 3.47");
});

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

QUnit.test("Algoritmo12 - O valor do Quadrado Perfeito", function(assert) {
  let resultado = quadradoPerfeito.quadradoPerfeito(5);

  assert.equal(
    resultado,
    5,
    "Teste correto - O valor eh igual a 5. É verdadeiro"
  );
});

QUnit.test("Algoritmo12 - O valor da Razao Aurea", function(assert) {
  let resultado = quadradoPerfeito.quadradoPerfeito(0);

  assert.equal(
    resultado,
    "Numeros não correspondem",
    "Teste correto - Não executa o calculo pois foi informado algum valor incorreto"
  );
});

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

QUnit.test("Algoritmo17 - O valor do MDC2", function(assert) {
  let resultado = mdc2.mdc2(81, 54);

  assert.equal(resultado, 27, "Teste correto - O valor eh igual a 27");
});

QUnit.test("Algoritmo17 - O valor do MDC2", function(assert) {
  let resultado = mdc2.mdc2(5, 0);

  assert.equal(
    resultado,
    "Numeros não correspondem",
    "Teste correto - Não executa o calculo pois foi informado algum valor incorreto"
  );
});

QUnit.test("Algoritmo18 - O valor de fibonacci", function(assert) {
  let resultado = fibonacci.fibonacci(10);

  assert.equal(resultado, 55, "Teste correto - O valor eh igual a 55");
});

QUnit.test("Algoritmo18 - O valor de fibonacci", function(assert) {
  let resultado = fibonacci.fibonacci(-1);

  assert.equal(
    resultado,
    "Numeros não correspondem",
    "Teste correto - Não executa o calculo pois foi informado algum valor incorreto"
  );
});
