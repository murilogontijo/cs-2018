var scanf = require("scanf");

/**
 * Recebe uma palavra/texto que será ordenado.
 * Ex.: Entrada= Frase "A vida e bela"; Saida= "aaabdeeilv"
 * @author Murilo Gontijo
 * @param {string} entrada - Texto ou Palavra a ser ordenado
 * @returns {string} - Retorna a String ordenada sem "espaço"
 */
function ordena(entrada) {
  var ordenada = entrada.split("");

  ordenada.forEach((caractere, index) => {
    if (caractere === " ") {
      ordenada.splice(index, 1);
    }
  });

  return ordenada.sort().join("");
}

// console.log("Por favor, digite a frase/palavra a ser ordenada:\n");
// var texto = scanf('%S');
// console.log("\n"+ordena(texto));

console.log(ordena("a vida e bela"));
console.log(ordena("casa"));

exports.ordena = ordena;
