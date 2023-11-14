window.addEventListener('load', function(){document.body.classList.remove('loading')})

const cart = document.querySelector('.card__container');

cart.addEventListener('click', () => {
    if(window.innerWidth <= 785){
        cart.classList.toggle("_active-card")
    }
});
