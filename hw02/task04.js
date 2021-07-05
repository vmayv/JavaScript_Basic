function FillArray(number) {
  var arr = [];
  for (var i = number; i <= 15; i++) {
    arr.push(i);
  }
  return arr;
}

function PrintArray(array) {
  var x = "";
  for (var i = 0; i < array.length; i++) {
    x = x + array[i] + " ";
  }
  alert(x);
}

function PrintNumbers() {
  var x = Number(prompt("Введите число от 0 до 15:"));
  var y = [];

  if (x < 0 || x > 15) {
    alert("Ошибка! Число не входит в указанный интервал!");
  } else {
    switch (x) {
      case 0:
        PrintArray(FillArray(0));
        break;
      case 1:
        PrintArray(FillArray(1));
        break;
      case 2:
        PrintArray(FillArray(2));
        break;
      case 3:
        PrintArray(FillArray(3));
        break;
      case 4:
        PrintArray(FillArray(4));
        break;
      case 5:
        PrintArray(FillArray(5));
        break;
      case 6:
        PrintArray(FillArray(6));
        break;
      case 7:
        PrintArray(FillArray(7));
        break;
      case 8:
        PrintArray(FillArray(8));
        break;
      case 9:
        PrintArray(FillArray(9));
        break;
      case 10:
        PrintArray(FillArray(10));
        break;
      case 11:
        PrintArray(FillArray(11));
        break;
      case 12:
        PrintArray(FillArray(12));
        break;
      case 13:
        PrintArray(FillArray(13));
        break;
      case 14:
        PrintArray(FillArray(14));
        break;
      case 15:
        PrintArray(FillArray(15));
        break;
    }
  }
}
