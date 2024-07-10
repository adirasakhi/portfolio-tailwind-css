// Nav fix
window.onscroll = function(){
    const header = document.querySelector('header')
    const fixNav = header.offsetTop;

    if(window.pageYOffset > fixNav){
        header.classList.add('nav-fixed');
    } else{
        header.classList.remove('nav-fixed');
    }
}

// Hamburger 
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
});