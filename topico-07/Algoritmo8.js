var scanf = require("scanf");
/**
 * Calcula a potencia
 * @author Murilo Gontijo
 * @param {int} entrada - 2 numeros
 * @returns {string} - Retorna o resultado da potencia
 */
function potenciaUsandoSomas(base, expoente) {
  console.log("Digite o numero da base : ");
  var base = scanf("%d");
  console.log("Digite o numero do expoente: ");
  var expoente = scanf("%d");
  if (0 <= base && 0 <= expoente) {
    potencia = 1;
    i = 1;

    while (i <= expoente) {
      potencia = potencia * base;
      i = i + 1;
    }
    return potencia;
  } else {
    throw "Algum numero foi informado incorretamente. Voce deve obedecer a regra: 0 <= base && 0 <= expoente";
  }
}

exports.potenciaUsandoSomas = potenciaUsandoSomas;
