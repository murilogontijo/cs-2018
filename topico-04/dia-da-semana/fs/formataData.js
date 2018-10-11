export default class formataData(data) {
  var newDate = data.toString();
  var ano = newDate.substring(0, 4);
  var mes = newDate.substring(4, 6);
  var dia = newDate.substring(6, 8);

  dataFormatada = ano + "-" + mes + "-" + dia;
  return dataFormatada;
}