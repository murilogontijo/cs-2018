var scanf = require("scanf");
exports.produtoInteirosUsandoSomas = produtoInteirosUsandoSomas;

/**
 * Calcula o produto entre dois numeros inteiros
 * @author Murilo Gontijo
 * @param {int} entrada - 2 numeros
 * @returns {int} - Retorna o produto do numeros inteiros
 */

function produtoInteirosUsandoSomas(num1, num2) {
  console.log("Digite o primeiro numero: ");
  var num1 = scanf("%d");
  console.log("Digite o segundo numero: ");
  var num2 = scanf("%d");
  if (num1 >= 0 && num2 >= 0) {
    totalParcelas = num1;
    parcela = num2;
    if (num2 < num1) {
      totalParcelas = num2;
      parcela = num1;
    }
    i = 1;
    soma = 0;
    while (i <= totalParcelas) {
      soma = soma + parcela;
      i = i + 1;
    }
    return soma;
  } else {
    throw "Algum numero foi informado incorretamente. Voce deve obedecer a regra: num1 >= 0 && num2 >= 0";
  }
}
console.log(produtoInteirosUsandoSomas());
