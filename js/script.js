const arrGroceryList = [
    'Pane',
    'Pasta',
    'Olio',
]


const groceryList = document.querySelector('.grocery-list');
const form = document.querySelector('form');
const message = document.querySelector('.message');
const text = document.querySelector('.text');


let i = 0


while (i < arrGroceryList.length) {

    groceryList.innerHTML += `<li>${arrGroceryList[i]}</li>`;

    i++;

}



form.addEventListener('submit', function(event) {

    event.preventDefault()

    if (arrGroceryList.length >= 10) {
        message.innerHTML = 'MAX LIMIT'
        text.value = ''
        message.classList.add('negative')
        message.classList.remove('empty')

    } else if (text.value == '') {
        message.innerHTML = 'ADD AN ITEM'
        message.classList.add('empty')
        message.classList.remove('negative')
    } else {
        arrGroceryList.push(text.value);
        groceryList.innerHTML += `<li>${text.value}</li>`
        message.innerHTML = ''
        text.value = '' 
        message.classList.remove('empty')
        message.classList.remove('negative')
    }
});

