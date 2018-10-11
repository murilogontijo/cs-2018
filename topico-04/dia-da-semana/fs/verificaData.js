
export default class verificaData(data) {
  if (data) {
    if (data.toString().length === 8) {
      return validaData(data);
    } else return false;
  } else return false;
}