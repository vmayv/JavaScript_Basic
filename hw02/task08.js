function CallPow() {
  val = Number(prompt("Введите число: "));
  pow = Number(prompt("Введите степень: "));
  alert(Pow(val, pow));
}

function Pow(val, pow) {
  if (pow === 0) {
    return 1;
  }
  if (pow === 1) {
    return val;
  }
  var result = 1;
  if (pow > 1) {
    result = result * Pow(val, pow - 1) * val;
  }
  return result;
}
