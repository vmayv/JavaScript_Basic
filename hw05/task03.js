var item = {
  type: "clothes",
  sex: "male",
  category: "shorts",
  brand: "nike",
  colour: "black",
  size: { rus: "", uk: "", us: "" }, // можно что-то ещё придумать с размерами: высота, ширина и тд.
  leftInStock: 10,
  amount: 15,
  price: 2000,
  countryOfProduction: "China",
  article: "908397423694X",
  composition: { cotton: 50, polyester: 50 }, // можно расширить
  inBasket: true,
  countInBasket: 1,

  AddToBasket: function () {
    if (this.leftInStock === 0) {
      alert("Нет на складе!");
      return;
    }

    if (!this.inBasket) {
      this.inBasket = true;
    }
    this.leftInStock -= 1;
    this.countInBasket += 1;
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
};
