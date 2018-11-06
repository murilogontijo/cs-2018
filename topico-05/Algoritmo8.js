var scanf = require("scanf");
/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 2 numeros
 * @returns {string} - Retorna a potecia
 */
function potenciaUsandoSomas(x, y) {
  console.log("Digite o numero da base : ");
  var x = scanf("%d");
  console.log("Digite o numero do expoente: ");
  var y = scanf("%d");
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
