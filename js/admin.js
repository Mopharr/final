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



const adminName = document.querySelector('#adminName')
const adminSex = document.querySelector('#adminSex')
const adminDOB = document.querySelector('#adminDOB')
const adminId = document.querySelector('#adminId')


let userRecord = localStorage.getItem('UserRecord')

if (userRecord === null) {
    self.location = '/'
}else{
    userRecord = JSON.parse(userRecord)
    console.log(userRecord)

    adminName.innerHTML = userRecord.nameOfChild
    adminSex.innerHTML = userRecord.sex
    adminDOB.innerHTML = userRecord.dob
    adminId.innerHTML = userRecord.uniqueUserId
}
