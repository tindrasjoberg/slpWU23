// const header = document.querySelector("header");
// window.addEventListener ("scroll", funktion() {
//     header.classList.toggle ("sticky", window.scrollY > 100);
// });

let menu = document.querySelector('#menu-icon');
let navliist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};