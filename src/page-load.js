export {pageLoad};

const pageLoad = () => {
    const content = document.querySelector('#content');
    
    const nav = document.createElement('nav');
    const main = document.createElement('main');
    const footer = document.createElement('footer');

    content.appendChild(nav);
    content.appendChild(main);
    content.appendChild(footer);

    const navList = document.createElement('ul');
    nav.appendChild(navList);
    
    const home = document.createElement('li');
    home.classList.add('home');
    home.innerText = 'HOME';
    navList.appendChild(home);
    
    const menu = document.createElement('li');
    menu.classList.add('menu');
    menu.innerText = 'MENU';
    navList.appendChild(menu);
    
    const about = document.createElement('li');
    about.classList.add('about');
    about.innerText = 'ABOUT';
    navList.appendChild(about);
    
};



