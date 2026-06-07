export function Footer({ year, author }) {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `<p>&copy; ${year} | Розробка: ${author}</p>`;
    return footer;
}
