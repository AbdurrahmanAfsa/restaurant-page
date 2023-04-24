export {menu};
import './style.css'

const menu = () => {
    const main = document.querySelector('main');
    main.innerText = ''

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    main.appendChild(menuContainer);

    const foodArray = ['Koshary' , 'Mahshi' , 'Kabab wi Koftah' , 'Hamam Mahshi' , `Roz M'ammar` , 'Macarona Bashamil'];

    for(let i = 0; i < foodArray.length; i++){
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');
        menuContainer.appendChild(foodItem);

        const foodItemTitle = document.createElement('h3');
        foodItemTitle.classList.add('food-item-title');
        foodItem.appendChild(foodItemTitle);
        foodItemTitle.innerText = foodArray[i];

        const foodItemDesc = document.createElement('p');
        foodItemDesc.classList.add('food-item-desc');
        foodItem.appendChild(foodItemDesc);
        foodItemDesc.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, repellendus?'
    }

}