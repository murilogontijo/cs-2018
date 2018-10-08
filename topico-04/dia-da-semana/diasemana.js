function formataData(data) {
  var ano = data.substring(0, 4);
  var mes = data.substring(4, 6);
  var dia = data.substring(6, 8);
  dataFormatada = ano + "-" + mes + "-" + dia;
  return dataFormatada;
}

function diaDaSemana(formataData) {
  var mydate = new Date(formataData);
  var myday = mydate.getDay();
  return myday;
}

console.log(diaDaSemana(formataData("20180431")));
