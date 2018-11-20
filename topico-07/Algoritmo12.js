exports.quadradoPerfeito = quadradoPerfeito;

/**
 * Verifica se o numero eh um quadrado perfeito
 * @author Murilo Gontijo
 * @param {int} numero - 1 numero
 * @returns {boolean} - Retorna true/false se numero é um quadrado Perfeito
 */
function quadradoPerfeito(numero) {
  if (1 <= numero) {
    i = 1;
    soma = 1;
    while (soma < numero) {
      i = i + 2;
      soma = soma + i;
    }
    if (soma === numero) return true;
    else return false;
  } else {
    throw "Algum numero foi informado incorretamente. Voce deve obedecer a regra: 1 <= numero";
  }
}

console.log(quadradoPerfeito(196));
