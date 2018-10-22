function calculaPropriedade3025(numero) {
  if (numero >= 0 && numero <= 9999) {
    console.log("cheguei aqui 1");

    aux1 = parseInt(numero / 100);
    aux2 = numero % 100;
    soma = aux1 + aux2;

    if (soma * soma == numero) {
      return true;
    } else return false;
  }
}

exports.calculaPropriedade3025 = calculaPropriedade3025;
