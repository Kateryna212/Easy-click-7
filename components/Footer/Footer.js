export function Footer({ year, author }) {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `<p>&copy; ${year} | ${author} | Усі права захищено</p>`;
    return footer;
}
