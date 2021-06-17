// NAVBAR FOR THE ADMIN PANEL 

const menu = document.querySelector('#hamburger')

const menuLinks = document.querySelector('.dashboard')

const mobileMenu = () => {
    menu.classList.toggle('is-active')

    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// END OF THE NAVBAR 

// VALIDATION FOR THE LOGIN PAGE 

function login() {
    
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    if (user =="admin" && pass == "admin123" ) {
        
        location.assign("./admin.html");
    }
    else
    {
        window.alert("login failed")
    }
}