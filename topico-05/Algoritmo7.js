function produtoInteirosUsandoSomas(num1, num2) {
  if (num1 >= 0 && num2 >= 0) {
    totalParcelas = num1;
    parcela = num2;
    if (num2 < num1) {
      totalParcelas = num2;
      parcela = num1;
    }
    i = 1;
    s = 0;
    while (i <= totalParcelas) {
      s = s + parcela;
      i = i + 1;
    }
    return s;
  }
}

exports.produtoInteirosUsandoSomas = produtoInteirosUsandoSomas;
console.log(produtoInteirosUsandoSomas(5, 2));
console.log(produtoInteirosUsandoSomas(5, 6));
