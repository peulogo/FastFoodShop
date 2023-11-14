window.addEventListener('load', function(){document.body.classList.remove('loading')})

const cart = document.querySelector('.card__container');
const products = document.querySelectorAll('.product__item');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__close-btn');

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

cart.addEventListener('click', () => {
    if(window.innerWidth <= 785){
        cart.classList.toggle("_active-card")
    }
});

products.forEach((product) => {
    product.addEventListener('click', () =>{
        popup.classList.add('_active-popup');
        document.body.classList.add('unscroll')
    })
})

products.forEach((product) => {
    product.addEventListener('click', () =>{
        popup.classList.add('_active-popup');
        document.body.classList.add('unscroll')
    })
})

closeBtn.addEventListener('click', () => {
    popup.classList.remove('_active-popup');
    document.body.classList.remove('unscroll')
})
