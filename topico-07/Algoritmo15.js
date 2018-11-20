exports.CrivoEratostenes = CrivoEratostenes;
/**
 * Calcula o Crivo de Erastostenes
 * @author Murilo Gontijo
 * @param {int} numero - 1 numero
 * @returns {int} - Retorna o Crivo Erastostenes
 */
function CrivoEratostenes(a, numero) {
  if (numero > 1) {
    i = 2;
    limite = Math.sqrt(numero);

    while (i <= limite) {
      if ((a[i] = 0)) {
        multiplo = i + 1;
        while (multiplo <= numero) {
          a[multiplo] = 1;
          multiplo = multiplo + i;
        }
      }
      i = i + 1;
    }
  } else {
    throw "Algum numero foi informado incorretamente. Voce deve obedecer a regra: numero > 1";
  }
}
