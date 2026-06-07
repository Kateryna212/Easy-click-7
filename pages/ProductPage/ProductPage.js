import { Header } from '../../components/Header/Header.js';
import { Navigation } from '../../components/Navigation/Navigation.js';
import { Card } from '../../components/Card/Card.js';
import { Footer } from '../../components/Footer/Footer.js';
import { fetchProducts } from '../../services/api.js';

export function ProductPage() {
    const products = fetchProducts(); 
    const appContainer = document.createElement('div');
    appContainer.className = 'page-container';

    // Інтегруємо назву Easy-click у Header
    appContainer.appendChild(Header({ title: "Easy-click | Маркетплейс" }));
    
    appContainer.appendChild(Navigation({ links: ['Головна', 'Каталог', 'Про Easy-click', 'Контакти'] }));

    const cardListContainer = document.createElement('main');
    cardListContainer.className = 'card-list';

    products.forEach(product => {
        const cardElement = Card({ 
            title: product.name, 
            price: product.price, 
            imageUrl: product.image 
        });
        cardListContainer.appendChild(cardElement);
    });

    appContainer.appendChild(cardListContainer);

    // Інтегруємо назву Easy-click у Footer
    appContainer.appendChild(Footer({ year: 2026, author: "Команда Easy-click" }));

    return appContainer;
}
