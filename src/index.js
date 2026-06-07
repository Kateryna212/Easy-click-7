import { ProductPage } from './pages/ProductPage/ProductPage.js';

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    
    if (rootElement) {
        // Запускаємо рендеринг головної сторінки Easy-click
        const activePage = ProductPage();
        rootElement.appendChild(activePage);
    } else {
        console.error("Помилка: Не знайдено елемент з id='root' в index.html");
    }
});
