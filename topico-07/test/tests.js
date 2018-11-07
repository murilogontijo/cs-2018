(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - numero
 * @returns {boolean} - Retorna se é verdadeiro ou false
 */
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
/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 2 numeros
 * @returns {double} - Retorna o logaritmo
 */
function logaritmoNatural(n, k) {
  if (1 <= n && 2 <= k) {
    i = 2;
    e = 1 + n;
    numerador = n;
    denominador = 1;

    while (i <= k) {
      numerador = numerador * numerador;
      denominador = denominador * i;
      e = e + numerador / denominador;
      i = i + 1;
    }
    return e;
  } else return "Numeros não correspondem";
}

console.log(logaritmoNatural(3, 2));

exports.logaritmoNatural = logaritmoNatural;

},{}],3:[function(require,module,exports){
/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 3 numeros
 * @returns {double} - Retorna a razao Aurea
 */
function razaoAurea(x, y, k) {
  if (0 <= x && x < y && 0 < k && k === x + y) {
    c = y;
    a = x;
    i = 1;
    while (i <= k) {
      t = c;
      c = c + a;
      a = t;
      i = i + 1;
    }
    return c / a;
  } else return "Numeros não correspondem";
}

console.log(razaoAurea(1, 2, 3));

exports.razaoAurea = razaoAurea;

},{}],4:[function(require,module,exports){
exports.quadradoPerfeito = quadradoPerfeito;

/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 1 numero
 * @returns {double} - Retorna o quadrado Perfeito
 */
function quadradoPerfeito(n) {
  if (1 <= n) {
    i = 1;
    s = 1;
    while (s < n) {
      i = i + 2;
      s = s + 1;
    }
    return (s = n);
  } else return "Numeros não correspondem";
}

console.log(quadradoPerfeito(0));

},{}],5:[function(require,module,exports){
/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 2 numeros
 * @returns {int} - Retorna a raiz quadrada
 */
function raiz(n, i) {
  if (0 < n) {
    r = 1;
    while (0 <= i) {
      r = (r + n / r) / 2;
      i = i - 1;
    }
    return r;
  } else return "Numeros não correspondem";
}
exports.raiz = raiz;

},{}],6:[function(require,module,exports){
exports.primo = primo;

/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 1 numero
 * @returns {int} - Retorna verdadeiro ou false se o numero eh primo
 */
function primo(n) {
  if (n > 1) {
    i = 2;
    while (i < n) {
      if (n % i === 0) {
        return false;
      }
      i = i + 1;
      return true;
    }
  } else return "Numeros não correspondem";
}

console.log(primo(4));

},{}],7:[function(require,module,exports){
exports.mdc = mdc;

/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 2 numeros
 * @returns {int} - Retorna o mdc
 */
function mdc(a, b) {
  if (b <= a && 0 < b) {
    while (b !== 0) {
      m = a % b;
      a = b;
      b = m;
    }
    return a;
  } else return "Numeros não correspondem";
}

},{}],8:[function(require,module,exports){
exports.mdc2 = mdc2;

/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 2 numeros
 * @returns {int} - Retorna o mdc
 */
function mdc2(a, b) {
  if ((b <= a, 0 < b)) {
    while (a != b) {
      if (a > b) {
        a = a - b;
      } else {
        b = b - a;
      }
    }
    return a;
  } else return "Numeros não correspondem";
}

console.log(mdc2(81, 54));

},{}],9:[function(require,module,exports){
exports.horner = horner;

/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 3 numeros
 * @returns {int} - Retorna o resulto do polinonimo de Horner
 */
function horner(x, g, a) {
  if (1 <= g) {
    p = a[g];
    i = g - 1;
    while (0 <= i) {
      p = p * x + a[i];
      i = i - 1;
    }
    return p;
  } else return "Numeros não correspondem";
}
console.log(horner(10, 60, 3));

},{}],10:[function(require,module,exports){
/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - numero
 * @returns {boolean} - Retorna se é verdadeiro ou false
 */
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

},{}],11:[function(require,module,exports){
/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 3 numeros ( dia, mes e ano)
 * @returns {int} - Retorna o dia da Semana
 */
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

},{}],12:[function(require,module,exports){
/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 2 numeros
 * @returns {int} - Retorna o resto da divisao
 */

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

},{}],13:[function(require,module,exports){
/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 1 numero
 * @returns {int} - Retorna o somatorio dos primeiros numeros naturais
 */
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

},{}],14:[function(require,module,exports){
/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 1 numero
 * @returns {int} - Retorna o valor do fatorial
 */
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

},{}],15:[function(require,module,exports){
/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 2 numeros
 * @returns {int} - Retorna o produto do numeros inteiros
 */

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

},{}],16:[function(require,module,exports){
/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 2 numeros
 * @returns {string} - Retorna a potecia
 */
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

},{}],17:[function(require,module,exports){
/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 1 numero
 * @returns {double} - Retorna o PI
 */
function valorPi(numero) {
  if (numero >= 1) {
    i = 1;
    s = -1;
    d = -1;
    p = 0;

    while (i <= numero) {
      d = d + 2;
      s = -1 * s;
      p = p + (4 * s) / d;
      i = i + 1;
    }
    return p.toFixed(2);
  }
}

exports.valorPi = valorPi;

},{}],18:[function(require,module,exports){
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

},{"../Algoritmo1":1,"../Algoritmo10":2,"../Algoritmo11":3,"../Algoritmo12":4,"../Algoritmo13":5,"../Algoritmo14":6,"../Algoritmo16":7,"../Algoritmo17":8,"../Algoritmo18":9,"../Algoritmo2":10,"../Algoritmo3":11,"../Algoritmo4":12,"../Algoritmo5":13,"../Algoritmo6":14,"../Algoritmo7":15,"../Algoritmo8":16,"../Algoritmo9":17}]},{},[18]);
