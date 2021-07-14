// NAVBAR FOR THE ADMIN PANEL 
const userToken = localStorage.getItem('userToken')

if (userToken === null) {
    self.location = '/'
} 
function signOut() {
    localStorage.clear()
    self.location = '/'
}

const menu = document.querySelector('#hamburger')

const menuLinks = document.querySelector('.dashboard')

const mobileMenu = () => {
    menu.classList.toggle('is-active')

    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)