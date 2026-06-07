export function Navigation({ links }) {
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
