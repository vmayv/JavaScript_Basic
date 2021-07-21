function CreateChessBoardWithPieces() {
  var literals = ["A", "B", "C", "D", "E", "F", "G", "H"];
  var pieces = ["Л", "К", "С", "Ф", "Кр", "С", "К", "Л"];
  var pawn = "П";
  var task3 = document.getElementById("Задание 3");
  var table = document.createElement("table");
  var isBlack = true;
  var whiteBoardColor = "#ABABAB";
  var blackBoardColor = "#797979";
  var whiteColor = "white";
  var blackColor = "black";
  table.title = "Шахматная доска";
  table.border = 1;

  for (var i = 1; i < 10; i++) {
    var tr = document.createElement("tr");// создаём строки
    for (var j = 1; j < 10; j++) {
      var td = document.createElement("td");// создаём столбцы
      td.style.backgroundColor = whiteBoardColor;
      if (i === 9 && j > 1) { // строка с буквенными именованием
        td.innerText = `${literals[j - 2]}`;
        td.style.backgroundColor = whiteColor;
      }
      if (i < 9 && j === 1) { // строка с численным именованием
        td.innerText = `${9 - i}`;
        td.style.backgroundColor = whiteColor;
      }
      if (j > 1 && i < 9 && isBlack) { // через один красим в чёрный
        td.style.backgroundColor = blackBoardColor;
      }
      if (i === 9 && j === 1) {
        // угловой нижний элемент делаем белым
        td.style.backgroundColor = whiteColor;
      }
      if (i === 2 && j > 1) { // чёрные пешки
        td.innerText = pawn;
        td.style.color = blackColor;
        td.align = "center";
      }
      if (i === 7 && j > 1) { // белые пешки
        td.innerText = pawn;
        td.style.color = whiteColor;
        td.align = "center";
      }
      if (i === 1 && j > 1) { // чёрные фигуры
        td.innerText = pieces[j - 2];
        td.style.color = blackColor;
        td.align = "center";
      }
      if (i === 8 && j > 1) { // белые фигуры
        td.innerText = pieces[j - 2];
        td.align = "center";
        td.style.color = whiteColor;
      }
      td.width = 45;
      td.height = 45;
      isBlack = !isBlack;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.body.insertBefore(table, task3);
}
