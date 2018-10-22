function somaDosPrimeirosNaturais(numero) {
  if (numero >= 1) {
    i = 2;
    s = 1;

    while (i <= numero) {
      s = s + i;
      i = i + 1;
    }
    return s;
  }
}
exports.somaDosPrimeirosNaturais = somaDosPrimeirosNaturais;
