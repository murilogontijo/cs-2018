var scanf = require('scanf');

function ordena(entrada){
	
	var ordenada = entrada.split("");
	
	ordenada.forEach(function(caractere, index, array){
		if(caractere === " "){
			ordenada.splice(index, 1);
		}
	});
	
	
	
	
	return ordenada.sort().join("");
}

console.log("Por favor, digite a frase/palavra a ser ordenada:\n");
var texto = scanf('%S');
console.log("\n"+ordena(texto));