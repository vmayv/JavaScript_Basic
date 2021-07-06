var basket = [
  { id: "1", group: "group1", name: "item1", description: "test", price: 5 },
  { id: "2", group: "group1", name: "item2", description: "test", price: 10 },
  { id: "3", group: "group2", name: "item3", description: "test", price: 20.5 },
];

function PrintItems(x) {
  var result = "";
  for (var i = 0; i < x.length; i++) {
    result = result + x.name + " ";
  }
  alert(result);
}

function CountBasketPrice(x) {
  var count = 0;
  for (var i = 0; i < x.length; i++) {
    count += x[i].price;
  }
  alert("Общая стоимость корзины: " + count);
}

function CallCountBasketPrice() {
  CountBasketPrice(basket);
}
