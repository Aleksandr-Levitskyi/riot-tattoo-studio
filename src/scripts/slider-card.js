const tattooers = [
    {name: 'Оля', text: 'Самые мягкие портреты на районе', list: ['5 лет колю', '70 учеников научила', 'Рисую с детства']},
    {name: 'Саша Енот', text: 'Научу мыслить в 3D', list: ['10 лет рисую', 'Обожаю 3d рендер', 'Технологии наше все']},
    {name: 'Костя', text: 'Самый ровный контур', list: ['8 лет вожу полоски', 'сплю и вижу орнаментал', 'Просто хороший парень']},
    {name: 'Александр Bang', text: 'Динамика и композиция', list: ['6 лет в тату', 'Умею круто делать коллажи', 'Еще один хороший парень']}
]

function getTemplale () {
    const templateElement = document.querySelector('#slider-card-template');
    const clonedElement = templateElement.content.cloneNode(true);

    return clonedElement;
}

// console.log(createItem(tattooers));
createItem(tattooers);


function createItem(array){
    const result = [];
    const container = document.querySelector('.slider-inner') ;
    array.forEach((item)=>{
        let element = getTemplale();
        element.querySelector('.slider__name').textContent = item.name;

        result.push(element);
    })

    renderItem(result, container);
}


function renderItem (array, container){
    array.forEach(element => {
        container.append(element);  
    });
}