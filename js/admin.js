// NAVBAR FOR THE ADMIN PANEL 


const menu = document.querySelector('#hamburger')

const menuLinks = document.querySelector('.dashboard')

const mobileMenu = () => {
    menu.classList.toggle('is-active')

    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)