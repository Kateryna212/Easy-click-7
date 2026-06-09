// ==========================================
// 1. СЕРВІС ДАНИХ (SERVICES)
// ==========================================
function fetchProducts() {
    return [
        { id: 1, name: "Ноутбук Pro", price: 35000, image: "💻" },
        { id: 2, name: "Смартфон X", price: 15000, image: "📱" },
        { id: 3, name: "Бездротові Навушники", price: 2500, image: "🎧" },
        { id: 4, name: "Смарт-годинник", price: 4200, image: "⌚" }
    ];
}

// ==========================================
// 2. КОМПОНЕНТИ ВІДОБРАЖЕННЯ (PRESENTATIONAL UI)
// ==========================================

// Компонент 1: Header
function Header({ title }) {
    const header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = `<h1>${title}</h1>`;
    return header;
}

// Компонент 2: Navigation
function Navigation({ links }) {
    const nav = document.createElement('nav');
    nav.className = 'site-nav';
    const ul = document.createElement('ul');
    links.forEach(link => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${link}</a>`;
        ul.appendChild(li);
    });
    nav.appendChild(ul);
    return nav;
}

// Компонент 3: Card (Перевикористовуваний UI)
function Card({ title, price, imageUrl }) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="card-img" style="font-size: 50px; padding: 20px 0;">${imageUrl}</div>
        <h3 class="card-title">${title}</h3>
        <p class="card-price">${price} грн</p>
        <button class="card-btn">Купити в один клік</button>
    `;
    card.querySelector('.card-btn').addEventListener('click', () => {
        alert(`Дякуємо! Товар "${title}" успішно оформлено через Easy-click!`);
    });
    return card;
}

// Компонент 4: Footer
function Footer({ year, author }) {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `<p>&copy; ${year} | ${author} | Усі права захищено</p>`;
    return footer;
}

// ==========================================
// 3. КОНТЕЙНЕРНИЙ КОМПОНЕНТ (LOGIC / CONTAINER)
// ==========================================
function ProductPage() {
    const products = fetchProducts(); 
    const pageContainer = document.createElement('div');
    pageContainer.className = 'page-container';

    // Виклик компонентів з передачею даних (Props)
    pageContainer.appendChild(Header({ title: "Easy-click | Твій швидкий маркетплейс" }));
    pageContainer.appendChild(Navigation({ links: ['Головна', 'Каталог', 'Про Easy-click', 'Контакти'] }));

    // Компонент 5: Створення списку карток (CardList)
    const cardListContainer = document.createElement('main');
    cardListContainer.className = 'card-list';

    // Цикл для повторного використання компонента Card
    products.forEach(product => {
        const cardElement = Card({ 
            title: product.name, 
            price: product.price, 
            imageUrl: product.image 
        });
        cardListContainer.appendChild(cardElement);
    });

    pageContainer.appendChild(cardListContainer);
    pageContainer.appendChild(Footer({ year: 2026, author: "Команда розробки Easy-click" }));

    return pageContainer;
}

// ==========================================
// 4. ЗАПУСК ТА МОНТУВАННЯ ЗАСТОСУНКУ (ENTRY)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        const activePage = ProductPage();
        rootElement.appendChild(activePage);
    }
});
