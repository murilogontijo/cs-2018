export default class verificaDiaSemanaRefencia(dia) {
  if (dia >= 0 && dia <= 6 && dia !== "" && dia !== null) {
    return "Dia da semana valido";
  } else return false;
}