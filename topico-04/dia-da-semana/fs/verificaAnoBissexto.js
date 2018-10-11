export default class verificaAnoBissexto(ano) {
  if (ano > 0) {
    if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)) {
      return "O ano eh bissexto";
    } else return "O ano nao eh bissexto";
  } else return false;
}