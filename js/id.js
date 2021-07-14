function submit() {
    var uniqueId = document.querySelector('#id').value


    const url = `https://unique-id-final-year-project.herokuapp.com/fetch_a_citizen/${uniqueId}`

    fetch(url)
    .then(resp => {
        if(resp.ok){
            return resp.json() 
        }else{
            return Promise.reject("Ooops!!!! Something went Wrong")
        }
    })

    .then(data=> {
        localStorage.setItem('UserRecord', JSON.stringify(data.data))

        if (data.Error === 0){
            uniqueId = ''
            
            self.location = "/preview.html"
        }else{
            error.innerHTML = data.Message
        }
    })
    .catch(error=> {
        console.log(error)
    })



}

