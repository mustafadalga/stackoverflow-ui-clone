var hamburger_menu = document.querySelector('.hamburger-menu-container');
var button = hamburger_menu.querySelector('.hamburger-menu')
button.addEventListener('click', (event) => {
    hamburger_menu.classList.toggle('open')
})