(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function calculaPropriedade3025(numero) {
  if (numero >= 0 && numero <= 9999) {
    aux1 = parseInt(numero / 100);
    aux2 = numero % 100;
    soma = aux1 + aux2;

    if (soma * soma == numero) {
      return true;
    } else return false;
  }
}

exports.calculaPropriedade3025 = calculaPropriedade3025;

},{}],2:[function(require,module,exports){
function calculaPropriedade153(numero) {
  if (numero >= 0 && numero <= 9999) {
    c = parseInt(numero / 100);
    du = numero % 100;
    d = parseInt(du / 10);
    u = du % 10;

    if (Math.pow(c, 3) + Math.pow(d, 3) + Math.pow(u, 3) == numero) {
      return true;
    } else return false;
  }
}

exports.calculaPropriedade153 = calculaPropriedade153;

console.log(calculaPropriedade153(153));

},{}],3:[function(require,module,exports){
function diaDaSemana(dia, mes, ano) {
  if (dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12 && ano > 1753) {
    if (mes === 1 || mes === 2) {
      mes = mes + 12;
      ano = ano - 1;
    }
    diaSemana =
      dia +
      2 * mes +
      (3 * (mes + 1)) / 5 +
      (ano + ano / 4 - ano / 100 + ano / 400);
    return parseInt(diaSemana % 7);
  }
}
console.log(diaDaSemana(22, 10, 2018));

exports.diaDaSemana = diaDaSemana;

},{}],4:[function(require,module,exports){
function restoDivisao(x, y) {
  if (y >= 0 && x > 0) {
    resto = x;
    while (y <= resto) {
      resto = resto - y;
    }
    return resto;
  }
}
exports.restoDivisao = restoDivisao;

},{}],5:[function(require,module,exports){
function somaDosPrimeirosNaturais(numero) {
  if (numero >= 1) {
    i = 2;
    s = 1;

    while (i <= numero) {
      s = s + i;
      i = i + 1;
    }
    return s;
  }
}
exports.somaDosPrimeirosNaturais = somaDosPrimeirosNaturais;

},{}],6:[function(require,module,exports){
function fatorial(numero) {
  if (numero >= 1) {
    i = 2;
    f = 1;
    while (i <= numero) {
      f = f * i;
      i = i + 1;
    }
    return f;
  }
}

exports.fatorial = fatorial;

console.log(fatorial(10));

},{}],7:[function(require,module,exports){
function produtoInteirosUsandoSomas(num1, num2) {
  if (num1 >= 0 && num2 >= 0) {
    totalParcelas = num1;
    parcela = num2;
    if (num2 < num1) {
      totalParcelas = num2;
      parcela = num1;
    }
    i = 1;
    s = 0;
    while (i <= totalParcelas) {
      s = s + parcela;
      i = i + 1;
    }
    return s;
  }
}

exports.produtoInteirosUsandoSomas = produtoInteirosUsandoSomas;
console.log(produtoInteirosUsandoSomas(5, 2));
console.log(produtoInteirosUsandoSomas(5, 6));

},{}],8:[function(require,module,exports){
function potenciaUsandoSomas(x, y) {
  if (0 <= x && 0 <= y) {
    potencia = 1;
    i = 1;

    while (i <= y) {
      potencia = potencia * x;
      i = i + 1;
    }
    return potencia;
  }
}

exports.potenciaUsandoSomas = potenciaUsandoSomas;

},{}],9:[function(require,module,exports){
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

},{"../Algoritmo1":1,"../Algoritmo2":2,"../Algoritmo3":3,"../Algoritmo4":4,"../Algoritmo5":5,"../Algoritmo6":6,"../Algoritmo7":7,"../Algoritmo8":8}]},{},[9]);
