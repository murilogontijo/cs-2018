exports.mdc2 = mdc2;

/**
 * Calcula o MDC entre dois numeros
 * @author Murilo Gontijo
 * @param {int} entrada - 2 numeros
 * @returns {int} - Retorna o mdc
 */
function mdc2(numero1, numero2) {
  if (numero2 <= numero1 && 0 < numero2) {
    while (numero1 != numero2) {
      if (numero1 > numero2) {
        numero1 = numero1 - numero2;
      } else {
        numero2 = numero2 - numero1;
      }
    }
    mdc = numero1;
    return mdc;
  } else {
    throw "Algum numero foi informado incorretamente. Voce deve obedecer a regra: numero2 <= numero1 && 0 < numero2";
  }
}
