export {pageLoad};
import './style.css'
import egyptianFood from './egyptian-food.jpg';

const pageLoad = () => {
    const mainBody = (() => {
        const content = document.querySelector('#content');
        const myImage = new Image();
        myImage.src = egyptianFood;
        
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

    const main = (() => {
        const title = document.createElement('h1');
        title.classList.add('title');
        mainBody.main.appendChild(title);
        title.innerText = `El-Mi3alem Restaurant`

        const welcome = document.createElement('p');
        welcome.classList.add('welcome');
        mainBody.main.appendChild(welcome);
        welcome.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos cupiditate cumque vel, asperiores debitis numquam non incidunt vitae, ullam accusamus, fuga ratione ducimus quis impedit cum illum. Necessitatibus, illo reprehenderit.`
    })()

    const footer = (() => {
        const footerText = document.createElement('p');
        footerText.classList.add('footer-text');
        mainBody.footer.appendChild(footerText);
        footerText.innerText = 'Developed by Abdurrahman Afsa';
    })()

    return {
        mainBody,
        nav,
        main,
        footer,
    }
    
};



