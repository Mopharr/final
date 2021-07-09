function submit() {
    var input = document.querySelector('#id')
    var token = localStorage.getItem('userToken')



    const url = 'https://unique-id-final-year-project.herokuapp.com/fetch_a_citizen'

    const data = {
        uniqueUserId: input
    }

    const fetchData = {
        method: 'post',
        headers: {'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    },

        body: JSON.stringify(data)

    }

    console.log(data)
    fetch(url,fetchData)
    .then(resp => {
        if(resp.ok){
            return resp.json() 
        }else{
            return Promise.reject("Ooops!!!! Something went Wrong")
        }
    })

    .then(data=> {
        console.log(data)
        if (data.Error === 0){
            input = ''
            self.location = "/preview.html"
        }else{
            error.innerHTML = data.Message
        }
    })
    .catch(error=> {
        console.log(error)
    })



}