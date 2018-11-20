var scanf = require("scanf");
/**
 * Calcula o fatorial de um numero natural inteiro.
 * @author Murilo Gontijo
 * @param {int} entrada - 1 numero
 * @returns {int} - Retorna o valor do fatorial
 */
function fatorial(numero) {
  console.log("Digite o numero desejado: ");
  var numero = scanf("%d");
  if (numero >= 1) {
    i = 2;
    f = 1;
    while (i <= numero) {
      f = f * i;
      i = i + 1;
    }
    return f;
  } else {
    throw "Algum numero foi informado incorretamente. Voce deve obedecer a regra: numero >= 1";
  }
}

exports.fatorial = fatorial;
