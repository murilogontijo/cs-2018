exports.cpf2 = cpf2;

function cpf2(d) {
  if (d.length === 11) {
    c = 8;
    p = d[9];
    s = d[9];
    i = 0;
    while (i <= d.length) {
      console.log(" index " + i + " numero " + d[i]);
      i = i + 1;
    }
    while (1 <= c) {
      p = p + d[c];
      s = s + p;
      c = c - 1;
    }
    j = (s % 11) % 10;
    k = ((s - p + 9 * d[10]) % 11) % 10;
    return (j = d[10]) + " e " + (k = d[11]);
  } else return "Numeros não correspondem";
}

console.log(cpf2("03351839138"));
