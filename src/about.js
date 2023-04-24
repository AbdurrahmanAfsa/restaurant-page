export {about};
import './style.css';

const about = () => {
    const main = document.querySelector('main');
    main.innerText = ''
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    main.appendChild(aboutContainer);

    const aboutWelcome = document.createElement('h1');
    aboutWelcome.classList.add('about-welcome');
    aboutContainer.appendChild(aboutWelcome);
    aboutWelcome.innerText = 'El-Mi3alem Restaurant';

    const aboutPara = document.createElement('p');
    aboutPara.classList.add('about-para');
    aboutContainer.appendChild(aboutPara)
    aboutPara.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deleniti alias dolorem minus, culpa obcaecati quam harum eos laudantium maiores quis aliquam, nobis sunt, voluptas veniam. Debitis non, numquam asperiores doloremque dolor at pariatur magni nostrum praesentium vel voluptatem dolorum exercitationem voluptas explicabo perspiciatis quia fugiat natus excepturi? Possimus, explicabo?';
}