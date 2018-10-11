export default class validaData(data) {
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