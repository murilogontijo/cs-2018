exports.CrivoEratostenes = CrivoEratostenes;

function CrivoEratostenes(n) {
  if (n > 1) {
    i = 2;
    limite = Math.sqrt(n);

    while (i <= limite) {
      if ((a[i] = 0)) {
        multiplo = i + 1;
        while (multiplo <= n) {
          a[multiplo] = 1;
          multiplo = multiplo + i;
        }
      }
      i = i + 1;
    }
  }
}

console.log(CrivoEratostenes(3));
