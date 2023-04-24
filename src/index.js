import { pageLoad } from "./page-load";
import { menu } from "./menu";

pageLoad().nav.menu.addEventListener('click' , () => {
    menu();
})
