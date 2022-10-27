const arrGroceryList = [
    'pane',
    'pasta',
    'olio',
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

    if (arrGroceryList.length >= 20) {
        message.innerHTML = 'hai raggiunto il limite di articoli'
        text.value = '' 

    } else if (text.value == '') {
        message.innerHTML = 'inserisci un articolo'
    } else {
        arrGroceryList.push(text.value);
        groceryList.innerHTML += `<li>${text.value}</li>`
        message.innerHTML = ''
        text.value = '' 
    }
});

