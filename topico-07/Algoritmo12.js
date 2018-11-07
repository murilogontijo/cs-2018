exports.quadradoPerfeito = quadradoPerfeito;

/**
 * Recebe um numero que será calculado.
 * @author Murilo Gontijo
 * @param {int} entrada - 1 numero
 * @returns {double} - Retorna o quadrado Perfeito
 */
function quadradoPerfeito(n) {
  if (1 <= n) {
    i = 1;
    s = 1;
    while (s < n) {
      i = i + 2;
      s = s + 1;
    }
    return (s = n);
  } else return "Numeros não correspondem";
}

console.log(quadradoPerfeito(0));
