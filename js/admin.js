// NAVBAR FOR THE ADMIN PANEL 
const userToken = localStorage.getItem('userToken')
const tableBody = document.querySelector('#tableBody')
const processing = document.querySelector('.processing')
const searchBtn = document.querySelector('#searchBtn')
const error = document.querySelector('.error')


searchBtn.addEventListener('click', () => {
    const searchText = document.querySelector('#searchText').value
    loadData(searchText)
})

const loadData = (userId) => {
    processing.style.display = 'flex'
    let url
    if(userId) {
        url = `https://unique-id-final-year-project.herokuapp.com/fetch_a_citizen/${userId}`
    } else {
        url = `https://unique-id-final-year-project.herokuapp.com/fetch_all`
    }
    fetch(url, {
        headers: {
            'Authorization': `Bearer ${userToken}`
        }
    })
    .then(resp => {
        if(resp.ok){
            return resp.json() 
        } else {
            return Promise.reject("Ooops!!!! Something went Wrong")
        }
    })
    .then(data=> {
        processing.style.display = 'none'
        if (data.Error === 0){
            if (Array.isArray(data.data)) {
                let sn = 0
                for (record of data.data) {
                    sn++
                    const row = document.createElement('tr')
                    row.innerHTML = `
                        <td> ${sn} </td>
                        <td> ${record.nameOfChild} </td>
                        <td> ${record.sex} </td>
                        <td> ${record.dob} </td>
                        <td> ${record.uniqueUserId} </td>
                    `
                    tableBody.append(row)
                }
            } else {
                const record = data.data
                const row = `
                    <tr>
                    <td> ${1} </td>
                    <td> ${record.nameOfChild} </td>
                    <td> ${record.sex} </td>
                    <td> ${record.dob} </td>
                    <td> ${record.uniqueUserId} </td>
                    </tr>
                `
                tableBody.innerHTML = row
            }
        } else {
            error.innerHTML = data.Message
            setTimeout(_ => error.innerHTML = '', 3000)
        }
    })
    .catch(error => {
        console.log(error)
    })
}

if (userToken === null) {
    self.location = '/'
} else {
    loadData()
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
