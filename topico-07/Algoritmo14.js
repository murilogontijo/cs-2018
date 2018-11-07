exports.primo = primo;

/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 1 numero
 * @returns {int} - Retorna verdadeiro ou false se o numero eh primo
 */
function primo(n) {
  if (n > 1) {
    i = 2;
    while (i < n) {
      if (n % i === 0) {
        return false;
      }
      i = i + 1;
      return true;
    }
  } else return "Numeros não correspondem";
}

console.log(primo(4));
