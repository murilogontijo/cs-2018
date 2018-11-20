exports.primo = primo;

/**
 * Verifica se o numero eh primo
 * @author Murilo Gontijo
 * @param {int} numero - 1 numero
 * @returns {boolean} - Retorna verdadeiro ou false se o numero eh primo
 */
function primo(numero) {
  if (numero > 1) {
    i = 2;
    while (i < numero) {
      if (numero % i === 0) {
        return false;
      }
      i = i + 1;
      return true;
    }
  } else {
    throw "Algum numero foi informado incorretamente. Voce deve obedecer a regra: numero > 1";
  }
}
