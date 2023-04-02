let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('meny-open');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('meny-open');
    navlist.classList.remove('open');
};