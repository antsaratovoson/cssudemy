const toggleBox = () => {
    document.querySelector('.box').classList.toggle('animation');
    document.querySelector('.paragraphe-animation').classList.toggle('animation');
}
document.querySelector('#btn-animation').addEventListener('click', toggleBox);


const btnActiveHamburger = document.querySelector('.btn-hamburger');
btnActiveHamburger.addEventListener('click', function(){
    this.classList.toggle('active');
});