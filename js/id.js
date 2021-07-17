const process = document.querySelector('#process')
const submitBtn = document.querySelector('#submitBtn')
const submitId = document.querySelector('#submitId')
const processId = document.querySelector('#processId')
function processing(location) {
    if (location === 'id') {
        processId.style.display = 'block'
        submitId.style.display = 'none'
    } else {
        process.style.display = 'block'
        submitBtn.style.display = 'none'
    }
}
function notProcessing(location) {
    if (location === 'id') {
        processId.style.display = 'none'
        submitId.style.display = 'block'
    } else {
        process.style.display = 'none'
        submitBtn.style.display = 'block'
    }
}


function submit() {
    let uniqueId = document.querySelector('#id').value
    const error = document.querySelector('#error')
    const url = `https://unique-id-final-year-project.herokuapp.com/fetch_a_citizen/${uniqueId}`

    if (uniqueId) {
        processing('id')
        fetch(url)
        .then(resp => {
            if(resp.ok){
                return resp.json() 
            } else {
                return Promise.reject("Ooops!!!! Something went Wrong")
            }
        })
        .then(data=> {
            notProcessing('id')
            if (data.Error === 0){
                uniqueId = ''
                localStorage.setItem('UserRecord', JSON.stringify(data.data))
                self.location = "/preview.html"
            } else {
                error.innerHTML = data.Message
                setTimeout(_ => error.innerHTML = '', 3000)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
}

const submitMsg = () => {
    let email = document.querySelector('#email')
    let message = document.querySelector('#msg')
    const contactError = document.querySelector('#contactError')
    const success = document.querySelector('#success')
    if (email.value !== '' && message.vlaue !== '') {
        processing('feedback')
        const url = `https://unique-id-final-year-project.herokuapp.com/feedback`
        // const url = `http:localhost:3000/feedback`
        const fetchData = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value,
                message: message.value
            })
        }
        fetch(url, fetchData)
        .then(resp => {
            if(resp.ok){
                return resp.json() 
            } else {
                return Promise.reject("Ooops!!!! Something went Wrong")
            }
        })
        .then(data=> {
            notProcessing('feedback')
            if (data.Error === 0){
                message.value = ''
                email.value = ''
                success.innerHTML = data.Message
                setTimeout(_ => success.innerHTML = '', 3000)
            } else {
                contactError.innerHTML = data.Message
                setTimeout(_ => contactError.innerHTML = '', 3000)
            }
        })
        .catch(error => {
            console.log(error)
        })
    } else {
        contactError.innerHTML = 'Provide your email and message to be sent'
        setTimeout(_ => contactError.innerHTML = '', 3000)
    }
}

