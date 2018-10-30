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
