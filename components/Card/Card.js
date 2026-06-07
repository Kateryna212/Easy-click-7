// Чиста функція: приймає дані (props) -> повертає розмітку
export function Card({ title, price, imageUrl }) {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
        <img src="${imageUrl}" alt="${title}" class="card-img" />
        <h3 class="card-title">${title}</h3>
        <p class="card-price">${price} грн</p>
        <button class="card-btn">Купити</button>
    `;

    // Приклад ізольованої логіки всередині UI-компонента
    card.querySelector('.card-btn').addEventListener('click', () => {
        alert(`Товар "${title}" додано до кошика!`);
    });

    return card;
}
