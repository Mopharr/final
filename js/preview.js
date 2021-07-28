
const cname = document.querySelector('#cname')
const DOB = document.querySelector('#DOB')
const regId = document.querySelector('#regId')
const localGovt = document.querySelector('#localGovt')
const state = document.querySelector('#state')
const sex = document.querySelector('#sex')
const placeOfOccurence = document.querySelector('#POC')
const fName = document.querySelector('#fName')
const fAddress = document.querySelector('#fAddress')
const fState = document.querySelector('#fState')
const fOccupation = document.querySelector('#fOccupation')
const mName = document.querySelector('#mName')
const mAddress = document.querySelector('#mAddress')
const mStatus = document.querySelector('#mStatus')
const mState = document.querySelector('#mState')
const mOccupation = document.querySelector('#mOccupation')
//  
let userRecord = localStorage.getItem('UserRecord')
if (userRecord === null) {
    self.location = "/admin.html"
} else {
    userRecord = JSON.parse(userRecord)
    cname.innerHTML = userRecord.nameOfChild
    DOB.innerHTML = userRecord.dob
    regId.innerHTML = userRecord.uniqueUserId
    state.innerHTML = userRecord.stateOfBirth
    sex.innerHTML = userRecord.sex
    placeOfOccurence.innerHTML = userRecord.placeOfBirth
    fName.innerHTML = userRecord.fatherName
    fAddress.innerHTML = userRecord.fatherAddress
    fState.innerHTML = userRecord.fatherStateOfOrigin
    localGovt.innerHTML = userRecord.lgaOfBirth
    fOccupation.innerHTML = userRecord.fatherOccupation
    mName.innerHTML = userRecord.motherName
    mAddress.innerHTML = userRecord.motherAddress
    mStatus.innerHTML = userRecord.motherMaritalStatus
    mState.innerHTML = userRecord.motherStateOfOrigin
    mOccupation.innerHTML = userRecord.motherOccupation
}

const goBack = () => {
    localStorage.removeItem('UserRecord')
    self.location = "/admin.html"
}