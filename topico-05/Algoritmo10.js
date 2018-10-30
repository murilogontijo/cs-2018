function logaritmoNatural(n, k) {
  if (1 <= n && 2 <= k) {
    i = 2;
    e = 1 + n;
    numerador = n;
    denominador = 1;

    while (i <= k) {
      numerador = numerador * numerador;
      denominador = denominador * i;
      e = e + numerador / denominador;
      i = i + 1;
    }
    return e;
  } else return "Numeros não correspondem";
}

console.log(logaritmoNatural(3, 2));

exports.logaritmoNatural = logaritmoNatural;
