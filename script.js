
//очищаем текст в input
function onClearInputText (input) {
    input.value = '';
}

//создаем функцию для удаления элемента
//@param event - передача события (onclick)
function onRemoveElemList (event) {
    if (typeof event.path[1] != 'undefined' && event.path[1].localName == 'li') {
        event.path[1].remove();
    }
}
//картинка для сортировки
const imgForSort = document.querySelector('div#imgForSort img');

//ищем картинку. По идентификатору не находит
const imgDelText = document.querySelector('img#imgForDelInputText');

const form = document.querySelector('form');
const input = document.querySelector('#inputTable>input[name="inputTxt"]');

imgDelText.onclick = () => onClearInputText(input);

form.onsubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    
    if (data.get('inputTxt').trim().length > 0) {
        
        //получаем доступ к родителькому элементу списка
        //ищем родительский элемент списка
        let ulForAdd = document.getElementById('ulList');
        
        // создаем новый элемент списка
        let newElementLi = document.createElement('li');
        let textField = document.createElement('span');
        let imageClose = document.createElement('img');
        
        // добавляем текст в поле
        textField.innerText = data.get('inputTxt');
        imageClose.setAttribute('src', 'image/Group 77.png');
        imageClose.id = 'imgForDelInputText';

        //добавляем событие удаление элемента списка
        //@function onRemoveElemList
        imageClose.onclick = (event) => onRemoveElemList (event);
        
        newElementLi.append(textField);
        newElementLi.append(imageClose);
        ulForAdd.append(newElementLi);

        ulForAdd.style.display = 'block';
        // очищаем поле ввода после действия
        onClearInputText(input);
    }
}

//создаем функцию сортировки списка
imgForSort.addEventListener('click', sortElementList)
 
function sortElementList () {
    // пустой массив для добавления объектов
    let arrForObjects = [];
    // обращаемся ко всем элементам li
    let sortElemList = document.querySelectorAll('li');
   
    // создаем объекты с дочерними элементами каждой li
    sortElemList.forEach((item) => {
        let arrElemList = [...item.children];
        let objectList = {
             objSpan: arrElemList[0].innerText,
             objImg: arrElemList[1]
         };
         arrForObjects.push(objectList); 
    })
    
    //получили массив из объектов списка
    console.log(arrForObjects)   

    arrForObjects.sort((a, b) => {
        return a - b;
    })
    console.log(arrForObjects)   
}


// contenteditable