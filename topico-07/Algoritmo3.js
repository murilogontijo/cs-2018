/**
 * Exebi o dia da semana a partir de uma data
 * @author Murilo Gontijo
 * @param {number}3 numeros ( dia, mes e ano)
 * @returns {number} - Retorna o dia da Semana
 */
function diaDaSemana(dia, mes, ano) {
  if (dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12 && ano > 1753) {
    if (mes === 1 || mes === 2) {
      mes = mes + 12;
      ano = ano - 1;
    }
    diaSemana =
      dia +
      2 * mes +
      (3 * (mes + 1)) / 5 +
      (ano + ano / 4 - ano / 100 + ano / 400);
    return parseInt(diaSemana % 7);
  } else {
    throw "Algum numero foi informado incorretamente. Voce deve obedecer a regra: dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12 && ano > 1753";
  }
}

exports.diaDaSemana = diaDaSemana;
