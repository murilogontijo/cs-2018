var menu = require("node-menu");
const produtoInteirosUsandoSomas = require("../topico-05/Algoritmo7");
const fatorial = require("../topico-05/Algoritmo6");
const potenciaUsandoSomas = require("../topico-05/Algoritmo8");
const mdc = require("../topico-05/Algoritmo16");

menu
  .addDelimiter("-", 40, "Calculadora")
  .addItem("MDC - Maior Divisor Comum entre dois numeros", function() {
    console.log(mdc.mdc());
  })
  .addItem("Potencia de um numero", function() {
    console.log(potenciaUsandoSomas.potenciaUsandoSomas());
  })
  .addItem("Multiplicacao entre dois numeros", function() {
    console.log(produtoInteirosUsandoSomas.produtoInteirosUsandoSomas());
  })
  .addItem("Fatorial de um número", function() {
    console.log(fatorial.fatorial());
  })
  .addDelimiter("*", 40)
  .start();
