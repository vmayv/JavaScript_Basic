function Sum(x, y) {
  return x + y;
}

function Subtract(x, y) {
  return x - y;
}

function Multiplicate(x, y) {
  return x * y;
}

function Divide(x, y) {
  if (y === 0) {
    return "Деление на ноль!";
  }
  return x / y;
}

function MathOperation(arg1, arg2, operation) {
  arg1 = Number(prompt("Введите первое число: "));
  arg2 = Number(prompt("Введите второе число: "));
  operation = prompt(
    "Введите операцию: Sum, Subtract, Divide или Multiplicate"
  );

  switch (operation) {
    case "Sum":
      alert(Sum(arg1, arg2));
      break;
    case "Subtract":
      alert(Subtract(arg1, arg2));
      break;
    case "Multiplicate":
      alert(Multiplicate(arg1, arg2));
      break;
    case "Divide":
      alert(Divide(arg1, arg2));
      break;
  }
}
