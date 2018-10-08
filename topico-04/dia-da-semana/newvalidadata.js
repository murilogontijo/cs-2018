function validarData(data){
		var formatoValido = /^d{2}/d{2}/d{4}$/;
		var valido = false;
		
		if(!formatoValido.test(data.value))
			alert("A data está no formato errado. Por favor corrija.");
		else{
			var dia = data.value.split("/")[0];
			var mes = data.value.split("/")[1];
			var ano = data.value.split("/")[2];
			var MyData = new Date(ano, mes - 1, dia);
			if((MyData.getMonth() + 1 != mes)
			   ||(MyData.getDate() != dia)
			   ||(MyData.getFullYear() != ano))
				alert("Valores inválidos para o dia, mês ou ano. Por favor corrija.");
			else
				valido = true;
		}
		
		if(valido == false){
			data.focus();
			data.select();
		}
		
		return valido;
	}