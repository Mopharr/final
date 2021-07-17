
 const cname = document.querySelector('#cname')
 const DOB = document.querySelector('#DOB')
//  const regId = document.querySelector('#regId')
 const localGovt = document.querySelector('#localGovt')
 const state = document.querySelector('#state')
 const sex = document.querySelector('#sex')
 const fName = document.querySelector('#fName')
 const fOccupation = document.querySelector('#fOccupation')
 const mName = document.querySelector('#mName')
 const mOccupation = document.querySelector('#mOccupation')
 

let userRecord = localStorage.getItem('UserRecord')

if (userRecord === null) {
    self.location = '/'
}else{
    userRecord = JSON.parse(userRecord)
    console.log(userRecord)
    cname.innerHTML = userRecord.nameOfChild
    DOB.innerHTML = userRecord.dob
    // regId.innerHTML = userRecord.uniqueUserId
    localGovt.innerHTML = userRecord.lgaOfBirth
    state.innerHTML = userRecord.stateOfBirth
    sex.innerHTML = userRecord.sex
    fName.innerHTML = userRecord.fatherName
    fOccupation.innerHTML = userRecord.fatherOccupation
    mName.innerHTML = userRecord.motherName
    mOccupation.innerHTML = userRecord.motherOccupation
}