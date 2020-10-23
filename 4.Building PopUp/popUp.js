//lets first go in css and go to our popup-wrapper and display it to none 
//we do this above after css and want to move to JS
const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close')

button.addEventListener('click', () => {
    popup.style.display = 'block';
});


close.addEventListener('click', () => {
    popup.style.display = 'none ';
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
})