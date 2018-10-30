/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 3 numeros ( dia, mes e ano)
 * @returns {int} - Retorna o dia da Semana
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
  }
}
console.log(diaDaSemana(22, 10, 2018));

exports.diaDaSemana = diaDaSemana;
