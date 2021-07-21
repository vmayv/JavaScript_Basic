function CreateChessBoard() {
  var literals = ["A", "B", "C", "D", "E", "F", "G", "H"];
  var task2 = document.getElementById("Задание 2");
  var table = document.createElement("table");
  var isBlack = true;
  var whiteBoardColor = "#ABABAB";
  var blackBoardColor = "#797979";
  table.title = "Шахматная доска";
  table.border = 1;

  for (var i = 1; i < 10; i++) {
    var tr = document.createElement("tr"); // создаём строки
    for (var j = 1; j < 10; j++) {
      var td = document.createElement("td"); // создаём столбцы
      td.style.backgroundColor = whiteBoardColor;
      if (i === 9 && j > 1) { // строка с буквенными именованием
        td.innerText = `${literals[j - 2]}`;
        td.style.backgroundColor = "white";
      }
      if (i < 9 && j === 1) { // строка с численным именованием
        td.innerText = `${9 - i}`;
        td.style.backgroundColor = "white";
      }
      if (j > 1 && i < 9 && isBlack) { // через один красим в чёрный
        td.style.backgroundColor = blackBoardColor;
      }
      if (i === 9 && j === 1) {
        // угловой нижний элемент делаем белым
        td.style.backgroundColor = "white";
      }
      td.width = 45;
      td.height = 45;
      isBlack = !isBlack;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.body.insertBefore(table, task2);
}
