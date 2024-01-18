// import { LIST_CLASS_NAMES } from "./constants"; 

const LIST_CLASS_NAMES = {
    elementClass: '.learning__item',
    titleClass: '.learning__item-label',
    textClass: '.learning__item'
}

const LEARN_PLANS = [
    { title: 'РАБОТАТЬ С ТИПАМИ КОЖИ', text: 'Изучишь особенности разных типов кожи' },
    { title: 'ПЛОТНО И ЯРКО КРАСИТЬ', text: 'Научишься красить без ненужных травм' },
    { title: 'РИСОВАТЬ СВОИ ЭСКИЗЫ', text: 'Научишься превращать свои идеи в эскизы' },
    { title: 'РАБОТАТЬ В СТЕРИЛЬНОСТИ', text: 'Изучишь необходимые нормы санпина' },
]

const container = document.querySelector('.skills-section__list');

renderElement(createElement(LEARN_PLANS), container);


function getTemplate() {        //находим шаблон элемента и копируем его
    let template = document.querySelector('#list-item-template').content;
    let element = template.cloneNode(true); //копируем все содержимое шаблона с учетом вложенных элементов

    return element;
}


function createElement(array) {     //создаем экземпляр элемента
    const arrElements = array.map((item) => {
        let element = getTemplate();
        element.querySelector('.list-card__label').textContent = item.title;
        element.querySelector('.list-card__text').textContent = item.text;

        return element;
    })

    return arrElements;
}

function renderElement(arr, container) {     //добавляем карточку в HTML 
    arr.forEach(element => {
        container.append(element);
    });
}

