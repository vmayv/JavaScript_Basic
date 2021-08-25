const basket = {
    incrementItem: function (article) {
        const store = JSON.parse(localStorage.getItem('store'));
        const item = store.items.find(e => e.article === article);
        if (item.leftInStock === 0) {
            alert("Нет на складе!");
            return;
        }

        if (!store.basket[item.article]) {
            store.basket[item.article] = 0;
        }

        item.leftInStock -= 1;
        store.basket[item.article] += 1;
        localStorage.setItem('store', JSON.stringify(store));
        basket.renderBasket();
    },

    decrementItem: function (article) {
        const store = JSON.parse(localStorage.getItem('store'));
        const item = store.items.find(e => e.article === article);

        item.leftInStock += 1;
        if (store.basket[item.article] === 1) {
            delete store.basket[item.article];
        } else {
            store.basket[item.article] -= 1;
        }
        localStorage.setItem('store', JSON.stringify(store));
        basket.renderBasket();
    },
    renderBasket() {
        const basketElement = document.querySelector("#basket");

        const store = JSON.parse(localStorage.getItem('store'));
        const basketEntries = Object.entries(store.basket);

        if (basketEntries.length === 0) {
            basketElement.innerText = "Корзина пуста";
            return;
        }

        const table = document.createElement('table');
        table.innerHTML = `
<thead>
<tr>
  <th>Артикул</th>
  <th>Наименование</th>
  <th>Количество</th>
  <th>Цена</th>
</tr>
</thead>`;
        tableBody = document.createElement('tbody');
        table.appendChild(tableBody);
        basketElement.appendChild(table);

        for (let i = 0; i < basketEntries.length; i++) {
            const [article, count] = basketEntries[i];
            const item = store.items.filter(e => e.article === article)[0];
            const tr = document.createElement('tr');

            const articleTd = document.createElement('td');
            articleTd.innerText = item.article;

            const categoryTd = document.createElement('td');
            categoryTd.innerText = item.category;

            const countTd = document.createElement('td');
            const countSpan = document.createElement('span');
            countSpan.style.marginLeft = '8px';
            countSpan.style.marginRight = '8px';
            countSpan.innerText = count;

            const incButton = document.createElement('button');
            incButton.addEventListener('click', () => basket.incrementItem(item.article))
            incButton.textContent = '+'

            const decButton = document.createElement('button');
            decButton.addEventListener('click', () => basket.decrementItem(item.article))
            decButton.textContent = '-';

            countTd.appendChild(decButton);
            countTd.appendChild(countSpan);
            countTd.appendChild(incButton);

            const priceTd = document.createElement('td');
            priceTd.innerText = count * item.price;

            tr.appendChild(articleTd);
            tr.appendChild(categoryTd);
            tr.appendChild(countTd);
            tr.appendChild(priceTd);
            tableBody.appendChild(tr);
        }
        basketElement.replaceChild(table, basketElement.firstChild)
    },

}

basket.renderBasket();
const details = document.querySelectorAll("details");
const collapseButtons = document.querySelectorAll(".collapse");
collapseButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.parentElement.removeAttribute("open");
        button.parentElement.nextElementSibling.setAttribute("open", "")
    });
});