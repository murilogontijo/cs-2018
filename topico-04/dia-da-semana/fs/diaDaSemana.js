export default class diaDaSemana(formataData) {
  var mydate = new Date(formataData);
  var myday = mydate.getDay();

  if (myday >= 0 && myday <= 6) {
    return myday;
  } else return -1;
}