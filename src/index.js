import { pageLoad } from "./page-load";
import { menu } from "./menu";
import { about } from "./about";

pageLoad.nav.menu.addEventListener('click' , () => {
    menu();
})

pageLoad.nav.about.addEventListener('click' , () => {
    about();
})