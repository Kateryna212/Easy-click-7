export function Card({ title, price, imageUrl }) {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
        <div class="card-img">${imageUrl}</div>
        <h3 class="card-title">${title}</h3>
        <p class="card-price">${price} грн</p>
        <button class="card-btn">Купити в один клік</button>
    `;

    // Додаємо інтерактивність (швидкий клік)
    card.querySelector('.card-btn').addEventListener('click', () => {
        alert(`Дякуємо! Товар "${title}" успішно оформлено через Easy-click!`);
    });

    return card;
}
