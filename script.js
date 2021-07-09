const form = document.querySelector('form');

form.onsubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if (data.get('inputTxt')) {
        let newText = document.createElement('li');
        newText.innerText = data.get('inputTxt');
        console.log(data.get('inputTxt'));
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