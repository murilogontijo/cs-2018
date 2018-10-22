function calculaPropriedade153(numero) {
  if (numero >= 0 && numero <= 9999) {
    c = parseInt(numero / 100);
    du = numero % 100;
    d = parseInt(du / 10);
    u = du % 10;

    if (Math.pow(c, 3) + Math.pow(d, 3) + Math.pow(u, 3) == numero) {
      return true;
    } else return false;
  }
}

exports.calculaPropriedade153 = calculaPropriedade153;

console.log(calculaPropriedade153(153));
