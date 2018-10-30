exports.mdc = mdc;

function mdc(a, b) {
  if (b <= a && 0 < b) {
    while (b !== 0) {
      m = a % b;
      a = b;
      b = m;
    }
    return a;
  } else return "Numeros não correspondem";
}
