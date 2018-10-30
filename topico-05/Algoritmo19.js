exports.fibonacci = fibonacci;
/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 1 numero
 * @returns {int} - Retorna o valor do fibonacci
 */
function fibonacci(n) {
  if (0 <= n) {
    a = 0;
    c = 1;
    if (n === 0 || n === 1) {
      return n;
    }
    i = 2;
    while (i <= n) {
      t = c;
      c = c + a;
      a = t;
      i = i + 1;
    }
    return c;
  } else return "Numeros não correspondem";
}
