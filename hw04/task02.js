var basket = {
  items: [
    {
      id: "1",
      group: "group1",
      name: "item1",
      description: "test",
      price: 5.2,
    },
    {
      id: "2",
      group: "group1",
      name: "item2",
      description: "test",
      price: 10.6,
    },
    {
      id: "3",
      group: "group2",
      name: "item3",
      description: "test",
      price: 20.5,
    },
  ],

  BasketPrice: function () {
    var count = 0;
    for (var i = 0; i < this.items.length; i++) {
      count += this.items[i].price;
    }
    alert("Общая стоимость корзины: " + count);
  },

  PrintItems: function () {
    var result = "";
    for (var i = 0; i < this.items.length; i++) {
      result = result + this.items.name + " ";
    }
    alert(result);
  },
};
