/**
 * Calcula o valor da razao aurea
 * @author Murilo Gontijo
 * @param {int} entrada - 2 numeros
 * @returns {double} - Retorna a razao Aurea
 */
function razaoAurea(x, y) {
  k = x + y;
  if (0 <= x && x < y && 0 < k) {
    c = y;
    a = x;
    i = 1;
    while (i <= k) {
      t = c;
      c = c + a;
      a = t;
      i = i + 1;
    }
    return c / a;
  } else {
    throw "Algum numero foi informado incorretamente. Voce deve obedecer a regra: 0 <= x && x < y && 0 < k";
  }
}

console.log(razaoAurea(10, 20));

exports.razaoAurea = razaoAurea;
