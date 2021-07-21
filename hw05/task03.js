function CreateChessBoardWithPics() {
  var literals = ["A", "B", "C", "D", "E", "F", "G", "H"];
  var pieces = [
    "svg/rook_{color}.svg",
    "svg/knight_{color}.svg",
    "svg/bishop_{color}.svg",
    "svg/queen_{color}.svg",
    "svg/king_{color}.svg",
    "svg/bishop_{color}.svg",
    "svg/knight_{color}.svg",
    "svg/rook_{color}.svg",
  ];
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
    var tr = document.createElement("tr"); // создаём строки
    for (var j = 1; j < 10; j++) {
      var td = document.createElement("td"); // создаём столбцы
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
        var img = document.createElement("img");
        img.src = './svg/pawn_black.svg'
        td.appendChild(img);
        td.align = "center";
      }
      if (i === 7 && j > 1) { // белые пешки
        var img = document.createElement("img");
        img.src = './svg/pawn_white.svg'
        td.appendChild(img);
        td.align = "center";
      }

      if (i === 1 && j > 1) { // чёрные фигуры
        var img = document.createElement("img");
        img.src = pieces[j - 2].replace('{color}', 'black');
        td.appendChild(img);
        td.style.color = blackColor;
        td.align = "center";
      }
      if (i === 8 && j > 1) { // белые фигуры
        var img = document.createElement("img");
        img.src = pieces[j - 2].replace('{color}', 'white');
        td.appendChild(img);
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
  document.body.appendChild(table);
}
