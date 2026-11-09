const botonMenu = document.querySelector('.hamb')
const menu = document.querySelector('.menu')

botonMenu.addEventListener('click', () =>{
    menu.classList.toggle('open')
})