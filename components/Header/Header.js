export function Header({ title }) {
    const header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = `<h1>${title}</h1>`;
    return header;
}
