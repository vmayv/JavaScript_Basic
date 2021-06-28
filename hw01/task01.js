function ConvertTemperature() {
var temperatureC = prompt("Введите температуру в градусах Цельсия:");
temperatureC = parseFloat(temperatureC);
if (typeof(temperatureC) == "number") {
    var temperatureF = (9/5) * temperatureC + 32;
    alert ("Значение температуры по Фаренгейту: " + temperatureF);
} else {
alert("Введены не числовые данные");
}}