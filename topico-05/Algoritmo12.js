exports.quadradoPerfeito = quadradoPerfeito;

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
