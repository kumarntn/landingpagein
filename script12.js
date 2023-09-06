const moveTop = document.querySelector('.top');
window.addEventListener('scroll', () => {
    let y = window.scrollY;
    if (y >= 300) {
        moveTop.classList.add('active');
    } else {
        moveTop.classList.remove('active');
    }

});
const btnshow = document.querySelector('.btn-show');
const navbar = document.querySelector('.navbar');
btnshow.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

