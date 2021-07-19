function CallNumberToObject() {
  var x = prompt("Введите число от 0 до 999:");
  NumberToObject(x);
}

function NumberToObject(x) {
  var y = parseFloat(x);
  if (y > 1000 || y < 0 || isNaN(y) == true) {
    console.log("Ошибка!");
    var result = {};
    console.log(result);
    return result;
  }
  var result = {
    hundreds: 0,
    tens: 0,
    units: 0,
  };

  var hundreds = parseInt(y / 100);
  var tens = parseInt((y % 100) / 10);
  var units = parseInt(y % 10);

  result.units = units;
  result.tens = tens;
  result.hundreds = hundreds;

  console.log(result);
}
