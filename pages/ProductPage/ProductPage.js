import { Header } from '../../components/Header/Header.js';
import { Navigation } from '../../components/Navigation/Navigation.js';
import { Card } from '../../components/Card/Card.js';
import { Footer } from '../../components/Footer/Footer.js';
import { fetchProducts } from '../../services/api.js';

export function ProductPage() {
    // Отримуємо дані з нашого сервісу
    const products = fetchProducts(); 
    
    const pageContainer = document.createElement('div');
    pageContainer.className = 'page-container';

    // 1. Додаємо Header
    pageContainer.appendChild(Header({ title: "Easy-click | Твій швидкий маркетплейс" }));
    
    // 2. Додаємо Навігацію
    pageContainer.appendChild(Navigation({ links: ['Головна', 'Каталог', 'Про Easy-click', 'Контакти'] }));

    // 3. Створюємо список карток (CardList)
    const cardListContainer = document.createElement('main');
    cardListContainer.className = 'card-list';

    // Рендеримо картки в циклі (Повторне використання компонента Card)
    products.forEach(product => {
        const cardElement = Card({ 
            title: product.name, 
            price: product.price, 
            imageUrl: product.image 
        });
        cardListContainer.appendChild(cardElement);
    });

    pageContainer.appendChild(cardListContainer);

    // 4. Додаємо Footer
    pageContainer.appendChild(Footer({ year: 2026, author: "Команда розробки Easy-click" }));

    return pageContainer;
}
