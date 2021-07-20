function CreateChessBoard() {
  var literals = ["A", "B", "C", "D", "E", "F", "G", "H"];
  var task2 = document.getElementById("Задание 2");
  var task3 = document.getElementById("Задание 3");
  var table = document.createElement("table");
  var isBlack = false;
  table.title = "Шахматная доска";
  table.border = 1;

  for (var i = 1; i < 10; i++) {
    var tr = document.createElement("tr");
    for (var j = 1; j < 10; j++) {
      var td = document.createElement("td");
      if (i === 9 && j > 1) {
        td.innerText = `${literals[j - 2]}`;
      }
      if (i < 9 && j === 1) {
        td.innerText = `${9 - i}`;
      }
      if (j > 1 && i < 9 && !isBlack) { // разобраться!!! написал и сам не понял!!
        td.style.backgroundColor = "black";
      }
      td.width = 30;
      td.height = 30;
      isBlack = !isBlack;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.body.insertBefore(table, task2);
}