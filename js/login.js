




// VALIDATION FOR THE LOGIN PAGE 
const process = document.querySelector('#process')
const submit = document.querySelector('#submit')
function processing() {
    process.style.display = 'block'
    submit.style.display = 'none'
}
function notProcessing() {
    process.style.display = 'none'
    submit.style.display = 'block'
}

function login() {
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var error = document.getElementById('error');
    // var upload_btn = document.getElementById('submit')
    processing()
    

    const url = 'https://unique-id-final-year-project.herokuapp.com/login'
    const data = {
        userName: user,
        password: pass
    }
    const fetchData = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body:  JSON.stringify(data),
    }
    fetch(url, fetchData)
    .then(resp => {
        if(resp.ok) {
            return resp.json()
        } else {
            return Promise.reject("Oops!!! Something went wrong.")
        }
    })
    .then(data => {
        notProcessing()
        console.log(data)
        if (data.Error === 0) {
            user = ''
            pass = ''
            localStorage.setItem('userToken', data.token)
            self.location = '/admin.html'
        } else {
            error.innerHTML = data.Message
        }
    })
    .catch(error => {
        console.log(error)
    })
}