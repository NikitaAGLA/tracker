//true - сортировать по возрастанию
//false - сортировать по убыванию
// необходимо создать проверку данного флага
// и запускать соответствующую функцию сортировки 
//согласно данномму флагу и его значению
let flagSort = true;
//очистка элементов 
function clearElem (element) {
    element.innerHTML ='';
}

//функция для обращения к списку
function getElemList () {
    return document.getElementById('ulList');
}

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
const imgDelText = document.querySelector('.x#imgForDelInputText');
console.dir(imgDelText);
const form = document.querySelector('form');
const input = document.querySelector('#inputTable>input[name="inputTxt"]');

imgDelText.onclick = () => onClearInputText(input);
// imgDelText.addEventListener('mouseover', function(){
//     imgDelText.setAttribute('src', 'image/Group 70 col.png');
// });


form.onsubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    
    if (data.get('inputTxt').trim().length > 0) {
        
        //получаем доступ к родителькому элементу списка
        //ищем родительский элемент списка
        let ulForAdd = getElemList ();
        
        // создаем новый элемент списка
        let newElementLi = document.createElement('li');
        let textField = document.createElement('span');
        let imageClose = document.createElement('img');
        
        // добавляем текст в поле
        textField.innerText = data.get('inputTxt');
        imageClose.setAttribute('src', 'image/Group 77.png');
        imageClose.className = 'deleteElementList';

        //добавляем событие удаление элемента списка
        //@function onRemoveElemList
        imageClose.onclick = (event) => onRemoveElemList (event);
        
        newElementLi.append(textField);
        newElementLi.append(imageClose);
        ulForAdd.append(newElementLi);

        ulForAdd.style.display = 'block';
        ulForAdd.style.margin = 0;
        // очищаем поле ввода после действия
        onClearInputText(input);
    }
}

//создаем функцию сортировки списка
imgForSort.addEventListener('click', sortElementList)
/**
 * Функция для сортировки
 */
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
  
    //сортировка
    if (flagSort) {
        sortAsc(arrForObjects); // по возрастанию
        flagSort = false;
    } else {
        sortDesc(arrForObjects); //по убыванию
        flagSort = true;
    }

    changeSortImg(flagSort);
      
    createNewList (arrForObjects)
    
}

// создаем функцию которая удаляет и отрисовывает список 
function createNewList(elemSort) {
    let ulForAdd = getElemList();
    
    clearElem (ulForAdd);
   
    elemSort.forEach((item) => {
        ulForAdd.innerHTML += `
        <li><span>${item.objSpan}</span><img src="image/Group 77.png" class='deleteElementList'></li>
        `;
    })
    document.querySelectorAll('.deleteElementList').forEach((item) => {
        item.onclick = (event) => onRemoveElemList (event);
    });
    
}
// продумать алгоритм сортировки
// использовать аргументы функции для получения данных
// данные функции должны возвращать результат сортировки
function sortAsc(item){
    item.sort(function (a, b) {
        if (a.objSpan > b.objSpan) {
            return 1;
        }
        if (a.objSpan < b.objSpan) {
            return -1;
        }
        return 0;
    })
    console.dir(item);
}
function sortDesc(item){
    item.sort(function (a, b) {
        if (a.objSpan < b.objSpan) {
            return 1;
        }
        if (a.objSpan > b.objSpan) {
            return -1;
        }
        return 0;
    })
}

// функция для изменения иконки для сортировки
function changeSortImg (flag) {
    let arr = ['image/Group 74.png', 'image/Group 90.png'];
    let img = document.querySelector('div#imgForSort>img');
    if (flag === true) {
        img.setAttribute('src', arr[0])
    } else {
        img.setAttribute('src', arr[1])
    }
}



// contenteditable