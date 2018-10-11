function validaData(data) {
  var newDate = data.toString();

  year = newDate.substring(0, 4);
  month = newDate.substring(4, 6);
  day = newDate.substring(6, 8);

  if (
    month == 01 ||
    month == 03 ||
    month == 05 ||
    month == 07 ||
    month == 08 ||
    month == 10 ||
    month == 12
  ) {
    //mes com 31 dias
    if (day < 01 || day > 31) {
      return "invalid date 31 dias";
    } else if (day === 00) {
      return "invalid day";
    } else return "Data validada";
  } else if (month == 04 || month == 06 || month == 09 || month == 11) {
    //mes com 30 dias
    if (day < 01 || day > 30) {
      return "invalid date 30 dias";
    } else if (day === 00) {
      return "invalid day";
    } else return "Data validada";
  } else if (month == 02) {
    //Fevereiro e ano bissexto
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
      if (day < 01 || day > 29) {
        return "invalid date bissexto";
      } else if (day === 00) {
        return "invalid day";
      } else return "Data validada";
    } else {
      if (day < 01 || day > 28) {
        return "invalid date fevereiro";
      } else if (day === 00) {
        return "invalid day";
      } else return "Data validada";
    }
  }
}

function formataData(data) {
  var newDate = data.toString();
  var ano = newDate.substring(0, 4);
  var mes = newDate.substring(4, 6);
  var dia = newDate.substring(6, 8);

  dataFormatada = ano + "-" + mes + "-" + dia;
  return dataFormatada;
}

function diaDaSemana(formataData) {
  var mydate = new Date(formataData);
  var myday = mydate.getDay();

  if (myday >= 0 && myday <= 6) {
    return myday;
  } else return -1;
}

function verificaData(data) {
  if (data) {
    if (data.toString().length === 8) {
      return validaData(data);
    } else return false;
  } else return false;
}

function verificaAnoBissexto(ano) {
  if (ano > 0) {
    if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)) {
      return "O ano eh bissexto";
    } else return "O ano nao eh bissexto";
  } else return false;
}

function verificaDiaSemanaRefencia(dia) {
  if (dia >= 0 && dia <= 6 && dia !== "" && dia !== null) {
    return "Dia da semana valido";
  } else return false;
}

var data = 20160301;
var anoBissexto = 2016;
var dataReferencia = 20160228;
var diaSemanaRefencia = 6;

if (
  verificaData(data) &&
  verificaAnoBissexto(anoBissexto) &&
  verificaData(dataReferencia) &&
  verificaDiaSemanaRefencia(diaSemanaRefencia)
) {
  console.log(diaDaSemana(formataData(data)));
  return;
} else {
  console.log(-1);
  return;
}
