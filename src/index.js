import { ProductPage } from './pages/ProductPage/ProductPage.js';

// Чекаємо завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    
    // Викликаємо функцію сторінки-контейнера та додаємо її на екран
    const activePage = ProductPage();
    rootElement.appendChild(activePage);
});
