var scanf = require("scanf");
exports.mdc = mdc;

/**
 * Calcula o MDC entre dois numeros
 * @author Murilo Gontijo
 * @param {int} entrada - 2 numeros
 * @returns {int} - Retorna o mdc
 */
function mdc(numero1, numero2) {
  console.log("Digite o primeiro numero: ");
  var numero1 = scanf("%d");
  console.log("Digite o segund numero: ");
  var numero2 = scanf("%d");
  if (numero2 <= numero1 && 0 < numero2) {
    while (numero2 !== 0) {
      m = numero1 % numero2;
      numero1 = numero2;
      numero2 = m;
    }
    mdc = numero1;
    return mdc;
  } else {
    throw "Algum numero foi informado incorretamente. Voce deve obedecer a regra: numero2 <= numero1 && 0 < numero2";
  }
}
