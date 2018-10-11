import diaDaSemana from "./diaDaSemana";
import formataData from "./formataData";
import validadata from "./validadata";
import verificaAnoBissexto from "./verificaAnoBissexto";
import verificaData from "./verificaData";
import verificaDiaSemanaRefencia from "./verificaDiaSemanaRefencia";

const funcaodiaDaSemana = new diaDaSemana();
const funcaoformataData = new formataData();
const funcaovalidadata = new validadata();
const funcaoverificaAnoBissexto = new verificaAnoBissexto();
const funcaoverificaData = new verificaData();
const funcaoverificaDiaSemanaRefencia = new verificaDiaSemanaRefencia();


var data = 20160301;
var anoBissexto = 2016;
var dataReferencia = 20160228;
var diaSemanaRefencia = 6;

if (
  funcaoverificaData.verificaData(data) &&
  funcaoverificaAnoBissexto.verificaAnoBissexto(anoBissexto) &&
  funcaoverificaData.verificaData(dataReferencia) &&
  funcaoverificaDiaSemanaRefencia.verificaDiaSemanaRefencia(diaSemanaRefencia)
) {
  console.log(funcaodiaDaSemana.diaDaSemana(funcaoformataData.formataData(data)));
  return;
} else {
  console.log(-1);
  return;
}