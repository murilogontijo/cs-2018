function razaoAurea(x, y, k) {
  if (0 <= x && x < y && 0 < k && k === x + y) {
    c = y;
    a = x;
    i = 1;
    while (i <= k) {
      t = c;
      c = c + a;
      a = t;
      i = i + 1;
    }
    return c / a;
  } else return "Numeros não correspondem";
}

console.log(razaoAurea(1, 2, 3));

exports.razaoAurea = razaoAurea;
