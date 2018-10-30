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
