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
