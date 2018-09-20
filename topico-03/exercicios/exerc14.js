/*Instruções:
Escreva uma expressão anônima de função que armazena uma função em uma variável de nome "laugh" e retorna como saída o número de "ha"s que você passa como um argumento.

laugh(3);
Returns: hahaha!*/

var laugh = function (x){
	var risos = "";
	for(var i=0; i<x; i++){
		risos += "ha";
	}
	return risos+"!";
}

console.log(laugh(10));