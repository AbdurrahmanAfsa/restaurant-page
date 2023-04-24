import { pageLoad } from "./page-load";
import { menu } from "./menu";
import { about } from "./about";

pageLoad.nav.menu.addEventListener('click' , () => {
    menu();
})

pageLoad.nav.about.addEventListener('click' , () => {
    about();
})

pageLoad.nav.home.addEventListener('click' , () => {
    const main = document.querySelector('main');
    main.innerText = '';
    const title = document.createElement('h1');
    title.classList.add('title');
    main.appendChild(title);
    title.innerText = `El-Mi3alem Restaurant`

    const welcome = document.createElement('p');
    welcome.classList.add('welcome');
    main.appendChild(welcome);
    welcome.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos cupiditate cumque vel, asperiores debitis numquam non incidunt vitae, ullam accusamus, fuga ratione ducimus quis impedit cum illum. Necessitatibus, illo reprehenderit.`
})