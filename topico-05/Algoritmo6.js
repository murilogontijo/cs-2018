function fatorial(numero) {
  if (numero >= 1) {
    i = 2;
    f = 1;
    while (i <= numero) {
      f = f * i;
      i = i + 1;
    }
    return f;
  }
}

exports.fatorial = fatorial;

console.log(fatorial(10));
