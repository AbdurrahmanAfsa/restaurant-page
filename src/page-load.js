export {pageLoad};
import './style.css'

const pageLoad = () => {
const mainBody = (() => {
    const content = document.querySelector('#content');
    
    const nav = document.createElement('nav');
    const main = document.createElement('main');
    const footer = document.createElement('footer');

    content.appendChild(nav);
    content.appendChild(main);
    content.appendChild(footer);

    return{
        nav,
        main,
        footer,
    }
})()

const nav = (() => {
    const navList = document.createElement('ul');
    mainBody.nav.appendChild(navList);
    
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

    return{
        home,
        menu,
        about,
    }
})()

    
};



