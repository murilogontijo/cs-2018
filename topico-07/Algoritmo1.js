/**
 * Realiza a validação de um numero qualquer se ele possui a Propriedade 3025
 * @author Murilo Gontijo
 * @param {number} numero
 * @returns {boolean} - Retorna se é verdadeiro ou false
 */
function calculaPropriedade3025(numero) {
  if (numero >= 0 && numero <= 9999) {
    aux1 = parseInt(numero / 100);
    aux2 = numero % 100;
    soma = aux1 + aux2;

    if (soma * soma == numero) {
      return true;
    } else return false;
  }
}

exports.calculaPropriedade3025 = calculaPropriedade3025;
