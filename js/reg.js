
    function Login() {
        var input = document.getElementsByName('array[]');
        var error = document.getElementById('error');
  
        var childname = document.querySelector('#childname').value
        var DOB = document.querySelector('#dob').value
        var sex = document.querySelector('#sex').value
        var place = document.querySelector('#poc').value
        var village = document.querySelector('#village').value
        var localGovt = document.querySelector('#local').value
        var state = document.querySelector('#sob').value
        var mName = document.querySelector('#motherName').value
        var maddress = document.querySelector('#address').value
        var maritalStatus = document.querySelector('#status').value
        var mnation = document.querySelector('#nationality').value
        var mstate = document.querySelector('#motherstate').value
        var moccupation = document.querySelector('#occupation').value
        var fName = document.querySelector('#fatherName').value
        var faddress = document.querySelector('#fatherAddress').value
        var fnationality = document.querySelector('#fnationality').value
        var fstate = document.querySelector('#fstate').value
        var foccupation = document.querySelector('#foccupation').value
        var token = localStorage.getItem('userToken')


        const url = 'https://unique-id-final-year-project.herokuapp.com/user_reg'
        const data = {
            nameOfChild: childname,
            dob: DOB,
            sex: sex,
            placeOfBirth: place,
            villageOfBirth: village,
            lgaOfBirth: localGovt,
            stateOfBirth: state,
            motherName: mName,
            motherAddress: maddress,
            motherMaritalStatus: maritalStatus,
            motherNationality: mnation,
            motherStateOfOrigin: mstate,
            motherOccupation: moccupation,
            fatherName: fName,
            fatherAddress: faddress,
            fatherNationality: fnationality,
            fatherStateOfOrigin:fstate,
            fatherOccupation: foccupation,

        }
        const fetchData = {
            method: 'post',
            headers: { 'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },

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
                childname = ''
                DOB = ''
                sex = ''
                place = ''
                village = ''
                localGovt = ''
                state = ''
                mName = ''
                maddress = ''
                maritalStatus = ''
                mnation = ''
                mstate = ''
                moccupation =''
                fName = ''
                faddress = ''
                fnationality = ''
                fstate = ''
                foccupation = ''

                
            } else {
                error.innerHTML = data.Message
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
