const form = document.querySelector('form');

form.onsubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if (data.get('inputTxt')) {
        let ulForAdd = document.getElementById('ulList');
        let newText = document.createElement('li');
        
        newText.setAttribute('display', 'inline-block');
        newText.setAttribute('max-width', '90%');

        let x = document.createElement('IMG');
        x.setAttribute('src', 'image/Group 77.png')
        newText.innerText = data.get('inputTxt');
        ulForAdd.prepend(newText, x);
    }
}













// const newInput = document.querySelector('#inputTable input');
// const txtBlock = document.getElementById('textBlock');
// const buttonForAdd = document.querySelector('#btn button');
// const ulForAdd = document.getElementById('ulList');

// buttonForAdd.addEventListener('click', addNewText);

// function addNewText () {
    
//     if (newInput.value) {
//        let newText = document.createElement('li');

//        newText.innerText = newInput.value;
//        document.ulForAdd.prepend(newText);
    
//     }
// }