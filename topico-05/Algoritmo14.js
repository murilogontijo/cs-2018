exports.primo = primo;

function primo(n) {
  if (n > 1) {
    i = 2;
    while (i < n) {
      if (n % i === 0) {
        return false;
      }
      i = i + 1;
      return true;
    }
  } else return "Numeros não correspondem";
}

console.log(primo(4));
