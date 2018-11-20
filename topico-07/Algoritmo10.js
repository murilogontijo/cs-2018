/**
 * Calcula o logaritmo natural de um numero
 * @author Murilo Gontijo
 * @param {int} entrada - 2 numeros
 * @returns {double} - Retorna o logaritmo
 */
function logaritmoNatural(base, expoente) {
  if (1 <= base && 2 <= expoente) {
    i = 2;
    logaritmo = 1 + base;
    numerador = base;
    denominador = 1;

    while (i <= expoente) {
      numerador = numerador * numerador;
      denominador = denominador * i;
      logaritmo = logaritmo + numerador / denominador;
      i = i + 1;
    }
    return logaritmo;
  } else {
    throw "Algum numero foi informado incorretamente. Voce deve obedecer a regra: 1 <= base && 2 <= expoente";
  }
}

exports.logaritmoNatural = logaritmoNatural;
