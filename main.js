// MENU MOBILE
const button = document.querySelector ('.nav__menu')
const navMobile = document.querySelector('.nav__lista')

button.addEventListener('click', () => {
    navMobile.classList.toggle('active');
});

// FAQ CONTAINER
const faqs = document.querySelectorAll('.faq__content')

faqs.forEach((faq__content) => {
    faq__content.addEventListener('click', () => {
        faq__content.classList.toggle('active')
    });
});