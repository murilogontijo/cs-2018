function restoDivisao(x, y) {
  if (y >= 0 && x > 0) {
    resto = x;
    while (y <= resto) {
      resto = resto - y;
    }
    return resto;
  }
}
exports.restoDivisao = restoDivisao;
