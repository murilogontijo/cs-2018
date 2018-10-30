function raiz(n, i) {
  if (0 < n) {
    r = 1;
    while (0 <= i) {
      r = (r + n / r) / 2;
      i = i - 1;
    }
    return r;
  } else return "Numeros não correspondem";
}
exports.raiz = raiz;
