exports.mdc2 = mdc2;

function mdc2(a, b) {
  if ((b <= a, 0 < b)) {
    while (a != b) {
      if (a > b) {
        a = a - b;
      } else {
        b = b - a;
      }
    }
    return a;
  } else return "Numeros não correspondem";
}

console.log(mdc2(81, 54));
