// NAVBAR FOR THE ADMIN PANEL 
const userToken = localStorage.getItem('userToken')
const tableBody = document.querySelector('#tableBody')
console.log(tableBody)
const loadData = () => {
    const url = `https://unique-id-final-year-project.herokuapp.com/fetch_all`
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
        if (data.Error === 0){
            localStorage.setItem('allRecords', JSON.stringify(data.data))
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
                // if (sn === 5) {
                //     break
                // }
            }
        } else {
            console.log(data.Message)
            // error.innerHTML = data.Message
            // setTimeout(_ => error.innerHTML = '', 3000)
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
