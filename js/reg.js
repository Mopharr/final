var k = "";
    function Login() {
        var input = document.getElementsByName('array[]');
        var error = document.getElementById('error');
  
        for (var i = 0; i < input.length; i++) {
            var a = input[i];
            k = k + a.value + " ";
        }
        console.log(k);

        const url = 'https://unique-id-final-year-project.herokuapp.com/'
        const data = {
            input: k,
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
                input = "";
                localStorage.setItem('userToken', data.token)
                self.location = '/'
                console.log("succesful");
            } else {
                error.innerHTML = data.Message
            }
        })
        .catch(error => {
            console.log(error)
        })
    }