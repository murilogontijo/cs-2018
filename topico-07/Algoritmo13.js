/**
 * Calcula a raiz quadrada de um numero
 * @author Murilo Gontijo
 * @param {int} base precisao - 2 numeros
 * @returns {int} - Retorna a raiz quadrada
 */
function raiz(base, precisao) {
  if (0 < base) {
    potencia = 1;
    while (0 <= precisao) {
      potencia = (potencia + base / potencia) / 2;
      precisao = precisao - 1;
    }
    return potencia;
  } else {
    throw "Algum numero foi informado incorretamente. Voce deve obedecer a regra: 0 < base";
  }
}
exports.raiz = raiz;
