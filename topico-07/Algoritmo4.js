/**
 * Calcula o resto de uma divisao
 * @author Murilo Gontijo
 * @param {int} entrada - 2 numeros
 * @returns {int} - Retorna o resto da divisao ou um excecao
 */

function restoDivisao(dividendo, divisor) {
  if (divisor >= 0 && dividendo > 0) {
    resto = dividendo;
    while (divisor <= resto) {
      resto = resto - divisor;
    }
    return resto;
  } else {
    throw "Algum numero foi informado incorretamente. Voce deve obedecer a regra: divisor > 0 AND dividendo >= 0";
  }
}
exports.restoDivisao = restoDivisao;
