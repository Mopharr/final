




// VALIDATION FOR THE LOGIN PAGE 

function login() {
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var error = document.getElementById('error');
    var upload_btn = document.getElementById('submit')
    upload_btn.value = 'processing...'

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


    console.log(data)
    fetch(url, fetchData)
    .then(resp => {
        if(resp.ok) {
            return resp.json()
        } else {
            return Promise.reject("Oops!!! Something went wrong.")
        }
    })
    .then(data => {
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