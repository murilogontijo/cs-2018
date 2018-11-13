/**
 * Realiza a validação de um numero qualquer se ele possui a Propriedade 3153
 * @author Murilo Gontijo
 * @param {number} numero
 * @returns {boolean} True or False
 */
function calculaPropriedade153(numero) {
  if (numero >= 0 && numero <= 9999) {
    aux1 = parseInt(numero / 100);
    aux2 = numero % 100;
    aux3 = parseInt(aux2 / 10);
    aux4 = aux2 % 10;

    if (Math.pow(aux1, 3) + Math.pow(aux3, 3) + Math.pow(aux4, 3) == numero) {
      return true;
    } else return false;
  }
}

exports.calculaPropriedade153 = calculaPropriedade153;
