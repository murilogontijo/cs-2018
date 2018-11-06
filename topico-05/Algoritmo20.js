exports.cpf = cpf;
/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 1 CPF
 * @returns {int} - Retorna o se e valido ou nao
 */
function cpf(d) {
  if (d.length === 11) {
    j =
      10 * d[0] +
      9 * d[1] +
      8 * d[2] +
      6 * d[3] +
      5 * d[4] +
      4 * d[5] +
      3 * d[6] +
      2 * d[7] +
      1 * d[8];
    k =
      11 * d[0] +
      10 * d[1] +
      9 * d[2] +
      8 * d[3] +
      7 * d[4] +
      6 * d[5] +
      5 * d[6] +
      4 * d[7] +
      3 * d[8] +
      2 * d[9];
    dj = (j * 10) % 11;
    if (dj === 10) {
      dj = 0;
    }
    console.log(dj);
    dk = (k * 10) % 11;
    if (dk === 10) {
      dk = 0;
    }
    console.log(dk);
    return (dj = d[9]) + " e " + (dk = d[10]);
  }
}
console.log(cpf("03351839138"));
console.log("############################");
console.log(cpf("03351838166"));
