const store = {
  basket: {},
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

  renderItems() {
    const items = document.querySelector("#items-container");
    const ul = document.createElement("ul");

    for (let i = 0; i < store.items.length; i++) {
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

    const buttons = document.querySelectorAll("#AddToBasket");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", () => {
        const item = store.items[i];
        store.AddToBasket(item);
      });
    }
  },

  renderBasket() {
    const items = document.querySelector("#basket-container");

    const ul = document.createElement("ul");
    const basketEntries = Object.entries(store.basket);

    if (basketEntries.length > 0) {
      ul.style.border = '2px green solid';
      ul.style.backgroundColor = 'lightblue';
    }

    for (let i = 0; i < basketEntries.length; i++) {
      const [article, count] = basketEntries[i];
      const item = store.items.filter(e => e.article === article)[0];

      const li = document.createElement("li");
      li.style.marginBottom = "20px";
      li.style.borderBottom = "2px solid black";

      const spanContainer = document.createElement("span");
      spanContainer.innerText = `${item.article} ${item.category} ${item.brand} - ${count}- ${count * item.price}`;


      li.appendChild(spanContainer);
      ul.appendChild(li);
    }
    const goToBasket = document.createElement('button');
    goToBasket.innerText = 'Перейти к корзине';
    goToBasket.onclick = () => {
      localStorage.setItem('store', JSON.stringify(store));
      document.location.href = 'basket.html';
    }
    ul.appendChild(goToBasket)
    items.replaceChild(ul, items.firstChild);
  },

  AddToBasket: function (item) {
    if (item.leftInStock === 0) {
      alert("Нет на складе!");
      return;
    }

    if (!store.basket[item.article]) {
      store.basket[item.article] = 0;
    }

    item.leftInStock -= 1;
    store.basket[item.article] += 1
    store.renderBasket();

  },

  BasketPrice: function () {
    const count = 0;
    for (let i = 0; i < this.items.length; i++) {
      count += this.items[i].price;
    }
    alert("Общая стоимость корзины: " + count);
  },

  PrintItems: function () {
    const result = "";
    for (let i = 0; i < this.items.length; i++) {
      result = result + this.items.name + " ";
    }
    alert(result);
  },
};

store.renderItems();
store.renderBasket();