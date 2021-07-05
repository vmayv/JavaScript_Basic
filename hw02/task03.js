function Func() {
  var x = Number(prompt("Введите первое число:"));
  var y = Number(prompt("Введите второе число:"));

  if (x > 0 && y > 0) {
    alert("Разность: " + (x - y));
  } else if (x < 0 && y < 0) {
    alert("Произведение: " + x * y);
  } else if ((x >= 0 && y <= 0) || (x <= 0 && y >= 0)) {
    alert("Сумма: " + (x + y));
  }
}
