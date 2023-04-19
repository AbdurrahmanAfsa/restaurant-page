
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


    
};



