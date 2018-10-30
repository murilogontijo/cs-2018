exports.horner = horner;

function horner(x, g, a) {
  if (1 <= g) {
    p = a[g];
    i = g - 1;
    while (0 <= i) {
      p = p * x + a[i];
      i = i - 1;
    }
    return p;
  } else return "Numeros não correspondem";
}
console.log(horner(10, 2, 3));
