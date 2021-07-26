var store = {
  basket: [],
  items: [
    {
      type: "clothes",
      sex: "male",
      category: "shorts",
      brand: "nike",
      colour: "black",
      size: { rus: "", uk: "", us: "" }, // можно что-то ещё придумать с размерами: высота, ширина и тд.
      leftInStock: 1,
      amount: 15,
      price: 2000,
      countryOfProduction: "China",
      article: "908397423694X",
      composition: { cotton: 50, polyester: 50 }, // можно расширить
      inBasket: true,
      countInBasket: 1,
    },
    {
      type: "clothes",
      sex: "male",
      category: "shorts",
      brand: "nike",
      colour: "black",
      size: { rus: "", uk: "", us: "" }, // можно что-то ещё придумать с размерами: высота, ширина и тд.
      leftInStock: 10,
      amount: 15,
      price: 1200,
      countryOfProduction: "China",
      article: "908397423695X",
      composition: { cotton: 50, polyester: 50 }, // можно расширить
      inBasket: true,
      countInBasket: 1,
    },
    {
      type: "clothes",
      sex: "male",
      category: "shorts",
      brand: "nike",
      colour: "black",
      size: { rus: "", uk: "", us: "" }, // можно что-то ещё придумать с размерами: высота, ширина и тд.
      leftInStock: 10,
      amount: 15,
      price: 200,
      countryOfProduction: "China",
      article: "908397423696X",
      composition: { cotton: 50, polyester: 50 }, // можно расширить
      inBasket: true,
      countInBasket: 1,
    },
  ],

  AddToBasket: function (item) {
    // if (this.items.leftInStock === 0) {
    //   alert("Нет на складе!");
    //   return;
    // }

    // if (!this.items.inBasket) {
    //   this.items.inBasket = true;
    // }
    // this.items.leftInStock -= 1;
    // this.items.countInBasket += 1;

    store.basket.push(item);
  },

  RemoveFromBasket: function () {
    if (this.inBasket && this.countInBasket > 0) {
      this.countInBasket -= 1;
      this.leftInStock += 1;

      if (this.countInBasket === 0) {
        this.inBasket = false;
      }
    }
  },

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

function renderItems() {
  var items = document.querySelector("#items-container");
  var ul = document.createElement("ul");

  for (var i = 0; i < store.items.length; i++) {
    const li = document.createElement("li");
    li.style.marginBottom = "20px";

    const span = document.createElement("span");
    const img = document.createElement("img");
    img.src = "https://thiscatdoesnotexist.com";
    img.style.width = "100px";

    const article = document.createElement("p");
    article.innerText = store.items[i].article;

    const name = document.createElement("p");
    name.innerText = `${store.items[i].category} ${store.items[i].brand}`;

    const price = document.createElement("p");
    price.innerText = store.items[i].price;

    const button = document.createElement("button");
    button.innerText = "Add";
    button.id = "AddToBasket";

    span.appendChild(img);
    span.appendChild(article);
    span.appendChild(name);
    span.appendChild(price);
    span.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
    
  }
  items.appendChild(ul);

  var buttons = document.querySelectorAll("#AddToBasket");
  for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => store.AddToBasket(store.items[i]));
  }

}
renderItems();