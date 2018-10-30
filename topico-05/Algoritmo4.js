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
