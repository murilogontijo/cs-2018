exports.cpf2 = cpf2;
/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 1 CPF
 * @returns {int} - Retorna o se e valido ou nao
 */
function cpf2(d) {
  if (d.length === 11) {
    c = 8;
    p = d[8];
    s = d[8];
    i = 0;

    while (1 <= c) {
      p = p + d[c];
      s = s + p;
      c = c - 1;
    }
    j = (s % 11) % 10;
    k = ((s - p + 9 * d[10]) % 11) % 10;
    console.log(j);
    console.log(k);
    return (j = d[9]) + " e " + (k = d[10]);
  } else return "Numeros não correspondem";
}

console.log(cpf2("03351839138"));
