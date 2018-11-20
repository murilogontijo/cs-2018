/**
 * Calcula a soma dos primeiros numeros naturais até o numero que foi informado
 * @author Murilo Gontijo
 * @param {int} entrada - 1 numero natural inteiro
 * @returns {int} - Retorna o somatorio dos primeiros numeros naturais
 */
function somaDosPrimeirosNaturais(numeroNatural) {
  if (numeroNatural >= 1) {
    i = 2;
    soma = 1;

    while (i <= numeroNatural) {
      soma = soma + i;
      i = i + 1;
    }
    return soma;
  } else {
    throw "Algum numero foi informado incorretamente. Voce deve obedecer a regra: numero >= 1";
  }
}
exports.somaDosPrimeirosNaturais = somaDosPrimeirosNaturais;
